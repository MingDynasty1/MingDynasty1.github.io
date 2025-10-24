// app.js - 主要应用逻辑

document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有组件
    initializeNavigation();
    initializeMainContent();
    initializeSidebar();
    initializeFooter();
    initializeTimeDisplay();
    initializeThemeToggle();
    initializeLanguageToggle();
    
    // 检查人机验证
    checkHumanVerification();
});

// 初始化导航
function initializeNavigation() {
    const navHTML = `
        <div class="container">
            ${generateNavLinks()}
            <div class="theme-switch">
                <label class="theme-switch-label">
                    <i class="fas fa-moon"></i>
                    <span class="switch">
                        <input type="checkbox" id="theme-toggle">
                        <span class="slider"></span>
                    </span>
                    <i class="fas fa-sun"></i>
                </label>
            </div>
            <div class="language-switch">
                <button class="language-btn" id="language-toggle">
                    <span data-lang="zh">EN</span>
                    <span data-lang="en" style="display: none;">中文</span>
                </button>
            </div>
        </div>
    `;
    document.getElementById('navigation').innerHTML = navHTML;
}

// 生成导航链接
function generateNavLinks() {
    const links = [
        { url: 'https://mingdynasty1.github.io/OImap.html', zh: '主页导航', en: 'Home Navigation' },
        { url: 'https://MingDynasty1.github.io/MgDy.html', zh: '个人信息', en: 'Personal Info' },
        { url: 'https://mingdynasty1.github.io/friends/friends.html', zh: '友链', en: 'Friends' },
        { url: 'https://mingdynasty1.github.io/news/', zh: '大明新闻', en: 'Ming News' },
        { url: 'https://MingDynasty1.github.io/OnlineJudge/index.html', zh: '免费网盘', en: 'Free Cloud Storage' },
        { url: 'https://mingdynasty1.github.io/cbpan_help/MingDynasty_cbpan_help.html', zh: '网盘帮助中心', en: 'Cloud Storage Help' },
        { url: 'https://www.luogu.com.cn/contest/247666', zh: '比赛宣传', en: 'Contest Promotion' },
        { url: 'https://mingdynasty1.github.io/join-us/', zh: '大明招聘', en: 'Ming join' },
        { url: 'https://mingdynasty1.github.io/game.html', zh: '益智小游戏', en: 'Puzzle Games' },
        { url: 'https://mingdynasty1.github.io/code/index.html', zh: '大明 OJ', en: 'Ming OnlineJudge' },
        { url: 'https://mingdynasty1.github.io/film/index.html', zh: '大明电影', en: 'Ming film' },
        { url: 'https://mingdynasty1.github.io/2048.html', zh: '2048游戏', en: '2048 Game' },
        { url: 'https://mingdynasty1.github.io/gxrz.html', zh: '更新日志', en: 'Update Log' },
        { url: 'https://MingDynasty1.github.io/calc.html', zh: '计算器', en: 'Calculator' },
        { url: 'https://MingDynasty1.github.io/dmgame.html', zh: '大明皇帝模拟器', en: 'Ming Emperor Simulator' },
        { url: 'https://mingdynasty1.github.io/dmhpy.html', zh: '大明国庆', en: 'Ming National Day' },
        { url: 'https://MingDynasty1.github.io/MgDyhistory.html', zh: '大明历史', en: 'Ming History' },
        { url: 'https://MingDynasty1.github.io/People-Remake-Life.html', zh: '人生模拟器', en: 'Life Simulator' },
        { url: 'https://mingdynasty1.github.io/MapMgDy.html', zh: '大明导航', en: 'Ming Navigation' },
        { url: 'https://MingDynasty1.github.io/snakegame.html', zh: '贪吃蛇游戏', en: 'Snake Game' },
        { url: 'https://MingDynasty1.github.io/contact-us-MgDy.html', zh: '联系我们', en: 'Contact Us' },
        { url: 'https://MingDynasty1.github.io/blog/index.html', zh: '博客主页', en: 'Blog Homepage', special: true },
        { url: 'https://MingDynasty1.github.io/luntan/index.html', zh: '大明论坛', en: 'Ming Forum' },
        { url: 'https://mingdynasty1.github.io/Check-for-People-Robot.html', zh: '人机验证', en: 'Check If You\'re A Robot' },
        { url: 'https://MingDynasty1.github.io/FAQ.html', zh: '常见问题解答', en: 'FAQ' }
    ];

    return links.map(link => {
        const style = link.special ? 'style="background-color: rgba(255,255,255,0.2);"' : '';
        return `
            <a href="${link.url}" ${style} data-lang="zh">${link.zh}</a>
            <a href="${link.url}" ${style} style="display: none;" data-lang="en">${link.en}</a>
        `;
    }).join('');
}

