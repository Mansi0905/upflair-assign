const timerDisplay = document.getElementById("timer");
const sessionDisplay = document.getElementById("session");
const workInput = document.getElementById("workInput");
const breakInput = document.getElementById("breakInput");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

let timer, isRunning = false, isWork = true, timeLeft = 25*60;

function update() {
  let m = Math.floor(timeLeft/60).toString().padStart(2,"0");
  let s = (timeLeft%60).toString().padStart(2,"0");
  timerDisplay.textContent = `${m}:${s}`;
}

function switchSession() {
  isWork = !isWork;
  timeLeft = (isWork ? workInput.value : breakInput.value)*60;
  sessionDisplay.textContent = isWork ? "Work Session" : "Break Session";
  update();
}

function tick() {
  if(timeLeft > 0) {
    timeLeft--;
    update();
  } else {
    clearInterval(timer);
    isRunning = false;
    switchSession();
    start();
  }
}

function start() {
  if(isRunning) return;
  isRunning = true;
  timer = setInterval(tick, 1000);
}

function pause() {
  clearInterval(timer);
  isRunning = false;
}

function reset() {
  pause();
  isWork = true;
  timeLeft = workInput.value*60;
  sessionDisplay.textContent = "Work Session";
  update();
}

startBtn.onclick = start;
pauseBtn.onclick = pause;
resetBtn.onclick = reset;

update();
