const timer = document.querySelector(".timer");
const daysSpan = document.querySelector(".days");
const hoursSpan = document.querySelector(".hours");
const minutesSpan = document.querySelector(".minutes");
const secondsSpan = document.querySelector(".seconds");

let countDownDate = new Date("Aug 16, 2024 09:17:00").getTime();
let now = new Date().getTime();
let distance = countDownDate - now;

let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

daysSpan.textContent = days.toString().padStart(2, "0");
hoursSpan.textContent = hours.toString().padStart(2, "0");
minutesSpan.textContent = minutes.toString().padStart(2, "0");
secondsSpan.textContent = seconds.toString().padStart(2, "0");

setInterval(() => {
    now = new Date().getTime();
    distance = countDownDate - now;

    if (distance < 0) {
        timer.textContent = "Countdown Over!";
        daysSpan.textContent = "00";
        hoursSpan.textContent = "00";
        minutesSpan.textContent = "00";
        secondsSpan.textContent = "00";
    } else {
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysSpan.textContent = days.toString().padStart(2, "0");
        hoursSpan.textContent = hours.toString().padStart(2, "0");
        minutesSpan.textContent = minutes.toString().padStart(2, "0");
        secondsSpan.textContent = seconds.toString().padStart(2, "0");
    }
}, 1000);