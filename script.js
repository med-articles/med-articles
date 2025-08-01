// زر الرجوع للأعلى
const backToTopBtn = document.getElementById("back-to-top");
const themeBtn = document.getElementById("theme-btn");
let themeToggle = false;

// إظهار وإخفاء زر الرجوع للأعلى
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// حدث النقر على زر الرجوع للأعلى
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// تأثير ظهور المقالات عند التمرير
const articles = document.querySelectorAll(".article");

const revealOnScroll = () => {
    const triggerPoint = window.innerHeight * 0.85;
    articles.forEach(article => {
        const articleTop = article.getBoundingClientRect().top;
        if (articleTop < triggerPoint) {
            article.style.opacity = "1";
            article.style.transform = "translateY(0)";
        }
    });
};

// عند تحميل الصفحة
window.addEventListener("load", () => {
    // تهيئة المقالات للتأثير
    articles.forEach(article => {
        article.style.opacity = "0";
        article.style.transform = "translateY(30px)";
        article.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });
    revealOnScroll();
});

// حدث التمرير لتفعيل ظهور المقالات
window.addEventListener("scroll", revealOnScroll);

// زر تغيير المظهر
themeBtn.addEventListener("click", () => {
    if (!themeToggle) {
        // ألوان جديدة
        document.body.style.background = "linear-gradient(to bottom, #f0f8ff, #ffffff)";
        document.querySelector("header").style.background = "#e0f7fa";
        themeBtn.style.background = "#0288d1";

        // رسالة تأكيد
        themeBtn.innerText = "🌞 الوضع الفاتح";
        themeToggle = true;
    } else {
        // العودة للألوان الأصلية
        document.body.style.background = "linear-gradient(to bottom, #f0fff4, #ffffff)";
        document.querySelector("header").style.background = "#ffffff";
        themeBtn.style.background = "#3cb371";

        // رسالة تأكيد
        themeBtn.innerText = "🌿 تغيير المظهر";
        themeToggle = false;
    }
});