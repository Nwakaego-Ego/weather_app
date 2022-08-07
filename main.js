let currentTime = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednessday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];

let hour = currentTime.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}

let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let second = currentTime.getSeconds();

let date = document.getElementById("date");
date.innerHTML = `${day} ${hour} : ${minutes}`;

let search = document.getElementById("search-form");
search.addEventListener("submit", searchBtn);

function searchBtn(event) {
  event.preventDefault();
  let cityInput = document.getElementById("city-input");
  let city = document.getElementById("city");
  city.innerHTML = cityInput.value;
}

let fahrenheit = document.getElementById("fahrenheit-link");
fahrenheit.addEventListener("click", fahrenheitBtn);

let celsius = document.getElementById("celsius-link");
celsius.addEventListener("click", celsiusBtn);

function fahrenheitBtn() {
  let temperature = document.getElementById("temperature");
  temperature.innerHTML = 20;
}

function celsiusBtn() {
  let temperature = document.getElementById("temperature");
  temperature.innerHTML = 10;
}
