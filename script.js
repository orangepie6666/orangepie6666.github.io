// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 滚动时导航栏效果
const nav = document.querySelector('.cyber-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
        nav.style.boxShadow = '0 2px 10px rgba(0, 255, 157, 0.2)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.9)';
        nav.style.boxShadow = 'none';
    }
});

// 打字机效果
const cyberTitle = document.querySelector('.cyber-title');
const cyberSubtitle = document.querySelector('.cyber-subtitle');

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// 页面加载时的动画
window.addEventListener('load', () => {
    typeWriter(cyberTitle, 'Welcome to My Cyber World');
    setTimeout(() => {
        typeWriter(cyberSubtitle, '探索我的数字世界');
    }, 2000);
});

// 鼠标移动效果
document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    document.body.appendChild(cursor);
    setTimeout(() => {
        cursor.remove();
    }, 1000);
});

// 添加光标样式
const style = document.createElement('style');
style.textContent = `
    .cursor {
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        opacity: 0.5;
        transform: translate(-50%, -50%);
        animation: cursorPulse 1s infinite;
    }

    @keyframes cursorPulse {
        0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0.2;
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
        }
    }
`;
document.head.appendChild(style); 