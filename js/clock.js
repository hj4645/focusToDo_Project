const clockContainer = document.querySelector(".Digital_time");
const hourElement = document.querySelector(".Digital_hour");
const minuteElement = document.querySelector(".Digital_min");
const ampmElement = document.querySelector(".Digital_ampm");
const secondElement = document.querySelector(".Digital_second");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  hourElement.innerHTML = hours;
  minuteElement.innerHTML = minutes;
  secondElement.innerHTML = seconds;
  
  // AM/PM 설정
  const ampm = hours >= 12 ? "PM" : "AM";
  ampmElement.innerHTML = ampm;
}

getClock();
setInterval(getClock, 1000);