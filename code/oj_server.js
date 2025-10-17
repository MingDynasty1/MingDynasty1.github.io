const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

// 中间件
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 存储问题数据
let problems = [
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
    }
];

// 从文件加载用户数据
async function loadUsers() {
    try {
        const data = await fs.readFile('server.js', 'utf8');
        // 从server.js中提取用户数据
        const match = data.match(/const users = (\[.*?\]);/s);
        if (match) {
            return JSON.parse(match[1]);
        }
    } catch (error) {
        console.error('加载用户数据失败:', error);
    }
    return [];
}

// 保存用户数据到文件
async function saveUsers(users) {
    try {
        let serverContent = await fs.readFile('server.js', 'utf8');
        const newUsersArray = `const users = ${JSON.stringify(users, null, 2)};`;
        serverContent = serverContent.replace(/const users = \[.*?\];/s, newUsersArray);
        await fs.writeFile('server.js', serverContent, 'utf8');
        return true;
    } catch (error) {
        console.error('保存用户数据失败:', error);
        return false;
    }
}

// API路由

// 获取问题列表
app.get('/api/problems', (req, res) => {
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
    const { username, password, email } = req.body;
    
    if (!username || !password || !email) {
        return res.json({ success: false, message: '请填写所有必填字段' });
    }
    
    try {
        const users = await loadUsers();
        
        // 检查用户名是否已存在
        if (users.find(u => u.username === username)) {
            return res.json({ success: false, message: '用户名已存在' });
        }
        
        // 创建新用户
        const newUser = {
            id: users.length + 1,
            username,
            password, // 注意：实际应用中应该加密密码
            email,
            registerTime: new Date().toISOString(),
            solvedProblems: [],
            submissions: []
        };
        
        users.push(newUser);
        
        // 保存到文件
        const saveResult = await saveUsers(users);
        if (saveResult) {
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
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.json({ success: false, message: '请填写用户名和密码' });
    }
    
    try {
        const users = await loadUsers();
        const user = users.find(u => u.username === username && u.password === password);
        
        if (user) {
            // 不返回密码
            const { password, ...userWithoutPassword } = user;
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
        
        // 模拟代码评测
        const results = [];
        let allPassed = true;
        
        for (let i = 0; i < problem.testCases.length; i++) {
            const testCase = problem.testCases[i];
            
            // 随机生成评测结果（实际应用中应该真正执行代码）
            const statusTypes = ['AC', 'WA', 'TLE', 'MLE', 'CE'];
            const weights = [0.7, 0.15, 0.05, 0.05, 0.05];
            const randomValue = Math.random();
            
            let cumulativeWeight = 0;
            let status = 'AC';
            
            for (let j = 0; j < statusTypes.length; j++) {
                cumulativeWeight += weights[j];
                if (randomValue <= cumulativeWeight) {
                    status = statusTypes[j];
                    break;
                }
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
        const users = await loadUsers();
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
            
            if (allPassed && !users[userIndex].solvedProblems.includes(problemId)) {
                users[userIndex].solvedProblems.push(problemId);
            }
            
            await saveUsers(users);
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
        const users = await loadUsers();
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

// 启动服务器
app.listen(PORT, () => {
    console.log(`大明编程挑战 OJ 服务器运行在 http://localhost:${PORT}`);
});
