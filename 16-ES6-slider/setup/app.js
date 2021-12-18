import data from "./data.js";
const container = document.querySelector(".slide-container");
window.addEventListener("DOMContentLoaded", () => {
  container.innerHTML = data
    .map((person, index) => {
      const { img, name, job, text } = person;
      let position = "next";
      if (index === 0) {
        position = "active";
      }
      if (index === data.length - 1) {
        position = "last";
      }
      return `
    <article class="slide ${position}">
          <img
            src=${img}
            class="img"
            alt="${name}"
          />
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">
           ${text}
          </p>
          <div class="quote-icon">
            <div class="fas fa-quote-right"></div>
          </div>
        </article>
    `;
    })
    .join("");
});

function showSliders(type) {
  const last = container.querySelector(".last");
  const active = container.querySelector(".active");
  let next = active.nextElementSibling;
  if (!next) {
    next = container.firstElementChild;
    console.log(next);
  }
  active.classList.remove(["active"]);
  last.classList.remove(["last"]);
  next.classList.remove(["next"]);
  if (type) {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove(["next"]);
    next.classList.add("last");
    return;
  }
  active.classList.add("last");
  next.classList.add("active");
  last.classList.add("next");
}

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

nextBtn.addEventListener("click", () => {
  showSliders();
});
prevBtn.addEventListener("click", () => {
  showSliders("prev");
});
