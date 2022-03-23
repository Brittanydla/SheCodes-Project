

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
let today = document.querySelector("li.day");
today.innerHTML = `${month} ${day} ${hour}:${min}`;

function displayTempurature (response)
{
  console.log(response.data);
  let tempurature= document.querySelector("#temp");
  tempurature.innerHTML= Math.round(response.data.main.temp);
  let city= document.querySelector("#city");
  city.innerHTML= response.data.name;
  let description= document.querySelector("#description")
  description.innerHTML= response.data.weather[0].description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML=response.data.main.humidity;
  let windSpeed = document.querySelector("#wind");
  windSpeed.innerHTML= Math.round(response.data.wind.speed);
}

let apiKey= "5dad882459b91a0858b2f948bcddd14d";
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=imperial`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTempurature);