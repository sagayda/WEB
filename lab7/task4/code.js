const increaseButton = document.getElementById("button1");
const decreaseButton = document.getElementById("button2");
const box = document.getElementById("box");

function increase() {
    const width = box.offsetWidth;
    const height = box.offsetHeight;
  
    box.style.width = `${width + 15}px`;
    box.style.height = `${height + 15}px`;
}

function decrease() {
  const width = box.offsetWidth;
  const height = box.offsetHeight;


  box.style.width = `${width - 15}px`;
  box.style.height = `${height - 15}px`;
}

increaseButton.addEventListener("click", increase);
decreaseButton.addEventListener("click", decrease);

