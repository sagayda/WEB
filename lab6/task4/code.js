const concerts = {
  Київ: new Date("2020-04-01"),
  Умань: new Date("2025-07-02"),
  Вінниця: new Date("2020-04-21"),
  Одеса: new Date("2025-03-15"),
  Хмельницький: new Date("2020-04-18"),
  Харків: new Date("2025-07-10"),
};

function findPassedConcerts() {
  var passedConcerts = Object.entries(concerts)
    .filter(([city, date]) => date > Date.now())
    .sort((a, b) => a[1] - b[1])
    .map((concert) => concert[0]);

  console.log(passedConcerts);
}