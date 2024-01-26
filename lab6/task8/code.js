const arr = ["apple", "banana", "mango"]

class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItems(item) {
    this.items.push(item);
  }
  removeItem(item) {
    this.items = this.items.filter((i) => i !== item);
  }
}

const storage = new Storage(arr);