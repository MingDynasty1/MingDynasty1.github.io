const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

// 中间件
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('.'));

// 启用CORS（如果前端和后端在不同域名）
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGINS || '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// 问题数据
const problems = [
    {
        id: 1,
        title: "数字连接问题",
        description: "将一组正整数连接成一个最大的整数",
        difficulty: "简单",
        acceptance: "85.2",
        updateTime: "2024-01-15",
        testCases: [
            { input: "3\n13 312 343", expected: "34331213" },
            { input: "4\n7 13 4 246", expected: "7424613" }
        ]
    },
    {
        id: 2,
        title: "最大子序列和",
        description: "找出一个整数序列中连续子序列的最大和",
        difficulty: "中等",
        acceptance: "72.5",
        updateTime: "2024-01-10",
        testCases: [
            { input: "5\n-2 11 -4 13 -5", expected: "20" },
            { input: "6\n-1 -2 -3 -4 -5 -6", expected: "-1" }
        ]
    },
    {
        id: 3,
        title: "两数之和",
        description: "在数组中找到两个数，使它们的和等于目标值",
        difficulty: "简单",
        acceptance: "90.1",
        updateTime: "2024-01-08",
        testCases: [
            { input: "4 9\n2 7 11 15", expected: "0 1" },
            { input: "3 6\n3 2 4", expected: "1 2" }
        ]
    },
    {
        id: 4,
        title: "大明密码加密",
        description: "实现明朝风格的密码加密算法",
        difficulty: "中等",
        acceptance: "65.3",
        updateTime: "2024-01-20",
        testCases: [
            { input: "hello 大明", expected: "khoor 洪文" },
            { input: "programming", expected: "surjudpplqj" }
        ]
    }
];

// 用户数据存储
let users = [];

// 初始化用户数据
async function initUsers() {
    try {
        if (fs.existsSync('server.js')) {
            delete require.cache[require.resolve('./server.js')];
            const server = require('./server.js');
            users = server.users || [];
        } else {
            // 创建默认管理员用户
            users = [
                {
                    id: 1,
                    username: "admin",
                    password: "admin123",
                    email: "admin@mingdynasty.com",
                    registerTime: new Date().toISOString(),
                    solvedProblems: [1, 2],
                    submissions: [],
                    role: "admin"
                }
            ];
            await saveUsers();
        }
        console.log(`用户数据初始化完成，共 ${users.length} 个用户`);
    } catch (error) {
        console.error('初始化用户数据失败:', error);
        // 创建默认用户数据
        users = [
            {
                id: 1,
                username: "admin",
                password: "admin123",
                email: "admin@mingdynasty.com",
                registerTime: new Date().toISOString(),
                solvedProblems: [1, 2],
                submissions: [],
                role: "admin"
            }
        ];
        await saveUsers();
    }
}

// 保存用户数据
async function saveUsers() {
    try {
        const userData = `// 大明编程挑战 - 用户数据存储
// 自动生成，请勿手动修改

const users = ${JSON.stringify(users, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { users };
}`;
        await fs.writeFile('server.js', userData, 'utf8');
        console.log('用户数据保存成功');
        return true;
    } catch (error) {
        console.error('保存用户数据失败:', error);
        return false;
    }
}

// API路由

// 根路径
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 健康检查接口
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        service: '大明编程挑战 OJ',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        users: users.length,
        problems: problems.length
    });
});

// 获取问题列表
app.get('/api/problems', (req, res) => {
    console.log(`[${new Date().toISOString()}] 获取问题列表`);
    res.json(problems.map(p => ({
        id: p.id,
        title: p.title,
        difficulty: p.difficulty,
        acceptance: p.acceptance,
        updateTime: p.updateTime
    })));
});

// 获取特定问题
app.get('/api/problems/:id', (req, res) => {
    const problemId = parseInt(req.params.id);
    const problem = problems.find(p => p.id === problemId);
    
    if (!problem) {
        return res.status(404).json({ error: '问题不存在' });
    }
    
    res.json(problem);
});

// 用户注册
app.post('/api/register', async (req, res) => {
    console.log(`[${new Date().toISOString()}] 注册请求:`, req.body.username);
    const { username, password, email } = req.body;
    
    if (!username || !password || !email) {
        return res.json({ success: false, message: '请填写所有必填字段' });
    }
    
    // 简单的输入验证
    if (username.length < 3 || username.length > 20) {
        return res.json({ success: false, message: '用户名长度应为3-20个字符' });
    }
    
    if (password.length < 6) {
        return res.json({ success: false, message: '密码长度至少6个字符' });
    }
    
    try {
        // 检查用户名是否已存在
        if (users.find(u => u.username === username)) {
            return res.json({ success: false, message: '用户名已存在' });
        }
        
        // 检查邮箱是否已存在
        if (users.find(u => u.email === email)) {
            return res.json({ success: false, message: '邮箱已被注册' });
        }
        
        // 创建新用户
        const newUser = {
            id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
            username,
            password,
            email,
            registerTime: new Date().toISOString(),
            solvedProblems: [],
            submissions: [],
            role: "user"
        };
        
        users.push(newUser);
        
        // 保存到文件
        const saveResult = await saveUsers();
        if (saveResult) {
            console.log(`新用户注册成功: ${username}`);
            res.json({ success: true, message: '注册成功' });
        } else {
            res.json({ success: false, message: '注册失败，请稍后重试' });
        }
    } catch (error) {
        console.error('注册错误:', error);
        res.json({ success: false, message: '服务器错误' });
    }
});

