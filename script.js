function changeTheme() {
    let colors = ["#f4f4f4", "#ecf0f1", "#dfe6e9", "#ffeaa7"]
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}


// إنشاء الزر
let backToTop = document.createElement("button");
backToTop.id = "backToTop";
backToTop.innerHTML = "⬆";
document.body.appendChild(backToTop);

// إظهار الزر عند التمرير لأسفل
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

// إرجاع المستخدم لأعلى الصفحة عند الضغط على الزر
backToTop.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});