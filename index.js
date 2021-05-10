window.onload = function () {
  let secs = 00;
  let tens = 00;
  let grabSecs = document.getElementById("seconds");
  let grabTens = document.getElementById("tens");
  let grabStart = document.getElementById("button-start");
  let grabStop = document.getElementById("button-stop");
  let grabReset = document.getElementById("button-reset");
  let interval;
};

grabStart.onclick = function () {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
  // setInterval() function will execute the timer once every 1 second
  //   clearInterval() will stop the timer
};

grabStop.onclick = function () {
  clearInterval(interval);
};
