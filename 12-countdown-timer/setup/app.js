const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempValue = {
  years: tempDate.getFullYear(),
  months: tempDate.getMonth(),
  day: tempDate.getDate(),
};
// to get specific date
//const futureDate = new Date(2021, 11, 13, 23, 10, 12, 0);
const futureDate = new Date(
  tempValue.years,
  tempValue.months,
  tempValue.day + 10,
  11,
  32,
  0
);
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const date = futureDate.getDate();
const day = weekdays[futureDate.getDay()];

giveaway.textContent = `
  giveaway ends on ${day}, ${date} ${month} ${year}, ${hours}:${mins}am
`;
const futureTime = futureDate.getTime();
function getRemainingTime() {
  let today = new Date();
  let t = futureTime - today;
  // 1s = 1000ms;
  // 1min = 60s;
  // 1hours = 60mins;
  // 1day = 24 hours;
  const time = {
    days: Math.floor(t / (1000 * 60 * 60 * 24)),
    hours: Math.floor((t % (1000 * 60 * 60 * 24)) / (60 * 60 * 1000)),
    mins: Math.floor(
      ((t % (1000 * 60 * 60 * 24)) % (60 * 60 * 1000)) / (60 * 1000)
    ),
    seconds: Math.floor(
      (((t % (1000 * 60 * 60 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000
    ),
  };
  items.forEach(function (item) {
    let value = item.getAttribute("class");
    item.textContent = time[value] >= 10 ? `${time[value]}` : `0${time[value]}`;
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class = "expired">sorry this give away has expired</h4>`;
  }
}
const countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
