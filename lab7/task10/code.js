function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = [];
  var size = 30;

  for (let i = 1; i <= amount; i++) {
    const color = getRandomHexColor();
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = color;
    boxes.push(box);
    size += 10;
  }

  const boxContainer = document.getElementById("boxes");

  boxes.forEach(box => {
    boxContainer.appendChild(box);
  });
}

const controls = document.getElementById("controls");
const createButton = controls.querySelector("button[data-create]");
const destroyButton = controls.querySelector("button[data-destroy]");

createButton.addEventListener("click", () => {
  const input = controls.querySelector("input");
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

destroyButton.addEventListener("click", () => {
  document.getElementById("boxes").innerHTML = "";
});
