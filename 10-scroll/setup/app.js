// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const toggleBtn = document.querySelector(".nav-toggle");
const linksContaienr = document.querySelector(".links-container");
const links = document.querySelector(".links");
toggleBtn.addEventListener("click", function () {
  // check the height of the parent
  const containerHeight = linksContaienr.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContaienr.style.height = `${linksHeight}px`;
  } else {
    linksContaienr.style.height = 0;
  }
});
const navBar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
// ********** fixed navbar ************
window.addEventListener("scroll", function () {
  //console.log(window.pageYOffset);
  const navHeight = navBar.getBoundingClientRect().height;
  if (window.pageYOffset > navHeight) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }
  if (window.pageYOffset > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
//console.log(scrollLinks);

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // preventDefault;
    e.preventDefault();
    // get the attribute of current target
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // console.log(element.offsetTop);
    // calculate the height
    const navHeight = navBar.getBoundingClientRect().height;
    const containerHeight = linksContaienr.getBoundingClientRect().height;
    const fixedNav = navBar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    console.log(position);
    if (!fixedNav) {
      position -= navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContaienr.style.height = 0;
  });
});
