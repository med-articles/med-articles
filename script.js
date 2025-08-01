// زر الرجوع للأعلى
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

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

// إعداد التأثير في البداية والتمرير
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", () => {
    articles.forEach(article => {
        article.style.opacity = "0";
        article.style.transform = "translateY(30px)";
        article.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });
    revealOnScroll();
});