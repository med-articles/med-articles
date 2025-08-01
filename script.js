// زر تغيير المظهر
document.getElementById("theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// التمرير السلس عند الضغط على الروابط
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
});

// زر الرجوع للأعلى
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// أنيميشن ظهور المقالات
const articles = document.querySelectorAll(".article");
window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.8;
    articles.forEach(article => {
        const boxTop = article.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            article.classList.add("visible");
        }
    });
});