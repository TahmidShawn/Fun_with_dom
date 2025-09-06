const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
const millisecondsLabel = document.getElementById("milliseconds");

const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const splitBtn = document.getElementById("split-btn");
const resetBtn = document.getElementById("reset-btn");

const lapList = document.getElementById("lap-list");

// variables declaration

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

// event listener

startBtn.addEventListener("click", startFunc);

// controller func

function startFunc() {
    interval = setInterval(updateTimer, 10);
}

// helper func

function updateTimer() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }
    displayTimer();
}

function displayTimer() {
    millisecondsLabel.textContent = milliseconds;
    secondsLabel.textContent = seconds;
    minutesLabel.textContent = minutes;
}
