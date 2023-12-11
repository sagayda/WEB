const medicines = [
  { name: "Noshpa", price: 170 },
  { name: "Analgin", price: 55 },
  { name: "Quanil", price: 310 },
  { name: "Alphacholine", price: 390 },
];

const button = document.querySelector("#button");

function main() {
  addDiscount();
  addId();

  console.log(medicines);
}

function addDiscount() {
  medicines.map((medicine) => {
    if (medicine.price >= 300) {
      medicine.price = medicine.price - (medicine.price * 0.3);
    }
  });
}

function addId() {
  medicines.map((medicine) => {
    medicine.id = Math.floor(Math.random() * 100000);
  });
}