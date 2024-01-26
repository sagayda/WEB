// Напиши скрипт створення й очищення колекції
// елементів з наступним функціоналом.
// Є input, у який користувач вводить бажану кількість
// елементів. Після натискання на кнопку Create має
// рендеритися (додаватися в DOM) колекція з
// відповідною кількістю елементів і очищатися значення
// в інпуті. При повторному натисканні на
// кнопку Create поверх старої колекції має рендеритись
// нова. Після натискання на кнопку Destroy колекція
// елементів має очищатися.

// Після натискання користувачем на
// кнопку Create треба провалідувати значення в input,
// воно має бути в межах від 1 до 100 включно. Тільки
// якщо воно задоволяє умову, мають додаватися
// нові div елементи в DOM.
// Для рендеру елементів на сторінці створи
// функцію createBoxes(amount), яка приймає один
// параметр — число, що зберігає кількість елементів для
// рендеру. Функція має створювати
// стільки div елементів, скільки вказано
// в параметрі amount і додавати їх у DOM дочірніми
// елементами для div#boxes.
// 1. Розміри першого div; елемента мають бути
// 30px на 30px.
// 2. Кожен наступний елемент повинен бути ширшим

// Всі
// непарні та
// парні
// номери за
// списком
// групи

// і вищим від попереднього на 10px.
// 3. Усі елементи повинні мати випадковий колір
// фону. Використовуй готову
// функцію getRandomHexColor() для отримання
// випадкового кольору.
// function getRandomHexColor() {
// return `#${Math.floor(Math.random() *
// 16777215)
// .toString(16)
// .padStart(6, 0)}`;
// }

// Для очищення колекції після натискання на
// кнопку Destroy створи функцію destroyBoxes(), яка
// очищає вміст div#boxes, у такий спосіб видаляючи всі
// створені елементи.

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