// 初始化主要内容
function initializeMainContent() {
    const mainContentHTML = `
        <div class="card chinese-pattern">
            <h2 data-lang="zh">置顶公告</h2>
            <h2 data-lang="en" style="display: none;">Pinned Announcement</h2>
            <p data-lang="zh">宣 <a href="https://www.luogu.com.cn/contest/247666">https://www.luogu.com.cn/contest/247666</a></p>
            <p data-lang="en" style="display: none;">Announcement: <a href="https://www.luogu.com.cn/contest/247666">https://www.luogu.com.cn/contest/247666</a></p>
        </div>
        
        ${generateSnakeGame()}
        
        <div class="card">
            <h2 data-lang="zh">个人成就展示</h2>
            <h2 data-lang="en" style="display: none;">Personal Achievements</h2>
            <div class="image-container">
                <img src="https://atrating.baoshuo.dev/rating?username=MingDynasty1" alt="洛谷评级">
                <img src="https://cdn.luogu.com.cn/upload/image_hosting/x699deqh.png" alt="AT评级">
                <img src="https://api.jerryz.com.cn/about?id=1015347&dark_mode=true&disable_cache=true" alt="洛谷信息">
                <img src="https://api.jerryz.com.cn/shield?id=1015347&dark_mode=true&disable_cache=true" alt="洛谷盾牌">
                <img src="https://api.jerryz.com.cn/guzhi?id=1015347&scores=100,68,44,88,30&dark_mode=true&disable_cache=true" alt="估值信息">
                <img src="https://api.jerryz.com.cn/practice?id=1015347&dark_mode=true&disable_cache=true" alt="练习情况">
            </div>
        </div>
        
        ${generateCalculator()}
        
        ${generateGamesSection()}
        
        <div class="card">
            <h2 data-lang="zh">如何在估值榜上找到我?</h2>
            <h2 data-lang="en" style="display: none;">How to Find Me in the Valuation Rankings?</h2>
            <p data-lang="zh">1.点击<a href="https://www.luogu.com.cn/ranking?orderBy=social&order=desc&page=8">这个</a>,找到第386名.</p>
            <p data-lang="en" style="display: none;">1. Click <a href="https://www.luogu.com.cn/ranking?orderBy=social&order=desc&page=8">here</a>, find rank 386.</p>
            <p data-lang="zh">2.点击<a href="https://www.luogu.com.cn/ranking?orderBy=practice&order=desc&page=8">这个</a>,找到第359名。</p>
            <p data-lang="en" style="display: none;">2. Click <a href="https://www.luogu.com.cn/ranking?orderBy=practice&order=desc&page=8">here</a>, find rank 359.</p>
            <p data-lang="zh">3.点击<a href="https://www.luogu.com.cn/ranking?page=11">这个</a>,找到第537名。</p>
            <p data-lang="en" style="display: none;">3. Click <a href="https://www.luogu.com.cn/ranking?page=11">here</a>, find rank 537.</p>
        </div>
        
        <div class="card">
            <h2 data-lang="zh">冲900个AC</h2>
            <h2 data-lang="en" style="display: none;">Aiming for 900 AC</h2>
            <p data-lang="zh">真正个性签名（地方写不下，很久以前的）：</p>
            <p data-lang="en" style="display: none;">Real personal signature (not enough space, from long ago):</p>
            <pre><code class="lang-cpp">最后在线时间|<span class="hljs-string">https://www.luogu.com.cn/team/76415欢迎加入</span>|<span class="hljs-string">小升初蒟蒻,欢迎吊打</span>|<span class="hljs-string">开局一个碗,结局一根绳</span>|<span class="hljs-string">最高排名807</span>|<span class="hljs-string">坐标:陕西宝鸡</span>|<span class="hljs-string">互关忘私(实名,3天內),误杀私</span>|<span class="hljs-string">禁止炸铃,炸铃杀</span>|<span class="hljs-string">题解不懂可私信</span>|<span class="hljs-string">删display none看主页</span>|<span class="hljs-string">估值前500进度:302-&gt;322</span>|<span class="hljs-string">已完成目标！(前1000）</span>|<span class="hljs-string">Even if the finish line is far away, we must walk to the end.</span></code></pre>
            <p><a href="https://www.luogu.me/article/hu9a8skr" data-lang="zh">放不下的东西（主页链接）</a></p>
            <p><a href="https://www.luogu.me/article/hu9a8skr" data-lang="en" style="display: none;">Things that don't fit (homepage link)</a></p>
        </div>
        
        <div class="card">
            <h2 data-lang="zh">重要更新</h2>
            <h2 data-lang="en" style="display: none;">Important Updates</h2>
            <h3 data-lang="zh">upd on 2025.8.16 MgDy Round 2 已经开始了，欢迎报名！</h3>
            <h3 data-lang="en" style="display: none;">upd on 2025.8.16 MgDy Round 2 has started, welcome to register!</h3>
            <p data-lang="zh">查看<a href="https://mingdynasty1.github.io/gxrz.html">完整更新日志</a>了解网站发展历程。</p>
            <p data-lang="en" style="display: none;">Check the <a href="https://mingdynasty1.github.io/gxrz.html">complete update log</a> to learn about the website development history.</p>
        </div>
    `;
    
    document.getElementById('main-content-cards').innerHTML = mainContentHTML;
}

