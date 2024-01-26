//Напиши скрипт управління формою логіна.

// 1. Обробка відправлення форми form.login-
// form повинна відбуватися за подією submit.
// 2. Під час відправлення форми сторінка не повинна
// перезавантажуватися.
// 3. Якщо при сабміті у формі є незаповнені поля,
// виводь alert з попередженням про те, що All
// form fields must be filled in. Не
// додавай на інпути атрибут required, валідація має
// відбуватися саме через JS.
// 4. Якщо користувач заповнив усі поля і відправив
// форму, збери значення полів в обєкт з двома
// властивостями, де ключ — це імя інпутів, а
// значення — відповідні значення цих інпутів,
// очищені від пробілів по краях. Для доступу до
// елементів форми використовуй
// властивість elements.
// 5. При сабміті форми виведи обєкт із введеними
// даними в консоль і очисти значення полів форми
// методом reset.

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  // Заглушити перевантаження сторінки
  event.preventDefault();

  const inputs = loginForm.querySelectorAll("input");
  const filledInputs = [];
  for (const input of inputs) {
    if (input.value !== "") {
      filledInputs.push(input);
    }
  }
  if (filledInputs.length !== inputs.length) {
    alert("All form fields must be filled in");
    return;
  }

  const data = {};
  for (const input of filledInputs) {
    data[input.name] = input.value.trim();
  }

  console.log(data);

  loginForm.reset();
});