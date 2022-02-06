// Time objects


// get Id's of required field
var daysId = document.getElementById("days");
var hoursId = document.getElementById("hours");
var minutesId = document.getElementById("minutes");
var secondsId = document.getElementById("seconds");

// Calculation for required fields


// Mapping the required fields to their values
function newYearEve() {
const cuurentDate = new Date();
const desiredDate = new Date("1/1/2023");
const seconds_total = Math.floor((desiredDate - cuurentDate) / 1000 );
const days = Math.floor(seconds_total / 86400 );
const hours = Math.floor(seconds_total / 3600) % 24 ; 
const minutes = Math.floor(seconds_total / 60) % 60;
const seconds = Math.floor(seconds_total) % 60;
daysId.innerText = days;
hoursId.innerText = formattedTime(hours);
minutesId.innerText = formattedTime(minutes);
secondsId.innerText = formattedTime(seconds);
}
function formattedTime (time){
    return time < 10 ? `0${time}` : time;
}
// console test
setInterval(newYearEve,1000);



