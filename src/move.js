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



function displayTempurature (response)
{
  console.log(response.data);
  let tempurature= document.querySelector("#temp");
  tempurature.innerHTML= Math.round(celsiusTemp);
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
  celsiusTemp =response.data.main.temp

}

function search (city)
{
  let apiKey= "5dad882459b91a0858b2f948bcddd14d";
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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

function showFahrenheitTemp(event)
{
  event.preventDefault();
  let fahrenheittempurature= (celsiusTemp * 9)/ 5 + 32;
  let tempurature = document.querySelector("#temp");
  tempurature.innerHTML= Math.round(fahrenheittempurature);
}

function showCelsiusTemp(event)
{
  event.preventDefault();
  let tempurature = document.querySelector("#temp");
  tempurature.innerHTML = Math.round(celsiusTemp);
}

let celsiusTemp = null;


let form = document.querySelector("#search-city");
form.addEventListener("submit", handleSubmit);

let celsiusLink= document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsiusTemp);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheitTemp);

search("Tucson");