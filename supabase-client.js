// ============================================================
// supabase-client.js
// 大明 OJ 的 Supabase 客户端封装
// ============================================================

const SUPABASE_URL = 'https://jaovjvdsfhdeppvsqqsa.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imphb3ZqdmRzZmhkZXBwdnNxcXNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTA3MzcsImV4cCI6MjEwMDQyNjczN30.ZbiJnuJyPzUX9tMXIL9hdqNyo07T8i4zfp1Uo4p7dQQ';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 评测函数地址
const JUDGE_FUNCTION_URL = 'https://jaovjvdsfhdeppvsqqsa.supabase.co/functions/v1/clever-action';


// ============================================================
// 用户相关
// ============================================================
async function registerUser(username, password, email) {
    try {
        const { data, error } = await supabaseClient.auth.signUp({
            email: email,
            password: password,
            options: { data: { username: username } }
        });
        if (error) throw error;
        return { success: true, user: data.user };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

async function loginUser(email, password) {
    try {
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: email,
            password: password
        });
        if (error) throw error;
        return { success: true, user: data.user };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

async function getCurrentUser() {
    try {
        const { data: { user }, error } = await supabaseClient.auth.getUser();
        if (error || !user) return null;

        const { data: profile } = await supabaseClient
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .maybeSingle();

        if (profile) {
            return { ...user, profile: profile };
        }
        return {
            ...user,
            profile: {
                username: user.user_metadata?.username || '用户',
                email: user.email,
                bio: '暂无简介',
                created_at: user.created_at
            }
        };
    } catch (error) {
        return null;
    }
}

async function updateProfile(userId, updates) {
    try {
        const { data, error } = await supabaseClient
            .from('profiles')
            .update({ ...updates, updated_at: new Date().toISOString() })
            .eq('id', userId);
        if (error) throw error;
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

async function updatePassword(newPassword) {
    try {
        const { error } = await supabaseClient.auth.updateUser({
            password: newPassword
        });
        if (error) throw error;
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

async function logoutUser() {
    try {
        const { error } = await supabaseClient.auth.signOut();
        if (error) throw error;
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

async function getUserById(userId) {
    const { data, error } = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();
    if (error) return null;
    return data;
}

async function getUserSubmissions(userId, limit = 20) {
    const { data, error } = await supabaseClient
        .from('submissions')
        .select('id, problem_id, language, status, score, time_used, created_at')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(limit);
    if (error) { console.error(error); return []; }
    return data || [];
}


// ============================================================
// 题目相关
// ============================================================
async function getProblems() {
    const { data, error } = await supabaseClient
        .from('problems')
        .select('id, title, difficulty, tags, created_at')
        .eq('is_public', true)
        .order('id', { ascending: true });
    if (error) { console.error(error); return []; }
    return data || [];
}

async function getProblem(id) {
    const { data, error } = await supabaseClient
        .from('problems')
        .select('*')
        .eq('id', id)
        .maybeSingle();
    if (error) return null;
    return data;
}


// ============================================================
// 提交 & 评测
// ============================================================
async function submitCode(problemId, language, code) {
    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) return { success: false, error: '请先登录' };

    const { data, error } = await supabaseClient
        .from('submissions')
        .insert({
            user_id: user.id,
            problem_id: problemId,
            language: language,
            code: code,
            status: 'Pending'
        })
        .select()
        .single();

    if (error) return { success: false, error: error.message };

    // 触发评测（不阻塞返回）
    try {
        const { data: { session } } = await supabaseClient.auth.getSession();
        fetch(JUDGE_FUNCTION_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + (session?.access_token || SUPABASE_ANON_KEY)
            },
            body: JSON.stringify({ submission_id: data.id })
        }).catch(e => console.warn('触发评测失败:', e));
    } catch (e) {
        console.warn('触发评测失败:', e);
    }

    return { success: true, submission: data };
}

async function getSubmission(id) {
    const { data, error } = await supabaseClient
        .from('submissions')
        .select('*')
        .eq('id', id)
        .maybeSingle();
    if (error) return null;
    return data;
}


// ============================================================
// 排名
// ============================================================
async function getRanking(limit = 50) {
    const { data, error } = await supabaseClient
        .from('profiles')
        .select('id, username, email, avatar_url, rating, solved_count')
        .order('solved_count', { ascending: false })
        .order('rating', { ascending: false })
        .limit(limit);
    if (error) { console.error(error); return []; }
    return data || [];
}


// ============================================================
// 比赛
// ============================================================
async function getContests() {
    const { data, error } = await supabaseClient
        .from('contests')
        .select('*')
        .eq('is_public', true)
        .order('start_time', { ascending: false });
    if (error) { console.error(error); return []; }
    return data || [];
}


// ============================================================
// 讨论
// ============================================================
async function getRecentDiscussions(limit = 10) {
    const { data, error } = await supabaseClient
        .from('discussions')
        .select('id, title, author_id, reply_count, created_at')
        .order('created_at', { ascending: false })
        .limit(limit);
    if (error) { console.error(error); return []; }
    return data || [];
}

async function getDiscussions(limit = 30) {
    const { data, error } = await supabaseClient
        .from('discussions')
        .select('id, title, author_id, problem_id, reply_count, created_at')
        .order('created_at', { ascending: false })
        .limit(limit);
    if (error) { console.error(error); return []; }

    const authorIds = [...new Set((data || []).map(d => d.author_id).filter(Boolean))];
    let authorMap = {};
    if (authorIds.length) {
        const { data: profiles } = await supabaseClient
            .from('profiles')
            .select('id, username, avatar_url')
            .in('id', authorIds);
        (profiles || []).forEach(p => { authorMap[p.id] = p; });
    }

    return (data || []).map(d => ({ ...d, author: authorMap[d.author_id] || null }));
}

async function getDiscussion(id) {
    const { data, error } = await supabaseClient
        .from('discussions')
        .select('*')
        .eq('id', id)
        .maybeSingle();
    if (error || !data) return null;

    let author = null;
    if (data.author_id) {
        const { data: p } = await supabaseClient
            .from('profiles')
            .select('id, username, avatar_url')
            .eq('id', data.author_id)
            .maybeSingle();
        author = p;
    }

    let problem = null;
    if (data.problem_id) {
        const { data: pr } = await supabaseClient
            .from('problems')
            .select('id, title')
            .eq('id', data.problem_id)
            .maybeSingle();
        problem = pr;
    }

    return { ...data, author, problem };
}

async function getDiscussionReplies(discussionId) {
    const { data, error } = await supabaseClient
        .from('discussion_replies')
        .select('*')
        .eq('discussion_id', discussionId)
        .order('created_at', { ascending: true });
    if (error) { console.error(error); return []; }

    const authorIds = [...new Set((data || []).map(r => r.author_id).filter(Boolean))];
    let authorMap = {};
    if (authorIds.length) {
        const { data: profiles } = await supabaseClient
            .from('profiles')
            .select('id, username, avatar_url')
            .in('id', authorIds);
        (profiles || []).forEach(p => { authorMap[p.id] = p; });
    }

    return (data || []).map(r => ({ ...r, author: authorMap[r.author_id] || null }));
}

async function createDiscussion(title, content, problemId = null) {
    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) return { success: false, error: '请先登录' };

    const { data, error } = await supabaseClient
        .from('discussions')
        .insert({
            title: title,
            content: content,
            author_id: user.id,
            problem_id: problemId
        })
        .select()
        .single();

    if (error) return { success: false, error: error.message };
    return { success: true, discussion: data };
}

async function createReply(discussionId, content) {
    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) return { success: false, error: '请先登录' };

    const { data, error } = await supabaseClient
        .from('discussion_replies')
        .insert({
            discussion_id: discussionId,
            author_id: user.id,
            content: content
        })
        .select()
        .single();

    if (error) return { success: false, error: error.message };

    // 累加回复数
    const { data: disc } = await supabaseClient
        .from('discussions')
        .select('reply_count')
        .eq('id', discussionId)
        .maybeSingle();
    if (disc) {
        await supabaseClient
            .from('discussions')
            .update({ reply_count: (disc.reply_count || 0) + 1 })
            .eq('id', discussionId);
    }

    return { success: true, reply: data };
}