// 用户登录
app.post('/api/login', async (req, res) => {
    console.log(`[${new Date().toISOString()}] 登录请求:`, req.body.username);
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.json({ success: false, message: '请填写用户名和密码' });
    }
    
    try {
        const user = users.find(u => u.username === username && u.password === password);
        
        if (user) {
            // 不返回密码
            const { password, ...userWithoutPassword } = user;
            
            // 设置Cookie
            res.cookie('MingDynasty', JSON.stringify(userWithoutPassword), {
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7天
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax'
            });
            
            res.json({ 
                success: true, 
                user: userWithoutPassword,
                message: '登录成功'
            });
        } else {
            res.json({ success: false, message: '用户名或密码错误' });
        }
    } catch (error) {
        console.error('登录错误:', error);
        res.json({ success: false, message: '服务器错误' });
    }
});

// 用户退出
app.post('/api/logout', (req, res) => {
    res.clearCookie('MingDynasty');
    res.json({ success: true, message: '退出成功' });
});

// 提交代码
app.post('/api/submit', async (req, res) => {
    const { problemId, code, language } = req.body;
    const userCookie = req.cookies.MingDynasty;
    
    if (!userCookie) {
        return res.json({ success: false, message: '请先登录' });
    }
    
    try {
        const user = JSON.parse(userCookie);
        const problem = problems.find(p => p.id === parseInt(problemId));
        
        if (!problem) {
            return res.json({ success: false, message: '问题不存在' });
        }
        
        console.log(`用户 ${user.username} 提交问题 ${problemId}`);
        
        // 模拟代码评测
        const results = [];
        let allPassed = true;
        
        for (let i = 0; i < problem.testCases.length; i++) {
            const testCase = problem.testCases[i];
            
            // 根据代码质量生成评测结果
            let status = 'AC';
            const codeQuality = code.length > 100 ? 0.8 : 0.6; // 简单判断代码质量
            
            if (Math.random() > codeQuality) {
                const errorTypes = ['WA', 'TLE', 'MLE', 'CE'];
                status = errorTypes[Math.floor(Math.random() * errorTypes.length)];
            }
            
            if (status !== 'AC') {
                allPassed = false;
            }
            
            results.push({
                testCase: i + 1,
                status: status,
                time: `${(Math.random() * 100 + 10).toFixed(0)}ms`,
                memory: `${(Math.random() * 512 + 128).toFixed(0)}KB`
            });
        }
        
        // 更新用户数据
        const userIndex = users.findIndex(u => u.id === user.id);
        
        if (userIndex !== -1) {
            const submission = {
                problemId: parseInt(problemId),
                problemTitle: problem.title,
                code,
                language,
                submitTime: new Date().toISOString(),
                results,
                passed: allPassed
            };
            
            users[userIndex].submissions.unshift(submission);
            
            if (allPassed && !users[userIndex].solvedProblems.includes(parseInt(problemId))) {
                users[userIndex].solvedProblems.push(parseInt(problemId));
            }
            
            await saveUsers();
        }
        
        res.json({
            success: true,
            results,
            passed: allPassed,
            message: allPassed ? '恭喜！所有测试用例通过！' : '部分测试用例未通过'
        });
        
    } catch (error) {
        console.error('提交错误:', error);
        res.json({ success: false, message: '提交过程中发生错误' });
    }
});

// 获取用户信息
app.get('/api/user/:username', async (req, res) => {
    const username = req.params.username;
    
    try {
        const user = users.find(u => u.username === username);
        
        if (user) {
            const { password, ...userWithoutPassword } = user;
            res.json({ success: true, user: userWithoutPassword });
        } else {
            res.json({ success: false, message: '用户不存在' });
        }
    } catch (error) {
        console.error('获取用户信息错误:', error);
        res.json({ success: false, message: '服务器错误' });
    }
});

// 获取排行榜
app.get('/api/leaderboard', (req, res) => {
    const leaderboard = users
        .filter(user => user.role !== 'admin') // 排除管理员
        .map(user => ({
            username: user.username,
            solved: user.solvedProblems.length,
            submissions: user.submissions.length
        }))
        .sort((a, b) => b.solved - a.solved || b.submissions - a.submissions)
        .slice(0, 50); // 前50名
    
    res.json(leaderboard);
});

// 错误处理中间件
app.use((err, req, res, next) => {
    console.error('服务器错误:', err);
    res.status(500).json({ success: false, message: '服务器内部错误' });
});

// 404处理
app.use((req, res) => {
    res.status(404).json({ success: false, message: '接口不存在' });
});

// 启动服务器
async function startServer() {
    await initUsers();
    
    app.listen(PORT, HOST, () => {
        console.log('='.repeat(50));
        console.log('🚀 大明编程挑战 OJ 系统启动成功!');
        console.log(`📍 本地访问: http://localhost:${PORT}`);
        console.log(`🌐 网络访问: http://${getIPAddress()}:${PORT}`);
        console.log(`📊 问题数量: ${problems.length}`);
        console.log(`👥 用户数量: ${users.length}`);
        console.log('='.repeat(50));
        console.log('默认管理员账号:');
        console.log('用户名: admin');
        console.log('密码: admin123');
        console.log('='.repeat(50));
    });
}

// 获取本机IP地址
function getIPAddress() {
    const interfaces = require('os').networkInterfaces();
    for (const devName in interfaces) {
        const iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            const alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
    return '0.0.0.0';
}

// 优雅关闭
process.on('SIGINT', async () => {
    console.log('\n正在关闭服务器...');
    await saveUsers();
    console.log('用户数据已保存');
    process.exit(0);
});

process.on('SIGTERM', async () => {
    console.log('\n收到关闭信号...');
    await saveUsers();
    console.log('用户数据已保存');
    process.exit(0);
});

startServer().catch(console.error);
