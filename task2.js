let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Elements
const timeDisplay = document.getElementById('time-display');
const startStopBtn = document.getElementById('start-stop-btn');
const resetBtn = document.getElementById('reset-btn');

// Start/Stop button event listener
startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

// Reset button event listener
resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timeDisplay.textContent = formatTime(hours, minutes, seconds);
    startStopBtn.textContent = 'Start';
});

// Function to update time every second
function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    timeDisplay.textContent = formatTime(hours, minutes, seconds);
}

// Function to format time as HH:MM:SS
function formatTime(hours, minutes, seconds) {
    return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
}

// Function to pad time values with a leading zero if needed
function padTime(unit) {
    return unit < 10 ? `0${unit}` : unit;
}
