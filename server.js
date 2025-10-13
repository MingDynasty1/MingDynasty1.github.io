// server.js - 人机验证和会话管理

class VerificationManager {
    constructor() {
        this.sessionKey = 'JSESSIONID';
        this.verificationExpiry = 24 * 60 * 60 * 1000; // 24小时
    }

    // 生成简单的哈希（生产环境应使用更安全的哈希算法）
    generateHash(data) {
        let hash = 0;
        for (let i = 0; i < data.length; i++) {
            const char = data.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // 转换为32位整数
        }
        return Math.abs(hash).toString(36);
    }

    // 创建验证cookie
    createVerificationCookie(userAgent, ip = '') {
        const timestamp = new Date().toISOString();
        const verificationData = {
            verified: true,
            timestamp: timestamp,
            userAgent: this.generateHash(userAgent),
            ipHash: ip ? this.generateHash(ip) : '',
            sessionId: this.generateHash(timestamp + userAgent + ip)
        };

        // 对数据进行base64编码
        const encodedData = btoa(JSON.stringify(verificationData));
        
        // 设置cookie，有效期为24小时
        const expiryDate = new Date(Date.now() + this.verificationExpiry).toUTCString();
        document.cookie = `${this.sessionKey}=${encodedData}; expires=${expiryDate}; path=/; Secure; SameSite=Strict`;
        
        return verificationData.sessionId;
    }

    // 验证cookie
    verifyCookie() {
        const cookie = this.getCookie(this.sessionKey);
        if (!cookie) return false;

        try {
            const verificationData = JSON.parse(atob(cookie));
            
            // 检查时间戳是否在有效期内
            const verificationTime = new Date(verificationData.timestamp).getTime();
            const currentTime = new Date().getTime();
            
            if (currentTime - verificationTime > this.verificationExpiry) {
                this.clearVerification();
                return false;
            }

            // 验证用户代理哈希（可选，增强安全性）
            if (verificationData.userAgent !== this.generateHash(navigator.userAgent)) {
                console.warn('用户代理不匹配，可能需要重新验证');
                // 这里可以选择强制重新验证或允许继续
            }

            return true;
        } catch (error) {
            console.error('验证cookie解析失败:', error);
            this.clearVerification();
            return false;
        }
    }

    // 获取cookie
    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    // 清除验证
    clearVerification() {
        document.cookie = `${this.sessionKey}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    }

    // 检查并处理验证状态
    checkAndHandleVerification() {
        if (!this.verifyCookie()) {
            // 重定向到验证页面
            window.location.href = 'https://mingdynasty1.github.io/Check-for-People-Robot.html';
            return false;
        }
        return true;
    }

    // 初始化验证（在验证页面调用）
    initializeVerification() {
        const userAgent = navigator.userAgent;
        // 注意：在浏览器环境中无法直接获取IP，需要后端支持
        const sessionId = this.createVerificationCookie(userAgent);
        
        console.log('验证已初始化，会话ID:', sessionId);
        return sessionId;
    }
}

// 创建全局实例
window.verificationManager = new VerificationManager();

// 导出供其他模块使用（如果使用模块系统）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VerificationManager;
}
