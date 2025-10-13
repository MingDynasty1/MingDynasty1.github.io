// server_mingdynasty1.js
// MingDynasty 个人主页功能脚本

// 时间报时器功能
function updateTime() {
    const now = new Date();
    
    // 格式化时间
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // 格式化日期
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    
    // 星期几
    const weekdays = ["日", "一", "二", "三", "四", "五", "六"];
    const weekday = weekdays[now.getDay()];
    
    // 英文日期
    const weekdaysEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekdayEn = weekdaysEn[now.getDay()];
    const monthEn = monthsEn[now.getMonth()];
    
    // 更新显示
    document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('current-date').textContent = `${year}年${month}月${day}日 星期${weekday}`;
    document.getElementById('current-date-en').textContent = `${weekdayEn}, ${monthEn} ${day}, ${year}`;
}

// 计算器功能
let calcDisplayValue = '0';

function updateCalcDisplay() {
    const display = document.getElementById('calc-display');
    display.textContent = calcDisplayValue;
}

function appendToCalcDisplay(value) {
    if (calcDisplayValue === '0' && value !== '.') {
        calcDisplayValue = value;
    } else {
        calcDisplayValue += value;
    }
    updateCalcDisplay();
}

function clearCalcDisplay() {
    calcDisplayValue = '0';
    updateCalcDisplay();
}

function deleteLastCalc() {
    if (calcDisplayValue.length > 1) {
        calcDisplayValue = calcDisplayValue.slice(0, -1);
    } else {
        calcDisplayValue = '0';
    }
    updateCalcDisplay();
}

function calculateResult() {
    try {
        // 替换显示中的运算符为JavaScript可识别的运算符
        const expression = calcDisplayValue.replace(/×/g, '*').replace(/÷/g, '/');
        calcDisplayValue = eval(expression).toString();
    } catch (error) {
        calcDisplayValue = '错误';
    }
    updateCalcDisplay();
}

// 主题切换功能
function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // 检查本地存储的主题偏好
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    }
    
    // 切换主题
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // 根据系统偏好设置初始主题
    if (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    }
}

// 语言切换功能
function initializeLanguage() {
    const languageToggle = document.getElementById('language-toggle');
    
    // 检查本地存储的语言偏好
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'en') {
        switchLanguage('en');
    }
    
    // 切换语言
    languageToggle.addEventListener('click', function() {
        const currentLang = localStorage.getItem('language') || 'zh';
        const newLang = currentLang === 'zh' ? 'en' : 'zh';
        switchLanguage(newLang);
    });
}

