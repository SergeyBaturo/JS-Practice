let buttons = document.querySelectorAll('button')
let blocks = document.querySelectorAll('.text')

const openTab = function(event, id) {
  buttons.forEach(btn => btn.classList.remove('active'));
  blocks.forEach(block => block.style.display = 'none');
  event.target.classList.add('active');
  document.querySelector(`#${id}`).style.display = "block";
}

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    openTab(event, `${button.id}2`);
  })
})