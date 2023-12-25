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
