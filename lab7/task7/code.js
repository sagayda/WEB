// TML містить список категорій ul#categories.

// Напиши скрипт, який:
// 1. Порахує і виведе в консоль кількість категорій
// в ul#categories, тобто елементів li.item.
// 2. Для кожного элемента li.item у
// списку ul#categories, знайде і виведе в консоль
// текст заголовку елемента (тегу h2) і кількість
// елементів в категорії (усіх li, вкладених в
// нього).
// Для виконання цього завдання потрібно використати
// метод forEach() і властивості навігації по DOM.

const categories = document.querySelector("#categories");

function logCategories() {

  const numberOfCategories = categories.querySelectorAll(".item").length;
  console.log("Categories count:", numberOfCategories);

  categories.querySelectorAll(".item").forEach((item) => {
    const headerText = item.querySelector("h2").textContent;

    const numberOfItems = item.querySelectorAll("li").length;

    console.log(`Category: ${headerText}. Category elements count: ${numberOfItems}`);
  });
}
