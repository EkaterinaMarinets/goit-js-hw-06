const input = document.querySelector('input');
const span = document.querySelector('span');

span.classList.add('text-style');
input.addEventListener('input', onInputChange);

function onInputChange(event) {
   span.style.fontSize = `${event.currentTarget.value}px`;
}