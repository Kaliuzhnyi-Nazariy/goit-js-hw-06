let colorValue = document.querySelector('.color');
const bodyColor = document.querySelector('body')
const clickBtn = document.querySelector('.change-color');

let valueColor = '';

clickBtn.addEventListener("click", () => {
  valueColor = getRandomHexColor();
  colorValue.textContent = valueColor;
  bodyColor.style.backgroundColor = valueColor;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
