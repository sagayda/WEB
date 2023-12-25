const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const swapButton = document.getElementById("button");

function swapInputs(input1, input2) {
  // Отримати поточний вміст інпутів
  const input1Value = input1.value;
  const input2Value = input2.value;

  // Обміняти вміст інпутів
  input1.value = input2Value;
  input2.value = input1Value;
}

swapButton.addEventListener("click", () => {
    swapInputs(input1, input2);
  });
