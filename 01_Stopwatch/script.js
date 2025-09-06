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
pauseBtn.addEventListener("click", stopFunc);
splitBtn.addEventListener("click", splitFunc);
resetBtn.addEventListener("click", resetFunc);

// controller func

function startFunc() {
    clearInterval(interval);
    interval = setInterval(updateTimer, 10);
}

function stopFunc() {
    clearInterval(interval);
}

function splitFunc() {
    const lapItem = document.createElement("li");
    lapItem.innerHTML = `${minutes}:${seconds}:${milliseconds}`;
    lapList.appendChild(lapItem);
}

function resetFunc() {
    clearInterval(interval);
    resetTimerData();
    displayTimer();
    lapList.innerHTML = "";
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

function resetTimerData() {
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
}
