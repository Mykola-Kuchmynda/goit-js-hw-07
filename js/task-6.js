function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = '';

  const boxesArray = [];

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();
    const div = document.createElement("div");

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = color;
    div.style.margin = "5px";

    boxesArray.push(div);
  }

    boxesContainer.append(...boxesArray);
}


function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = '';
}


document.querySelector('[data-create]').addEventListener('click', () => {
  const input = document.querySelector('input');
  const amount = parseInt(input.value, 10);
  if (amount >= 1 && amount <= 100) { 
    createBoxes(amount);
  }

   input.value = '';
});


document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
