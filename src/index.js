let currentTime = new Date();
let h1 = document.querySelector("h1");
console.log(currentTime);
console.log(currentTime.getDate());
console.log(currentTime.getHours());
console.log(currentTime.getMinutes());
console.log(currentTime.getFullYear());
console.log(currentTime.getDay());
console.log(currentTime.getMonth());

let date = currentTime.getDate();
let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let year = currentTime.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];

let months = [
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
let month = months[currentTime.getMonth()];
h1.innerHTML = `${day}, ${month} ${date}, ${hours}:${minutes}`;

function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}
function searchCity(event) {
  event.preventDefault();
  let searchCityInput = document.querySelector("#search-city-input");
  let city = searchCityInput.value;

  let apiKey = "eb214ccaa33987f7248o49846e082tab";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(displayTemperature);
}
let form = document.querySelector("#city-form");
form.addEventListener("submit", searchCity);

function changeUnitFahren(event) {
  event.preventDefault();
  let temp = document.querySelector("#temperature");
  let temperature = temp.innerHTML;
  temp.innerHTML = Math.round((temperature * 9) / 5 + 32);
}

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", changeUnitFahren);

function changeUnitCel(event) {
  event.preventDefault();
  let temp = document.querySelector("#temperature");
  let temperature = temp.innerHTML;
  temp.innerHTML = 28;
}

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", changeUnitCel);
