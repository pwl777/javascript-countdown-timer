/* ------ JavaScript - Countdown Timer ------ */
/* =============== Arrays =============== */
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

/* =============== Select Elements =============== */

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
// console.log(items);

/* =============== Set End Date =============== */

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

/* ---  Hard Coded End Date - Uses Array Above  --- */
// let futureDate = new Date(2021, 11, 31, 23, 59, 0);
// console.log(futureDate);

/* ---  Dynamic End Date  --- */
const futureDate = new Date(tempYear, tempMonth, tempDay + 7, 23, 59, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
// console.log(months[month]);
month = months[month];

const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
// console.log(weekday);

giveaway.textContent = `Offer ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}pm`;

/* =============== Future Time in Milliseconds =============== */

const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  //   console.log(today);
  const t = futureTime - today;
  //   console.log(t);

  /*   
   1s = 1000ms
   1m = 60s
   1hr = 60mins
   1d = 24hr
    */

  /* ---  Values in milliseconds  --- */
  const oneDay = 24 * 60 * 60 * 1000;
  //   console.log(oneDay);
  const oneHour = 60 * 60 * 1000;
  //   console.log(oneHour);
  const oneMinute = 60 * 1000;
  //   console.log(oneMinute);

  /* ---  Calculate Values  --- */
  let days = t / oneDay;
  days = Math.floor(days);
  //   console.log(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  //   console.log(hours);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  //   console.log(minutes);
  let seconds = Math.floor((t % oneMinute) / 1000);
  //   console.log(seconds);

  /* ---  Set Values Array  --- */
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this offer has expired</h4>`;
  }
}

/* =============== Countdown =============== */

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
