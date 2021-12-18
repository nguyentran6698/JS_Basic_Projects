// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const links = document.querySelector(".links");
const toggleBtn = document.querySelector(".nav-toggle");
toggleBtn.addEventListener("mouseenter", function () {
  links.classList.add("show-links");
});
toggleBtn.addEventListener("mouseleave", function () {
  links.classList.remove("show-links");
});

toggleBtn.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
