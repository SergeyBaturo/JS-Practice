const deg = 6;
const mHour = document.querySelector('.Mhr');
const nyHour = document.querySelector('.NYhr');
const tHour = document.querySelector('.Thr');
const lHour = document.querySelector('.Lhr');
const bHour = document.querySelector('.Bhr');
const hkHour = document.querySelector('.HKhr');
const minutes = document.querySelectorAll('.mn');
const seconds = document.querySelectorAll('.sc');

setInterval(() => {
  let Day = new Date();
  let mHh = Day.getHours() * 30;
  let nyHh = (Day.getHours() - 5) * 30;
  let tHh = (Day.getHours() + 9) * 30;
  let lHh = Day.getHours() * 30;
  let bHh = (Day.getHours() + 1) * 30 ;
  let hkHh = (Day.getHours() + 8) * 30;
  let mm = Day.getMinutes() * deg;
  let ss = Day.getSeconds() * deg;

  mHour.style.transform = `rotateZ(${(mHh) + (mm/12)}deg)`;
  nyHour.style.transform = `rotateZ(${(nyHh) + (mm/12)}deg)`;
  tHour.style.transform = `rotateZ(${(tHh) + (mm/12)}deg)`;
  lHour.style.transform = `rotateZ(${(lHh) + (mm/12)}deg)`;
  bHour.style.transform = `rotateZ(${(bHh) + (mm/12)}deg)`;
  hkHour.style.transform = `rotateZ(${(hkHh) + (mm/12)}deg)`;
  minutes.forEach(minute => {
    minute.style.transform = `rotateZ(${mm}deg)`;
  })
  seconds.forEach(second => {
    second.style.transform = `rotateZ(${ss}deg)`;
  })
});