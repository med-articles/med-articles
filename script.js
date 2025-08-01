// زر الوضع الليلي
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// زر الرجوع للأعلى
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// أنيميشن ظهور المقالات عند التمرير
const articles = document.querySelectorAll('.article');
window.addEventListener('scroll', () => {
    articles.forEach(article => {
        const rect = article.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            article.classList.add('visible');
        }
    });
});