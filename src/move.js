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
}

let apiKey= "5dad882459b91a0858b2f948bcddd14d";
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=imperial`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTempurature);