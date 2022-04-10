function formatDate(timestamp)
{
let date= new Date(timestamp);
let hours = date.getHours();
if (hours <10)
{hours = `0${hours}`;}

let minutes = date.getMinutes();
if (minutes <10)
{
  minutes= `0${minutes}`;
}

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day= days[date.getDay()];
return `${day} ${hours}: ${minutes}`;
}

function formatDay(timestamp)
{

  let date= new Date(timestamp * 1000);
  let day= date.getDay();
let days= ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  return days [day];

}


function displayforecast (response)
{
  let forecast = response.data.daily;

  let forecastElement = document.querySelector("#forecast");

let forecastHTML=`<div class="row">`;
forecast.forEach(function(forecastDay, index){
  if (index < 6) {
  forecastHTML= forecastHTML +
`<div class="col-2"> ${formatDay(forecastDay.dt)}
    <div class="wFI"> <img src="Images/${forecastDay.weather[0].icon}.png" alt="" id="future-icon" width="120px" /> </div>
    <div class="weather-forecast-tempurature"> 
    <span class="weather-forecast-temp-max"> ${Math.round(forecastDay.temp.max)}° </span> 
    <span class="weather-forecast-temp-min"> ${Math.round(forecastDay.temp.min)}° </span>
</div> 
</div>`;
  }
});

forecastHTML =forecastHTML + `</div>`;
forecastElement.innerHTML = forecastHTML;

}

function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey= "5dad882459b91a0858b2f948bcddd14d";
  let apiURL= `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=imperial`;
  axios.get(apiURL).then(displayforecast);
}

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
  let dateElement= document.querySelector("#day");
  dateElement.innerHTML= formatDate (response.data.dt *1000);
  let iconElement =document.querySelector("#icon");
  iconElement.setAttribute("alt", response.data.weather[0].description);
  iconElement.setAttribute("src", `Images/${response.data.weather[0].icon}.png`);
 

  getForecast(response.data.coord);

}



function search (city)
{
  let apiKey= "5dad882459b91a0858b2f948bcddd14d";
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayTempurature);
}

function handleSubmit (event)
{
event.preventDefault();
let cityElement=document.querySelector("#search-input");
search(cityElement.value);
let h1= document.querySelector("h1");
h1.innerHTML = `Accioweathero ${cityElement.value}!`;

}







let form = document.querySelector("#search-city");
form.addEventListener("submit", handleSubmit);


search("Tucson");