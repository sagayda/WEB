// У звітному HTML-документі створити html-розміту,
// яка складається з наступних елементів : текст,
// маркирований список.

// Результат:

// Натиснувши кнопку Подвоїти, збільшити значення
// у кожному елементі списку у 2 рази. Повторний натиск
// на кнопці Подвоїти також збільшить значення у
// кожному елементі списку у 2 рази

const doubleButton = document.getElementById("button");
const list = document.getElementById("list");

function double() {
  for (const li of list.children) {
    var number = parseInt(li.textContent);
    number *= 2;
    li.textContent = number;
  }

}

doubleButton.addEventListener("click", double);
