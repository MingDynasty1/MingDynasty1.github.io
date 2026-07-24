// supabase-client.js
const SUPABASE_URL = 'https://jaovjvdsfhdeppvsqqsa.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imphb3ZqdmRzZmhkZXBwdnNxcXNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTA3MzcsImV4cCI6MjEwMDQyNjczN30.ZbiJnuJyPzUX9tMXIL9hdqNyo07T8i4zfp1Uo4p7dQQ';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ===================== 注册 =====================
async function registerUser(username, password, email) {
    try {
        const { data, error } = await supabaseClient.auth.signUp({
            email: email,
            password: password,
            options: {
                data: { username: username }
            }
        });
        if (error) throw error;
        return { success: true, user: data.user };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// ===================== 登录 =====================
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

// ===================== 获取当前用户 =====================
async function getCurrentUser() {
    try {
        const { data: { user }, error } = await supabaseClient.auth.getUser();
        if (error || !user) return null;

        const { data: profile } = await supabaseClient
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();

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

// ===================== 更新资料 =====================
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

// ===================== 修改密码 =====================
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

// ===================== 登出 =====================
async function logoutUser() {
    try {
        const { error } = await supabaseClient.auth.signOut();
        if (error) throw error;
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}
