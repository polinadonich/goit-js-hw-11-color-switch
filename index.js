const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyBackground = document.querySelector("body");
const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');

btnStart.addEventListener("click", startSwitch);
btnStop.addEventListener("click", stopSwitch);

let timerId = null;

function startSwitch() {
  btnStart.disabled = true;
   timerId = setInterval(() => {
        bgrSwitch();
    }, 1000);
};

function stopSwitch() {
  clearInterval(timerId);
  btnStart.disabled = false;
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function bgrSwitch() {
    bodyBackground.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
}
