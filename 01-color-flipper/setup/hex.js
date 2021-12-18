const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".btn");
const color = document.getElementsByClassName("color");
btn.addEventListener("click", function () {
  let hexValue = "#";
  for (let i = 0; i < 6; i++) {
    hexValue += getRandomElement();
  }
  console.log(hexValue);
  color[0].textContent = hexValue;
  window.document.body.style.backgroundColor = hexValue;
});
function getRandomElement() {
  return hex[Math.floor(Math.random() * hex.length)];
}
