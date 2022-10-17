function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startsizeBox = 30;
const numberBoxes = {};

const btnCreateEl = document.querySelector(`button[data-create]`);
const btnDestroyEl = document.querySelector(`button[data-destroy]`);
const inputEl = document.querySelector(`input`)

inputEl.addEventListener(`input`, onChangeBoxSize)
// btnCreateEl.addEventListener(`click`, createBoxes)

function onChangeBoxSize(event) {
  // console.log(event.currentTarget.valueAsNumber);
  createBoxes(event.currentTarget.valueAsNumber)
}

function createBoxes(amount) {
  // console.log(amount);
  const sizeBox = `${startsizeBox + (amount - 1) * 10}px`;
  
  console.log(sizeBox);
}

