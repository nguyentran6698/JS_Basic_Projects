const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const container = document.getElementsByTagName("h2");
btn.addEventListener("click", function () {
  const randomValue = Math.floor(Math.random() * colors.length);
  console.log(randomValue);
  color.textContent = colors[randomValue];
  window.document.body.style.backgroundColor = colors[randomValue];
});