// 语言切换函数
function switchLanguage(lang) {
    // 更新所有带有data-lang属性的元素
    document.querySelectorAll('[data-lang]').forEach(element => {
        if (element.getAttribute('data-lang') === lang) {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }
    });
    
    // 更新语言按钮文本
    const languageToggle = document.getElementById('language-toggle');
    if (lang === 'zh') {
        languageToggle.querySelector('[data-lang="zh"]').style.display = '';
        languageToggle.querySelector('[data-lang="en"]').style.display = 'none';
    } else {
        languageToggle.querySelector('[data-lang="zh"]').style.display = 'none';
        languageToggle.querySelector('[data-lang="en"]').style.display = '';
    }
    
    // 保存语言偏好
    localStorage.setItem('language', lang);
    
    // 更新页面语言属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

// 计算运行天数
function calculateDaysRunning() {
    const startDate = new Date('2025-06-18');
    const currentDate = new Date();
    
    // 计算天数差
    const timeDiff = currentDate.getTime() - startDate.getTime();
    const daysRunning = Math.floor(timeDiff / (1000 * 3600 * 24));
    
    // 更新显示
    document.getElementById('days-running').textContent = daysRunning;
    document.getElementById('days-running-en').textContent = daysRunning;
}

// 贪吃蛇游戏功能
class SnakeGame {
    constructor() {
        this.canvas = document.getElementById('snake-game-board');
        this.ctx = this.canvas.getContext('2d');
        this.scoreElement = document.getElementById('snake-score');
        this.scoreElementEn = document.getElementById('snake-score-en');
        this.highScoreElement = document.getElementById('snake-high-score');
        this.highScoreElementEn = document.getElementById('snake-high-score-en');
        
        // 游戏变量
        this.gridSize = 20;
        this.tileCount = this.canvas.width / this.gridSize;
        
        this.snake = [{x: 10, y: 10}];
        this.food = {};
        this.dx = 0;
        this.dy = 0;
        this.score = 0;
        this.highScore = localStorage.getItem('snakeHighScore') || 0;
        this.gameRunning = false;
        this.gameLoop = null;
        
        this.initializeGame();
        this.setupEventListeners();
    }
    
    initializeGame() {
        this.snake = [{x: 10, y: 10}];
        this.generateFood();
        this.dx = 0;
        this.dy = 0;
        this.score = 0;
        this.updateScore();
        this.highScoreElement.textContent = this.highScore;
        this.highScoreElementEn.textContent = this.highScore;
        this.drawGame();
    }
    
    generateFood() {
        this.food = {
            x: Math.floor(Math.random() * this.tileCount),
            y: Math.floor(Math.random() * this.tileCount)
        };
        
        // 确保食物不会生成在蛇身上
        for (let segment of this.snake) {
            if (segment.x === this.food.x && segment.y === this.food.y) {
                this.generateFood();
                return;
            }
        }
    }
    
    drawGame() {
        // 清空画布
        this.ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--card-bg');
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // 绘制蛇
        this.ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent-color');
        for (let segment of this.snake) {
            this.ctx.fillRect(segment.x * this.gridSize, segment.y * this.gridSize, this.gridSize - 2, this.gridSize - 2);
        }
        
        // 绘制蛇头（不同颜色）
        this.ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--nav-bg');
        this.ctx.fillRect(this.snake[0].x * this.gridSize, this.snake[0].y * this.gridSize, this.gridSize - 2, this.gridSize - 2);
        
        // 绘制食物
        this.ctx.fillStyle = '#ff0000';
        this.ctx.fillRect(this.food.x * this.gridSize, this.food.y * this.gridSize, this.gridSize - 2, this.gridSize - 2);
    }
    
    updateGame() {
        // 移动蛇
        const head = {x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy};
        this.snake.unshift(head);
        
        // 检查是否吃到食物
        if (head.x === this.food.x && head.y === this.food.y) {
            this.score += 10;
            this.updateScore();
            this.generateFood();
        } else {
            this.snake.pop();
        }
        
        // 检查游戏结束条件
        if (
            head.x < 0 || 
            head.x >= this.tileCount || 
            head.y < 0 || 
            head.y >= this.tileCount ||
            this.checkCollision(head)
        ) {
            this.gameOver();
            return;
        }
        
        this.drawGame();
    }
    
    checkCollision(head) {
        for (let i = 1; i < this.snake.length; i++) {
            if (head.x === this.snake[i].x && head.y === this.snake[i].y) {
                return true;
            }
        }
        return false;
    }
    
    updateScore() {
        this.scoreElement.textContent = this.score;
        this.scoreElementEn.textContent = this.score;
        if (this.score > this.highScore) {
            this.highScore = this.score;
            this.highScoreElement.textContent = this.highScore;
            this.highScoreElementEn.textContent = this.highScore;
            localStorage.setItem('snakeHighScore', this.highScore);
        }
    }
    
    gameOver() {
        this.gameRunning = false;
        clearInterval(this.gameLoop);
        const currentLang = localStorage.getItem('language') || 'zh';
        if (currentLang === 'zh') {
            alert(`游戏结束！你的得分是: ${this.score}`);
        } else {
            alert(`Game Over! Your score is: ${this.score}`);
        }
    }
    
    startGame() {
        if (!this.gameRunning) {
            this.gameRunning = true;
            this.gameLoop = setInterval(() => this.updateGame(), 150);
            const currentLang = localStorage.getItem('language') || 'zh';
            const startBtn = document.getElementById('snake-start-btn');
            const startBtnEn = document.getElementById('snake-start-btn-en');
            if (currentLang === 'zh') {
                startBtn.textContent = "游戏中...";
            } else {
                startBtnEn.textContent = "Playing...";
            }
        }
    }
    
    pauseGame() {
        if (this.gameRunning) {
            this.gameRunning = false;
            clearInterval(this.gameLoop);
            const currentLang = localStorage.getItem('language') || 'zh';
            const startBtn = document.getElementById('snake-start-btn');
            const startBtnEn = document.getElementById('snake-start-btn-en');
            if (currentLang === 'zh') {
                startBtn.textContent = "继续游戏";
            } else {
                startBtnEn.textContent = "Continue Game";
            }
        } else {
            this.startGame();
        }
    }
    
    resetGame() {
        this.gameRunning = false;
        clearInterval(this.gameLoop);
        this.initializeGame();
        const currentLang = localStorage.getItem('language') || 'zh';
        const startBtn = document.getElementById('snake-start-btn');
        const startBtnEn = document.getElementById('snake-start-btn-en');
        if (currentLang === 'zh') {
            startBtn.textContent = "开始游戏";
        } else {
            startBtnEn.textContent = "Start Game";
        }
    }
    
    setupEventListeners() {
        const startBtn = document.getElementById('snake-start-btn');
        const startBtnEn = document.getElementById('snake-start-btn-en');
        const pauseBtn = document.getElementById('snake-pause-btn');
        const pauseBtnEn = document.getElementById('snake-pause-btn-en');
        const resetBtn = document.getElementById('snake-reset-btn');
        const resetBtnEn = document.getElementById('snake-reset-btn-en');
        
        startBtn.addEventListener('click', () => this.startGame());
        startBtnEn.addEventListener('click', () => this.startGame());
        pauseBtn.addEventListener('click', () => this.pauseGame());
        pauseBtnEn.addEventListener('click', () => this.pauseGame());
        resetBtn.addEventListener('click', () => this.resetGame());
        resetBtnEn.addEventListener('click', () => this.resetGame());
        
        // 键盘控制
        document.addEventListener('keydown', (e) => {
            // 防止按键滚动页面
            if ([37, 38, 39, 40, 65, 87, 68, 83].includes(e.keyCode)) {
                e.preventDefault();
            }
            
            // 方向键控制
            if (e.keyCode === 37 || e.keyCode === 65) { // 左箭头或A
                if (this.dx !== 1) {
                    this.dx = -1;
                    this.dy = 0;
                }
            } else if (e.keyCode === 38 || e.keyCode === 87) { // 上箭头或W
                if (this.dy !== 1) {
                    this.dx = 0;
                    this.dy = -1;
                }
            } else if (e.keyCode === 39 || e.keyCode === 68) { // 右箭头或D
                if (this.dx !== -1) {
                    this.dx = 1;
                    this.dy = 0;
                }
            } else if (e.keyCode === 40 || e.keyCode === 83) { // 下箭头或S
                if (this.dy !== -1) {
                    this.dx = 0;
                    this.dy = 1;
                }
            }
        });
    }
}

// 初始化所有功能
function initializeAll() {
    // 时间功能
    updateTime();
    setInterval(updateTime, 1000);
    
    // 计算器功能
    updateCalcDisplay();
    
    // 主题功能
    initializeTheme();
    
    // 语言功能
    initializeLanguage();
    
    // 运行天数
    calculateDaysRunning();
    
    // 贪吃蛇游戏
    const snakeGame = new SnakeGame();
    
    // 返回游戏实例以便其他脚本使用
    return {
        snakeGame: snakeGame
    };
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 延迟检查，确保页面完全加载
    setTimeout(() => {
        // 初始化其他功能
        initializeAll();
    }, 100);
});
