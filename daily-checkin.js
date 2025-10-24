// daily-checkin.js - 每日打卡功能

document.addEventListener('DOMContentLoaded', function() {
    initializeDailyCheckin();
});

function initializeDailyCheckin() {
    const checkinHTML = `
        <div class="daily-checkin-card">
            <h3><i class="fas fa-calendar-check"></i> <span data-lang="zh">每日打卡</span><span data-lang="en" style="display: none;">Daily Check-in</span></h3>
            
            <div class="checkin-stats">
                <div class="checkin-stat">
                    <h4 data-lang="zh">连续打卡</h4>
                    <h4 data-lang="en" style="display: none;">Consecutive Days</h4>
                    <p id="consecutive-days">0</p>
                </div>
                <div class="checkin-stat">
                    <h4 data-lang="zh">总打卡天数</h4>
                    <h4 data-lang="en" style="display: none;">Total Days</h4>
                    <p id="total-days">0</p>
                </div>
                <div class="checkin-stat">
                    <h4 data-lang="zh">今日运势</h4>
                    <h4 data-lang="en" style="display: none;">Today's Fortune</h4>
                    <p id="today-fortune">-</p>
                </div>
            </div>
            
            <div class="fortune-result">
                <div class="fortune-level" id="fortune-level">-</div>
                <div class="fortune-message" id="fortune-message" data-lang="zh">点击下方按钮抽取今日运势</div>
                <div class="fortune-message" id="fortune-message-en" style="display: none;">Click the button below to draw today's fortune</div>
            </div>
            
            <button class="checkin-btn" id="checkin-btn" data-lang="zh">抽签打卡</button>
            <button class="checkin-btn" id="checkin-btn-en" style="display: none;" data-lang="en">Draw Fortune & Check-in</button>
            
            <div class="checkin-history">
                <h4 data-lang="zh">打卡历史</h4>
                <h4 data-lang="en" style="display: none;">Check-in History</h4>
                <ul id="checkin-history-list">
                    <li data-lang="zh"><span class="checkin-date">暂无记录</span><span class="checkin-fortune">-</span></li>
                    <li data-lang="en" style="display: none;"><span class="checkin-date">No records</span><span class="checkin-fortune">-</span></li>
                </ul>
            </div>
        </div>
    `;
    
    document.getElementById('daily-checkin').innerHTML = checkinHTML;
    
    // 初始化大明历史卡片
    initializeMingHistory();
    
    // 初始化打卡功能
    initializeCheckinFunctionality();
}

function initializeMingHistory() {
    const historyHTML = `
        <div class="history-card">
            <h3><i class="fas fa-landmark"></i> <span data-lang="zh">探索大明历史</span><span data-lang="en" style="display: none;">Explore Ming Dynasty History</span></h3>
            <p data-lang="zh">大明王朝（1368年－1644年）是中国历史上一个辉煌的朝代，由明太祖朱元璋建立。明朝在政治、经济、文化、科技等方面都取得了巨大成就，留下了丰富的历史遗产。</p>
            <p data-lang="en" style="display: none;">The Ming Dynasty (1368-1644) was a glorious period in Chinese history, founded by Emperor Hongwu (Zhu Yuanzhang). The Ming Dynasty achieved great accomplishments in politics, economy, culture, and technology, leaving behind a rich historical legacy.</p>
            
            <div class="history-features">
                <div class="history-feature">
                    <i class="fas fa-crown"></i>
                    <h4 data-lang="zh">明朝皇帝</h4>
                    <h4 data-lang="en" style="display: none;">Ming Emperors</h4>
                    <p data-lang="zh">从朱元璋到崇祯帝，了解16位明朝皇帝的统治历程</p>
                    <p data-lang="en" style="display: none;">Learn about the reigns of 16 Ming emperors from Hongwu to Chongzhen</p>
                </div>
                <div class="history-feature">
                    <i class="fas fa-ship"></i>
                    <h4 data-lang="zh">郑和下西洋</h4>
                    <h4 data-lang="en" style="display: none;">Zheng He's Voyages</h4>
                    <p data-lang="zh">探索明朝航海技术的巅峰，郑和七次下西洋的壮举</p>
                    <p data-lang="en" style="display: none;">Explore the peak of Ming maritime technology and Zheng He's seven voyages</p>
                </div>
                <div class="history-feature">
                    <i class="fas fa-paint-brush"></i>
                    <h4 data-lang="zh">文化艺术</h4>
                    <h4 data-lang="en" style="display: none;">Culture & Arts</h4>
                    <p data-lang="zh">明代青花瓷、小说、绘画等文化艺术的辉煌成就</p>
                    <p data-lang="en" style="display: none;">Brilliant achievements in Ming blue-and-white porcelain, literature, and painting</p>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px;">
                <a href="https://MingDynasty1.github.io/MgDyhistory.html" class="history-btn" data-lang="zh">探索大明历史</a>
                <a href="https://MingDynasty1.github.io/MgDyhistory.html" class="history-btn" data-lang="en" style="display: none;">Explore Ming History</a>
            </div>
        </div>
    `;
    
    document.getElementById('ming-history').innerHTML = historyHTML;
}

