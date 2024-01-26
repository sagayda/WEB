// У звітному HTML-документі створити html-розміту,
// яка складається з наступних елементів : текст, блок
// (div), дві кнопки

// Результат:

// Кнопка Зменшити робить квадрат менше на 15
// пікселів.
// Повторний натиск на кнопці Зменшити   робить
// квадрат ще менше на 15 пікселів.
// Збільшити – робить квадрат більше на 15 пікселів.
// Повторний натиск на кнопці Зменшити   робить
// квадрат ще більше на 15 пікселів.

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

