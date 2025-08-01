// ✅ تغيير شكل شريط التنسيق عند النزول
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(79, 172, 254, 0.9)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.15)';
        navbar.style.backdropFilter = 'blur(15px)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
});

// ✅ زر العودة للأعلى
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '⬆';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '20px';
scrollBtn.style.right = '20px';
scrollBtn.style.background = '#4facfe';
scrollBtn.style.color = 'white';
scrollBtn.style.border = 'none';
scrollBtn.style.padding = '10px 15px';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.fontSize = '18px';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';
scrollBtn.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
scrollBtn.style.zIndex = '999';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ✅ تأثير إضاءة متحركة على العناوين
const glowingText = document.querySelectorAll('h1, h2');
setInterval(() => {
    glowingText.forEach(text => {
        text.style.textShadow = `0 0 10px #4facfe, 0 0 20px #00f2fe`;
        setTimeout(() => {
            text.style.textShadow = `none`;
        }, 500);
    });
}, 1500);