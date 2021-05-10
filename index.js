window.onload = function () {
  let secs = 00;
  let tens = 00;
  let grabSecs = document.getElementById("seconds");
  let grabTens = document.getElementById("tens");
  let grabStart = document.getElementById("button-start");
  let grabStop = document.getElementById("button-stop");
  let grabReset = document.getElementById("button-reset");
};

grabStart.onclick = function () {
  clearInterval();
};
