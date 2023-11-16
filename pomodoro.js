let timerInterval;
let isTimerRunning = false;
let minutes = 0;
let seconds = 0;

document.getElementById("start-button").addEventListener("mouseover", mouseOverButton);
document.getElementById("start-button").addEventListener("mouseleave", mouseOffButton);
document.getElementById("start-button").addEventListener("click", toggleTimer);

function toggleTimer() {
    if (isTimerRunning) {
        pauseTimer();
    } else {
        startTimer();
    }
}

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
    isTimerRunning = true;
    changeStButtonText("Pausar");
}

function pauseTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    changeStButtonText("Continuar");
}

function updateTimer() {
    seconds++;

    if (seconds == 60) {
        seconds = 0;
        minutes++;

        if (minutes == 25) {
            clearInterval(timerInterval);
            isTimerRunning = false;
            changeStButtonText("Descanso");
        }
    }

    const formattedTime = formatTime(minutes, seconds);
    document.getElementById("timer-clock").innerText = formattedTime;
}

function formatTime(minutes, seconds) {
    return (padZero(minutes) + ':' + padZero(seconds));
}

function padZero(value) {
    return value < 10 ? '0' + value : value;
}

function changeStButtonText(text) {
    document.getElementById("start-button").innerText = text;
}

function mouseOverButton() {
    document.getElementById("start-button").style.backgroundColor = "white";
    document.getElementById("start-button").style.color = "rgb(244, 105, 90)";
}

function mouseOffButton() {
    document.getElementById("start-button").style.backgroundColor = "";
    document.getElementById("start-button").style.color = "";
}
