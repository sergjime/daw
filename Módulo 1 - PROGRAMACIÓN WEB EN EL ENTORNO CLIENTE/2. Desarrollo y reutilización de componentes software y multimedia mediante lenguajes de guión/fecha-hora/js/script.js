function startTime() {
  const today = new Date();
  const hr = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("clock").innerHTML = `${hr}:${min}:${sec}`;
  setTimeout(function () {
    startTime();
  }, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

window.onload = startTime;
