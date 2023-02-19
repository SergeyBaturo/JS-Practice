const time = document.querySelector('.time');

let getTime = () => {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  time.innerText =  `${hours}:${minutes}:${seconds}`;
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

setInterval(getTime, 1000);