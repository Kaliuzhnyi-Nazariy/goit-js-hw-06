const count = document.querySelector("#counter")

const valueCounter = document.querySelector("#value")

const addBtn = document.querySelector('button[data-action="increment"]');
const removeBtn = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;
let step = 1;

addBtn.addEventListener("click", () => {
    counterValue += step;
    valueCounter.textContent = counterValue;
})

removeBtn.addEventListener("click", () => {
    counterValue -= step;
    valueCounter.textContent = counterValue;
})