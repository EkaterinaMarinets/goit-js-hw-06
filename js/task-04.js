let counterValue = 0;
const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const span = document.querySelector('#value');

const increment = () => {
   counterValue += 1
   document.getElementById('value').textContent = counterValue;
};

const decrement = () => {
   counterValue -= 1
   document.getElementById('value').textContent = counterValue;
};

btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);