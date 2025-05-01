// Select Elements
let secondsElement = document.querySelector(".seconds"); 
let minutesElement = document.querySelector(".minutes"); 
let hoursElement = document.querySelector(".hours"); 
let daysElement = document.querySelector(".days"); 

// Set Conunted Date
let date = new Date("2022-12-31 23:59:59");
// Diff Between date And Now
let countedTime = date.getTime() - new Date().getTime()
let seconds = Math.floor(countedTime / 1000);
let minutes = Math.floor(seconds / 60);
let hours = Math.floor(minutes / 60);
let days = Math.floor(hours / 24);

// Iterval Every Second
let count = setInterval(() => {
  // Set Conunted Date
  let date = new Date("2022-12-31 23:59:59");
  // Diff Between date And Now
  let countedTime = date.getTime() - new Date().getTime()

  // 
  let days = Math.floor(countedTime / (1000 * 60 * 60 * 24));
  let hours = Math.floor((countedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((countedTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((countedTime % (1000 * 60)) / (1000));

  // Update Time
  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minutesElement.innerHTML = minutes;
  secondsElement.innerHTML = seconds;
} , 1000);