// 生成贪吃蛇游戏
function generateSnakeGame() {
    return `
        <div class="card">
            <h2 data-lang="zh">大明贪吃蛇</h2>
            <h2 data-lang="en" style="display: none;">Ming Snake Game</h2>
            <div class="snake-game-container">
                <h3 data-lang="zh">大明贪吃蛇</h3>
                <h3 data-lang="en" style="display: none;">Ming Snake Game</h3>
                <div class="snake-game-info">
                    <div class="snake-game-score" data-lang="zh">得分: <span id="snake-score">0</span></div>
                    <div class="snake-game-score" data-lang="en" style="display: none;">Score: <span id="snake-score-en">0</span></div>
                    <div class="snake-game-score" data-lang="zh">最高分: <span id="snake-high-score">0</span></div>
                    <div class="snake-game-score" data-lang="en" style="display: none;">High Score: <span id="snake-high-score-en">0</span></div>
                </div>
                <canvas id="snake-game-board" width="400" height="400" class="snake-game-board"></canvas>
                <div class="snake-game-controls">
                    <button class="snake-game-btn" id="snake-start-btn" data-lang="zh">开始游戏</button>
                    <button class="snake-game-btn" id="snake-start-btn-en" data-lang="en" style="display: none;">Start Game</button>
                    <button class="snake-game-btn" id="snake-pause-btn" data-lang="zh">暂停</button>
                    <button class="snake-game-btn" id="snake-pause-btn-en" data-lang="en" style="display: none;">Pause</button>
                    <button class="snake-game-btn" id="snake-reset-btn" data-lang="zh">重新开始</button>
                    <button class="snake-game-btn" id="snake-reset-btn-en" data-lang="en" style="display: none;">Restart</button>
                </div>
                <div class="snake-game-instructions">
                    <h4 data-lang="zh">游戏说明：</h4>
                    <h4 data-lang="en" style="display: none;">Game Instructions:</h4>
                    <ul>
                        <li data-lang="zh">使用键盘方向键或WASD控制蛇的移动方向</li>
                        <li data-lang="en" style="display: none;">Use arrow keys or WASD to control the snake's direction</li>
                        <li data-lang="zh">吃到红色食物可以增加长度和得分</li>
                        <li data-lang="en" style="display: none;">Eat red food to increase length and score</li>
                        <li data-lang="zh">撞到墙壁或自己的身体会导致游戏结束</li>
                        <li data-lang="en" style="display: none;">Hitting walls or your own body ends the game</li>
                        <li data-lang="zh">每吃到一个食物得10分</li>
                        <li data-lang="en" style="display: none;">Each food gives 10 points</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

// 生成计算器
function generateCalculator() {
    return `
        <div class="card">
            <h2 data-lang="zh">明朝风格计算器</h2>
            <h2 data-lang="en" style="display: none;">Ming Style Calculator</h2>
            <div class="calculator-container">
                <h3 class="calculator-title" data-lang="zh">大明算器</h3>
                <h3 class="calculator-title" data-lang="en" style="display: none;">Ming Calculator</h3>
                
                <div class="calculator-display" id="calc-display">0</div>
                
                <div class="calculator-buttons">
                    <button class="calc-btn calc-clear" onclick="clearCalcDisplay()">C</button>
                    <button class="calc-btn calc-operator" onclick="deleteLastCalc()">⌫</button>
                    <button class="calc-btn calc-operator" onclick="appendToCalcDisplay('/')">÷</button>
                    <button class="calc-btn calc-operator" onclick="appendToCalcDisplay('*')">×</button>
                    
                    <button class="calc-btn" onclick="appendToCalcDisplay('7')">7</button>
                    <button class="calc-btn" onclick="appendToCalcDisplay('8')">8</button>
                    <button class="calc-btn" onclick="appendToCalcDisplay('9')">9</button>
                    <button class="calc-btn calc-operator" onclick="appendToCalcDisplay('-')">-</button>
                    
                    <button class="calc-btn" onclick="appendToCalcDisplay('4')">4</button>
                    <button class="calc-btn" onclick="appendToCalcDisplay('5')">5</button>
                    <button class="calc-btn" onclick="appendToCalcDisplay('6')">6</button>
                    <button class="calc-btn calc-operator" onclick="appendToCalcDisplay('+')">+</button>
                    
                    <button class="calc-btn" onclick="appendToCalcDisplay('1')">1</button>
                    <button class="calc-btn" onclick="appendToCalcDisplay('2')">2</button>
                    <button class="calc-btn" onclick="appendToCalcDisplay('3')">3</button>
                    <button class="calc-btn calc-equals" onclick="calculateResult()">=</button>
                    
                    <button class="calc-btn" onclick="appendToCalcDisplay('0')">0</button>
                    <button class="calc-btn" onclick="appendToCalcDisplay('.')">.</button>
                </div>
                
                <div class="calculator-decoration">
                    <span>◆</span>
                    <span>◆</span>
                    <span>◆</span>
                </div>
            </div>
        </div>
    `;
}

// 生成游戏部分
function generateGamesSection() {
    const games = [
        { 
            name: '明朝华容道', 
            enName: 'Ming Klotski',
            desc: '体验传统益智游戏，挑战你的逻辑思维！',
            enDesc: 'Experience traditional puzzle games, challenge your logical thinking!',
            url: 'https://mingdynasty1.github.io/game.html'
        },
        { 
            name: '2048数字游戏', 
            enName: '2048 Number Game',
            desc: '挑战你的数字组合能力，创造更高的分数！',
            enDesc: 'Challenge your number combination skills, create higher scores!',
            url: 'https://mingdynasty1.github.io/2048.html'
        },
        { 
            name: '大明皇帝模拟器', 
            enName: 'Ming Emperor Simulator',
            desc: '体验明朝皇帝的生活，治理国家，创造盛世！',
            enDesc: 'Experience the life of a Ming emperor, govern the country, create prosperity!',
            url: 'https://MingDynasty1.github.io/dmgame.html'
        },
        { 
            name: '大明国庆', 
            enName: 'Ming National Day',
            desc: '庆祝大明国庆，体验明朝盛世的庆典活动！',
            enDesc: 'Celebrate Ming National Day, experience the celebration of Ming prosperity!',
            url: 'https://mingdynasty1.github.io/dmhpy.html'
        },
        { 
            name: '人生模拟器', 
            enName: 'Life Simulator',
            desc: '体验不同的人生轨迹，探索命运的可能性！',
            enDesc: 'Experience different life paths, explore the possibilities of fate!',
            url: 'https://MingDynasty1.github.io/People-Remake-Life.html'
        },
        { 
            name: '贪吃蛇游戏', 
            enName: 'Snake Game',
            desc: '经典贪吃蛇游戏，挑战你的反应速度！',
            enDesc: 'Classic snake game, challenge your reaction speed!',
            url: 'https://MingDynasty1.github.io/snakegame.html'
        },
        { 
            name: '常见问题解答', 
            enName: 'FAQ',
            desc: '查看常见问题解答，解决使用中的疑问！',
            enDesc: 'Check frequently asked questions, solve usage doubts!',
            url: 'https://MingDynasty1.github.io/FAQ.html'
        }
    ];

    const gamesHTML = games.map(game => `
        <div class="game-card">
            <h3 data-lang="zh">${game.name}</h3>
            <h3 data-lang="en" style="display: none;">${game.enName}</h3>
            <p data-lang="zh">${game.desc}</p>
            <p data-lang="en" style="display: none;">${game.enDesc}</p>
            <a href="${game.url}" class="game-btn" data-lang="zh">开始${game.name.includes('解答') ? '查看' : '游戏'}</a>
            <a href="${game.url}" class="game-btn" data-lang="en" style="display: none;">${game.enName.includes('FAQ') ? 'View FAQ' : 'Start Game'}</a>
        </div>
    `).join('');

    return `
        <div class="card">
            <h2 data-lang="zh">益智小游戏</h2>
            <h2 data-lang="en" style="display: none;">Puzzle Games</h2>
            ${gamesHTML}
        </div>
    `;
}

// 初始化侧边栏
function initializeSidebar() {
    const sidebarHTML = `
        <h3 data-lang="zh">快速导航</h3>
        <h3 data-lang="en" style="display: none;">Quick Navigation</h3>
        <ul>
            ${generateSidebarLinks()}
        </ul>
        
        <h3 data-lang="zh">个人简介</h3>
        <h3 data-lang="en" style="display: none;">Personal Profile</h3>
        <p data-lang="zh">7年级蒟蒻,欢迎吊打</p>
        <p data-lang="en" style="display: none;">7th grade rookie, welcome to challenge</p>
        <p data-lang="zh">坐标: 陕西西安</p>
        <p data-lang="en" style="display: none;">Location: Xi'an, Shaanxi</p>
        <p data-lang="zh">最高排名: 304</p>
        <p data-lang="en" style="display: none;">Highest Ranking: 304</p>
        
        <h3 data-lang="zh">座右铭</h3>
        <h3 data-lang="en" style="display: none;">Motto</h3>
        <p class="ming-decoration">Even if the finish line is far away, we must walk to the end.</p>
        
        ${generateSidebarGames()}
    `;
    
    document.getElementById('sidebar-content').innerHTML = sidebarHTML;
}

// 生成侧边栏链接
function generateSidebarLinks() {
    const links = [
        { url: 'https://mingdynasty1.github.io/OImap.html', zh: '主页地图', en: 'Home Map' },
        { url: 'https://MingDynasty1.github.io/MgDy.html', zh: '个人信息', en: 'Personal Info' },
        { url: 'https://MingDynasty1.github.io/MgDyhistory.html', zh: '大明历史', en: 'Ming History' },
        { url: 'https://MingDynasty1.github.io/luntan/index.html', zh: '大明论坛', en: 'Ming Forum' },
        { url: 'https://MingDynasty1.github.io/contact-us-MgDy.html', zh: '联系我们', en: 'Contact Us' },
        { url: 'https://MingDynasty1.github.io/film/index.html', zh: '大明电影', en: 'Ming film' },
        { url: 'https://www.luogu.com.cn/user/1015347', zh: '洛谷主页', en: 'Luogu Homepage' },
        { url: 'https://github.com/MingDynasty1', zh: 'GitHub主页', en: 'GitHub Homepage' },
        { url: 'https://MingDynasty1.github.io/MapMgDy.html', zh: '大明导航', en: 'Ming Navigation' },
        { url: 'https://MingDynasty1.github.io/OnlineJudge/index.html', zh: '免费网盘', en: 'Free Cloud Storage' },
        { url: 'https://mingdynasty1.github.io/friends/friends.md', zh: '友情链接', en: 'Friends Links' },
        { url: 'https://mingdynasty1.github.io/cbpan_help/MingDynasty_cbpan_help.html', zh: '网盘帮助', en: 'Cloud Storage Help' },
        { url: 'https://mingdynasty1.github.io/game.html', zh: '益智小游戏', en: 'Puzzle Games' },
        { url: 'https://mingdynasty1.github.io/2048.html', zh: '2048游戏', en: '2048 Game' },
        { url: 'https://mingdynasty1.github.io/gxrz.html', zh: '更新日志', en: 'Update Log' },
        { url: 'https://MingDynasty1.github.io/calc.html', zh: '计算器', en: 'Calculator' },
        { url: 'https://MingDynasty1.github.io/dmgame.html', zh: '大明皇帝模拟器', en: 'Ming Emperor Simulator' },
        { url: 'https://mingdynasty1.github.io/dmhpy.html', zh: '大明国庆', en: 'Ming National Day' },
        { url: 'https://mingdynasty1.github.io/news/', zh: '大明新闻', en: 'Ming News' },
        { url: 'https://mingdynasty1.github.io/code/index.html', zh: '大明 OJ', en: 'Ming OnlineJudge' },
        { url: 'https://mingdynasty1.github.io/Check-for-People-Robot.html', zh: '人机验证', en: 'Check If You\'re A Robot' },
        { url: 'https://MingDynasty1.github.io/snakegame.html', zh: '贪吃蛇游戏', en: 'Snake Game' },
        { url: 'https://MingDynasty1.github.io/FAQ.html', zh: '常见问题解答', en: 'FAQ' },
        { url: 'https://MingDynasty1.github.io/blog/index.html', zh: '博客主页', en: 'Blog Homepage', special: true }
    ];

    return links.map(link => {
        const style = link.special ? 'style="font-weight: bold; color: var(--accent-color);"' : '';
        return `
            <li>
                <a href="${link.url}" ${style} data-lang="zh">${link.zh}</a>
                <a href="${link.url}" ${style} data-lang="en" style="display: none;">${link.en}</a>
            </li>
        `;
    }).join('');
}

// 生成侧边栏游戏卡片
function generateSidebarGames() {
    const sidebarGames = [
        { 
            name: '大明寿司派对（华容道）', 
            enName: 'Ming Sushi Party (Klotski)',
            desc: '挑战传统智力游戏',
            enDesc: 'Challenge traditional puzzle game',
            url: 'https://mingdynasty1.github.io/game.html'
        },
        { 
            name: '2048数字游戏', 
            enName: '2048 Number Game',
            desc: '挑战数字组合能力',
            enDesc: 'Challenge number combination skills',
            url: 'https://mingdynasty1.github.io/2048.html'
        },
        { 
            name: '大明皇帝模拟器', 
            enName: 'Ming Emperor Simulator',
            desc: '体验明朝皇帝的生活',
            enDesc: 'Experience life as a Ming emperor',
            url: 'https://MingDynasty1.github.io/dmgame.html'
        },
        { 
            name: '大明国庆', 
            enName: 'Ming National Day',
            desc: '庆祝明朝盛世的庆典',
            enDesc: 'Celebrate Ming prosperity celebrations',
            url: 'https://mingdynasty1.github.io/dmhpy.html'
        },
        { 
            name: '更新日志', 
            enName: 'Update Log',
            desc: '了解网站发展历程',
            enDesc: 'Learn about website development history',
            url: 'https://mingdynasty1.github.io/gxrz.html'
        },
        { 
            name: '计算器', 
            enName: 'Calculator',
            desc: '明朝风格计算器',
            enDesc: 'Ming style calculator',
            url: 'https://MingDynasty1.github.io/calc.html'
        },
        { 
            name: '大明历史', 
            enName: 'Ming History',
            desc: '探索明朝历史与文化',
            enDesc: 'Explore Ming history and culture',
            url: 'https://MingDynasty1.github.io/MgDyhistory.html'
        },
        { 
            name: '人生模拟器', 
            enName: 'Life Simulator',
            desc: '体验不同的人生轨迹',
            enDesc: 'Experience different life paths',
            url: 'https://MingDynasty1.github.io/People-Remake-Life.html'
        },
        { 
            name: '贪吃蛇游戏', 
            enName: 'Snake Game',
            desc: '经典贪吃蛇游戏',
            enDesc: 'Classic snake game',
            url: 'https://MingDynasty1.github.io/snakegame.html'
        },
        { 
            name: '常见问题解答', 
            enName: 'FAQ',
            desc: '查看常见问题解答',
            enDesc: 'Check frequently asked questions',
            url: 'https://MingDynasty1.github.io/FAQ.html'
        },
        { 
            name: '联系我们', 
            enName: 'Contact Us',
            desc: '有任何问题或建议？联系我们！',
            enDesc: 'Any questions or suggestions? Contact us!',
            url: 'https://MingDynasty1.github.io/contact-us-MgDy.html'
        },
        { 
            name: '博客主页', 
            enName: 'Blog Homepage',
            desc: '查看皇帝的技术文章与思考',
            enDesc: 'View the emperor\'s technical articles and thoughts',
            url: 'https://MingDynasty1.github.io/blog/index.html'
        }
    ];

    return sidebarGames.map(game => `
        <div class="game-card">
            <h3 data-lang="zh">${game.name}</h3>
            <h3 data-lang="en" style="display: none;">${game.enName}</h3>
            <p data-lang="zh">${game.desc}</p>
            <p data-lang="en" style="display: none;">${game.enDesc}</p>
            <a href="${game.url}" class="game-btn" data-lang="zh">${getButtonText(game.name)}</a>
            <a href="${game.url}" class="game-btn" data-lang="en" style="display: none;">${getButtonTextEn(game.enName)}</a>
        </div>
    `).join('');
}

// 获取按钮文本
function getButtonText(name) {
    if (name.includes('日志') || name.includes('解答') || name.includes('历史') || name.includes('联系我们') || name.includes('博客')) {
        return name.includes('日志') ? '查看日志' : 
               name.includes('解答') ? '查看FAQ' :
               name.includes('历史') ? '探索历史' :
               name.includes('联系我们') ? '联系我们' :
               name.includes('博客') ? '访问博客' : '查看';
    }
    return name.includes('模拟器') || name.includes('体验') ? '开始体验' : '开始游戏';
}

function getButtonTextEn(name) {
    if (name.includes('Log') || name.includes('FAQ') || name.includes('History') || name.includes('Contact') || name.includes('Blog')) {
        return name.includes('Log') ? 'View Log' : 
               name.includes('FAQ') ? 'View FAQ' :
               name.includes('History') ? 'Explore History' :
               name.includes('Contact') ? 'Contact Us' :
               name.includes('Blog') ? 'Visit Blog' : 'View';
    }
    return name.includes('Simulator') || name.includes('Experience') ? 'Start Experience' : 'Start Game';
}

// 初始化页脚
function initializeFooter() {
    const footerHTML = `
        <div class="container">
            <p data-lang="zh">© 2013-2025 MingDynasty,Inc. MingDynasty 的个人主页 | 灵感源于明朝美学</p>
            <p data-lang="en" style="display: none;">© 2013-2025 MingDynasty,Inc. MingDynasty's Personal Homepage | Inspired by Ming Dynasty Aesthetics</p>
            <p data-lang="zh">开局一个碗，结局一根绳 | 传承与创新 | <a href="https://mingdynasty1.github.io/gxrz.html" style="color: #f8f3e6;">查看更新日志</a></p>
            <p data-lang="en" style="display: none;">Start with a bowl, end with a rope | Inheritance and Innovation | <a href="https://mingdynasty1.github.io/gxrz.html" style="color: #f8f3e6;">View Update Log</a></p>
            
            <p style="margin-top: 10px; font-size: 0.9rem;">
                <span data-lang="zh">今天是本站运行的第 <span id="days-running">0</span> 天</span>
                <span data-lang="en" style="display: none;">This site has been running for <span id="days-running-en">0</span> days</span>
            </p>
            
            <p style="margin-top: 10px; font-size: 0.9rem;">
                <a href="https://icp.gov.moe/?keyword=20250643" target="_blank" style="color: #f8f3e6; text-decoration: underline;" data-lang="zh">萌ICP备20250643号</a>
                <a href="https://icp.gov.moe/?keyword=20250643" target="_blank" style="color: #f8f3e6; text-decoration: underline; display: none;" data-lang="en">MoeICP No. 20250643</a>
            </p>
        </div>
    `;
    
    document.getElementById('footer-content').innerHTML = footerHTML;
    
    // 计算运行天数
    calculateRunningDays();
}

// 计算运行天数
function calculateRunningDays() {
    const startDate = new Date('2024-01-01');
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    document.getElementById('days-running').textContent = diffDays;
    document.getElementById('days-running-en').textContent = diffDays;
}

// 初始化时间显示
function initializeTimeDisplay() {
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('zh-CN');
        const dateString = now.toLocaleDateString('zh-CN', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            weekday: 'long'
        });
        const dateStringEn = now.toLocaleDateString('en-US', { 
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        document.getElementById('current-time').textContent = timeString;
        document.getElementById('current-date').textContent = dateString;
        document.getElementById('current-date-en').textContent = dateStringEn;
    }
    
    updateTime();
    setInterval(updateTime, 1000);
}

// 初始化主题切换
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('mingDynastyTheme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }
    
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('mingDynastyTheme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('mingDynastyTheme', 'light');
        }
    });
}

// 初始化语言切换
function initializeLanguageToggle() {
    const languageToggle = document.getElementById('language-toggle');
    const savedLanguage = localStorage.getItem('mingDynastyLanguage') || 'zh';
    
    // 设置初始语言
    setLanguage(savedLanguage);
    
    languageToggle.addEventListener('click', function() {
        const currentLang = document.querySelector('[data-lang="zh"]').style.display === 'none' ? 'en' : 'zh';
        const newLang = currentLang === 'zh' ? 'en' : 'zh';
        setLanguage(newLang);
        localStorage.setItem('mingDynastyLanguage', newLang);
    });
}

// 设置语言
function setLanguage(lang) {
    const zhElements = document.querySelectorAll('[data-lang="zh"]');
    const enElements = document.querySelectorAll('[data-lang="en"]');
    const toggleBtn = document.getElementById('language-toggle');
    
    if (lang === 'zh') {
        zhElements.forEach(el => el.style.display = '');
        enElements.forEach(el => el.style.display = 'none');
        toggleBtn.querySelector('[data-lang="zh"]').textContent = 'EN';
    } else {
        zhElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = '');
        toggleBtn.querySelector('[data-lang="en"]').textContent = '中文';
    }
}

// 计算器功能
function appendToCalcDisplay(value) {
    const display = document.getElementById('calc-display');
    if (display.textContent === '0' || display.textContent === 'Error') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function clearCalcDisplay() {
    document.getElementById('calc-display').textContent = '0';
}

function deleteLastCalc() {
    const display = document.getElementById('calc-display');
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
}

function calculateResult() {
    const display = document.getElementById('calc-display');
    try {
        // 替换显示符号为计算符号
        let expression = display.textContent.replace(/×/g, '*').replace(/÷/g, '/');
        const result = eval(expression);
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}

// 人机验证检查
function checkHumanVerification() {
    if (window.verificationManager) {
        if (!window.verificationManager.checkAndHandleVerification()) {
            return false;
        }
    }
    return true;
}
