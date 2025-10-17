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
app.use(express.static('.')); // 服务当前目录的静态文件

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
    }
];

// 用户数据存储
let users = [
    {
        id: 1,
        username: "admin",
        password: "admin123",
        email: "admin@mingdynasty.com",
        registerTime: "2024-01-01T00:00:00.000Z",
        solvedProblems: [1, 2, 3],
        submissions: [
            {
                problemId: 1,
                problemTitle: "数字连接问题",
                code: "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <string>\nusing namespace std;\n\nbool compare(string a, string b) {\n    return a + b > b + a;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<string> nums(n);\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    sort(nums.begin(), nums.end(), compare);\n    \n    string result = \"\";\n    for (string num : nums) {\n        result += num;\n    }\n    \n    cout << result << endl;\n    return 0;\n}",
                language: "cpp",
                submitTime: "2024-01-15T10:30:00.000Z",
                results: [
                    { testCase: 1, status: "AC", time: "15ms", memory: "256KB" },
                    { testCase: 2, status: "AC", time: "12ms", memory: "248KB" }
                ],
                passed: true
            }
        ]
    }
];

// 保存用户数据
async function saveUsers() {
    try {
        const userData = `// 大明编程挑战 - 用户数据存储
const users = ${JSON.stringify(users, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { users };
}`;
        await fs.writeFile('server.js', userData, 'utf8');
        return true;
    } catch (error) {
        console.error('保存用户数据失败:', error);
        return false;
    }
}

// 加载用户数据
async function loadUsers() {
    try {
        if (fs.existsSync('server.js')) {
            delete require.cache[require.resolve('./server.js')];
            const server = require('./server.js');
            return server.users || users;
        }
    } catch (error) {
        console.error('加载用户数据失败:', error);
    }
    return users;
}

// API路由

// 根路径
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 获取问题列表
app.get('/api/problems', (req, res) => {
    console.log('收到获取问题列表请求');
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
    console.log('收到注册请求:', req.body);
    const { username, password, email } = req.body;
    
    if (!username || !password || !email) {
        return res.json({ success: false, message: '请填写所有必填字段' });
    }
    
    try {
        const currentUsers = await loadUsers();
        
        // 检查用户名是否已存在
        if (currentUsers.find(u => u.username === username)) {
            return res.json({ success: false, message: '用户名已存在' });
        }
        
        // 创建新用户
        const newUser = {
            id: currentUsers.length + 1,
            username,
            password,
            email,
            registerTime: new Date().toISOString(),
            solvedProblems: [],
            submissions: []
        };
        
        currentUsers.push(newUser);
        users = currentUsers;
        
        // 保存到文件
        const saveResult = await saveUsers();
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
    console.log('收到登录请求:', req.body);
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.json({ success: false, message: '请填写用户名和密码' });
    }
    
    try {
        const currentUsers = await loadUsers();
        const user = currentUsers.find(u => u.username === username && u.password === password);
        
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
    console.log('收到代码提交请求:', req.body);
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
            
            // 随机生成评测结果
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
        const currentUsers = await loadUsers();
        const userIndex = currentUsers.findIndex(u => u.id === user.id);
        
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
            
            currentUsers[userIndex].submissions.unshift(submission);
            
            if (allPassed && !currentUsers[userIndex].solvedProblems.includes(parseInt(problemId))) {
                currentUsers[userIndex].solvedProblems.push(parseInt(problemId));
            }
            
            users = currentUsers;
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
        const currentUsers = await loadUsers();
        const user = currentUsers.find(u => u.username === username);
        
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

// 错误处理中间件
app.use((err, req, res, next) => {
    console.error('服务器错误:', err);
    res.status(500).json({ success: false, message: '服务器内部错误' });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`大明编程挑战 OJ 服务器运行在 http://localhost:${PORT}`);
    console.log('请确保已安装依赖: npm install express body-parser cookie-parser');
});