function initializeCheckinFunctionality() {
    // 每日打卡功能逻辑（与之前相同）
    let checkinData = {
        consecutiveDays: 0,
        totalDays: 0,
        lastCheckinDate: null,
        todayFortune: null,
        history: []
    };
    
    function loadCheckinData() {
        const savedData = localStorage.getItem('mingDynastyCheckinData');
        if (savedData) {
            checkinData = JSON.parse(savedData);
        }
        updateCheckinDisplay();
    }
    
    function saveCheckinData() {
        localStorage.setItem('mingDynastyCheckinData', JSON.stringify(checkinData));
    }
    
    function updateCheckinDisplay() {
        document.getElementById('consecutive-days').textContent = checkinData.consecutiveDays;
        document.getElementById('total-days').textContent = checkinData.totalDays;
        
        if (checkinData.todayFortune) {
            document.getElementById('today-fortune').textContent = checkinData.todayFortune.level;
            document.getElementById('fortune-level').textContent = checkinData.todayFortune.level;
            document.getElementById('fortune-message').textContent = checkinData.todayFortune.message;
            document.getElementById('fortune-message-en').textContent = checkinData.todayFortune.messageEn;
            
            const fortuneLevel = document.getElementById('fortune-level');
            fortuneLevel.className = 'fortune-level';
            switch(checkinData.todayFortune.level) {
                case '§大凶§':
                    fortuneLevel.classList.add('fortune-daxiong');
                    break;
                case '§凶§':
                    fortuneLevel.classList.add('fortune-xiong');
                    break;
                case '§中平§':
                    fortuneLevel.classList.add('fortune-zhongping');
                    break;
                case '§小吉§':
                    fortuneLevel.classList.add('fortune-xiaoji');
                    break;
                case '§大吉§':
                    fortuneLevel.classList.add('fortune-daji');
                    break;
            }
        }
        
        const historyList = document.getElementById('checkin-history-list');
        historyList.innerHTML = '';
        
        if (checkinData.history.length === 0) {
            const noRecordZh = document.createElement('li');
            noRecordZh.innerHTML = '<span class="checkin-date">暂无记录</span><span class="checkin-fortune">-</span>';
            noRecordZh.setAttribute('data-lang', 'zh');
            
            const noRecordEn = document.createElement('li');
            noRecordEn.innerHTML = '<span class="checkin-date">No records</span><span class="checkin-fortune">-</span>';
            noRecordEn.setAttribute('data-lang', 'en');
            noRecordEn.style.display = 'none';
            
            historyList.appendChild(noRecordZh);
            historyList.appendChild(noRecordEn);
        } else {
            const recentHistory = checkinData.history.slice(-7).reverse();
            recentHistory.forEach(record => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<span class="checkin-date">${record.date}</span><span class="checkin-fortune">${record.fortune}</span>`;
                historyList.appendChild(listItem);
            });
        }
        
        const today = new Date().toDateString();
        if (checkinData.lastCheckinDate === today) {
            document.getElementById('checkin-btn').disabled = true;
            document.getElementById('checkin-btn-en').disabled = true;
            document.getElementById('checkin-btn').textContent = '今日已打卡';
            document.getElementById('checkin-btn-en').textContent = 'Already Checked-in Today';
        } else {
            document.getElementById('checkin-btn').disabled = false;
            document.getElementById('checkin-btn-en').disabled = false;
            document.getElementById('checkin-btn').textContent = '抽签打卡';
            document.getElementById('checkin-btn-en').textContent = 'Draw Fortune & Check-in';
        }
    }
    
    function generateFortune() {
        const fortunes = [
            {
                level: '§大凶§',
                message: '今日运势不佳，诸事不宜，宜静不宜动',
                messageEn: 'Bad luck today, avoid major decisions, stay calm'
            },
            {
                level: '§凶§',
                message: '今日运势稍差，小心谨慎，避免冒险',
                messageEn: 'Slightly bad luck today, be cautious, avoid risks'
            },
            {
                level: '§中平§',
                message: '今日运势平平，稳扎稳打，静待时机',
                messageEn: 'Average luck today, steady progress, wait for opportunities'
            },
            {
                level: '§小吉§',
                message: '今日运势不错，小有收获，宜积极行动',
                messageEn: 'Good luck today, small gains, take positive action'
            },
            {
                level: '§大吉§',
                message: '今日运势极佳，万事顺利，心想事成',
                messageEn: 'Excellent luck today, everything goes smoothly, wishes come true'
            }
        ];
        
        const weights = [0.1, 0.2, 0.3, 0.25, 0.15];
        let random = Math.random();
        let cumulativeWeight = 0;
        
        for (let i = 0; i < weights.length; i++) {
            cumulativeWeight += weights[i];
            if (random <= cumulativeWeight) {
                return fortunes[i];
            }
        }
        
        return fortunes[2];
    }
    
    function handleCheckin() {
        const today = new Date().toDateString();
        
        if (checkinData.lastCheckinDate === today) {
            alert('今天已经打卡过了！');
            return;
        }
        
        const fortune = generateFortune();
        
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayString = yesterday.toDateString();
        
        if (checkinData.lastCheckinDate === yesterdayString) {
            checkinData.consecutiveDays++;
        } else if (checkinData.lastCheckinDate !== today) {
            checkinData.consecutiveDays = 1;
        }
        
        checkinData.totalDays++;
        checkinData.lastCheckinDate = today;
        checkinData.todayFortune = fortune;
        
        checkinData.history.push({
            date: new Date().toLocaleDateString('zh-CN'),
            fortune: fortune.level
        });
        
        saveCheckinData();
        updateCheckinDisplay();
        
        alert(`打卡成功！\n今日运势：${fortune.level}\n${fortune.message}`);
    }
    
    document.getElementById('checkin-btn').addEventListener('click', handleCheckin);
    document.getElementById('checkin-btn-en').addEventListener('click', handleCheckin);
    
    loadCheckinData();
}
