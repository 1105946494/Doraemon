import string from "./css.js";

const ToObtain = (node) => {
  return document.querySelector(node);
};
const demo = ToObtain(".demo");
const demo2 = ToObtain(".demo2");
const btnPause = ToObtain(".btnpause");
const btnPlay = ToObtain(".btnplay");
const btnSlow = ToObtain(".btnslow");
const btnNormal = ToObtain(".btnNormal");
const fast = ToObtain(".fast");
const timeChoose = {
  start: 50,
  slow: 300,
  Normal: 100,
  fast: 0,
};
let n = 1;
let initTime = 50;

let id = setInterval(() => {
  timeRun();
}, initTime);

const timeReset = (time) => {
  window.clearInterval(id);
  id = setInterval(() => {
    timeRun();
  }, time);
};
const timeRun = () => {
  n += 1;
  if (n > string.length) {
    window.clearInterval(id);
    return;
  }
  demo.innerText = string.substring(0, n);
  demo2.innerHTML = string.substring(0, n);
  demo.scrollTop = demo.scrollHeight;
};
const addClass = (data) => {
  let nodeList = document.querySelectorAll(".buttoons button");
  nodeList.forEach((e) => {
    e.classList.remove("active");
  });
  data.classList.add("active");
};

btnPause.onclick = () => {
  window.clearInterval(id);
  addClass(btnPause);
};
btnPlay.onclick = () => {
  timeReset(timeChoose.start);
  addClass(btnPlay);
};
btnSlow.onclick = () => {
  timeReset(timeChoose.slow);
  addClass(btnSlow);
};
btnNormal.onclick = () => {
  timeReset(timeChoose.Normal);
  addClass(btnNormal);
};
fast.onclick = () => {
  timeReset(timeChoose.fast);
  addClass(fast);
};
