class Box<T> {
  private value: T;

  constructor(initialValue: T) {
    this.value = initialValue;
  }

  getValue() {
    return this.value;
  }

  setValue(newValue: T) {
    this.value = newValue;
  }
}

// let numberBox = new Box<number>(10);
let numberBox = new Box(10);
let stringBox = new Box("abc");
