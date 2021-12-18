const btnContainer = document.querySelector(".btn-container");
function displayButton(pageNumb, activeIndex) {
  const value = pageNumb.map((_, pageIndex) => {
    return `<button class="page-btn ${
      activeIndex === pageIndex ? "active-btn" : "null "
    }" data-index="${pageIndex}">${pageIndex + 1}</button>`;
  });
  value.push(`<button class="next-btn">next</button>`);
  value.unshift(`<button class="prev-btn">prev</button>`);
  btnContainer.innerHTML = value.join("");
}

export default displayButton;
