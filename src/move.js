alert ("Hello wold")

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

let apiKey= "5dad882459b91a0858b2f948bcddd14d";
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`; 
console.log(apiUrl)
