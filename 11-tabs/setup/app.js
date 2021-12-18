const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const value = e.target.dataset.id;
  btns.forEach(function (btn) {
    btn.classList.remove("active");
  });
  e.target.classList.add("active");
  articles.forEach(function (article) {
    article.classList.remove("active");
  });
  const element = document.getElementById(value);
  element.classList.add("active");
});
