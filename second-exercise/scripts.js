const body = document.querySelector('body');
const header = document.querySelector('header');
const nav = document.querySelector('.navigation');
const btn = document.querySelector('.switch-button');
const slider = document.querySelector('.slider');

btn.addEventListener('click', () => {
  body.classList.toggle('active');
  header.classList.toggle('active');
  nav.classList.toggle('active');
  slider.classList.toggle('active');
  btn.classList.toggle('active');
})