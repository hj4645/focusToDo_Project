const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:nth-child(2)");
const weatherIcon = document.querySelector("#icon");
const API_KEY = "5c013e416fd369283296f0c959b15a4b";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const cityname = "Suji-gu";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url) //JS가 URL을 가져옴
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.main.temp}℃ ${data.weather[0].main}`;

      //날씨 아이콘 이미지 업데이트
      const wicon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
      weatherIcon.innerHTML = `<img id="wicon" src="${wicon}" alt="Weather icon">`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);