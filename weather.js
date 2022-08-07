function time(currentTime) {
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

  let date = document.getElementById("date");
  date.innerHTML = `${day} ${hour} : ${minutes}`;
}

// let second = currentTime.getSeconds();
let currentTime = new Date();
time(currentTime);

let search = document.getElementById("search-form");
search.addEventListener("submit", searchBtn);

let apiKey = "0af0ba164e313d2bc52c846cbc253f06";
let city = "ghana";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

function searchBtn(event) {
  event.preventDefault();
  let cityInput = document.getElementById("city-input");
  let city = document.getElementById("city");
  city.innerHTML = cityInput.value;

  // axios.get(apiUrl).then((response) => { let temperature = document.getElementById("temperature");
  // temperature.innerHTML = Math.round(response.data.main.temp)});
  axios.get(apiUrl).then(weatherSearch);
}

function weatherSearch(response) {
  // console.log(response);
  let temperature = document.getElementById("temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);
  console.log(response.data);
}

// let fahrenheit = document.getElementById("fahrenheit-link");
// fahrenheit.addEventListener("click", fahrenheitBtn);

// let celsius = document.getElementById("celsius-link");
// celsius.addEventListener("click", celsiusBtn);

// function fahrenheitBtn() {
//   let temperature = document.getElementById("temperature");
//   // temperature = Number(temperature);
//   // temperature.innerHTML = (temperature * 9) / 5 + 32;
//   temperature.innerHTML = (temperature.innerHTML * 9) / 5 + 32;
//   // temperature.innerHTML = 10;
//   console.log(temperature);
// }

// function celsiusBtn() {
//   let temperature = document.getElementById("temperature");
//   temperature = Number(temperature);
//   temperature = ((temperature - 32) * 5) / 9;
//   // temperature.innerHTML = 10;
//   console.log(temperature);
// }
