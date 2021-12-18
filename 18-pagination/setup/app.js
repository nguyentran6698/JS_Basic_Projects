import fetchFollower from "./fetchFollowers.js";
import displayUser from "./displayFollowers.js";
import displayButton from "./displayButtons.js";
import paginate from "./paginate.js";
// get element
const title = document.querySelector(".section-title h1");
const btnContainer = document.querySelector(".btn-container");
let index = 0;
let pages = [];

const setupUI = () => {
  console.log(index);

  displayUser(pages[index]);
  displayButton(pages, index);
};
const init = async () => {
  const people = await fetchFollower();
  title.textContent = "Paginate";
  pages = paginate(people);
  setupUI(pages);
};
window.addEventListener("load", init);
btnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-container")) return;
  if (e.target.classList.contains("page-btn")) {
    index = parseInt(e.target.dataset.index);
  }
  if (e.target.classList.contains("prev-btn")) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  if (e.target.classList.contains("next-btn")) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }

  setupUI();
});
