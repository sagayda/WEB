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