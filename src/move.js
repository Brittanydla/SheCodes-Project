//date
let now = new Date();
let hour = now.getHours();
let min = now.getMinutes();
let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];
let today = document.querySelector("h1.card-title");
today.innerHTML = `${month} ${day} ${hour}:${min}`;
// header display search
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  console.log(searchInput.value);
  let apiKey = "5dad882459b91a0858b2f948bcddd14d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&appid=${apiKey}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTempurature);
}
let form = document.querySelector("#search-city");
form.addEventListener("submit", search);
// search form
function showTempurature(response) {
  let header = document.querySelector("h1.header");
  header.innerHTML = `You're seeing the weather for ${response.data.name}`;
  let tempurature = Math.round(response.data.main.temp);
  let tempElement = document.querySelector("#temp");
  tempElement.innerHTML = `${tempurature}`;
}
navigator.geolocation.getCurrentPosition(showLocation);
//locator
function showLocation(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiKey = "5dad882459b91a0858b2f948bcddd14d";
  let apiLocatorUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  axios.get(apiLocatorUrl).then(showTempurature);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showLocation);
}
let button = document.querySelector("#current");
button.addEventListener("click", getCurrentPosition);

//temp conversion
function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
}
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);
