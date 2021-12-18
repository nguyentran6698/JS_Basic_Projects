let count = 0;
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const list = btn.classList;
    // const style = e.currentTarget.classList;
    // console.log(style);
    if (list.contains("decrease")) {
      count--;
    } else if (list.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
