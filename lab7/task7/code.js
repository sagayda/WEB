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
