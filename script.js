// تغيير المظهر
function changeTheme() {
    document.body.classList.toggle("dark-mode");
}

// إظهار الأقسام بالأنيميشن
const articles = document.querySelectorAll(".article");
window.addEventListener("scroll", () => {
    articles.forEach(article => {
        const rect = article.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            article.classList.add("show");
        }
    });
});

// زر الرجوع للأعلى
const backToTop = document.createElement("button");
backToTop.id = "backToTop";
backToTop.innerHTML = "↑";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});