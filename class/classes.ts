class Person {
  readonly id: string;
  firstName: string;
  lastName: string;
  // age: number;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    readonly age?: number
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

let p1 = new Person("100", "Abdulaziz", "Toshpulatov", 24);
let p2 = new Person("300", "Rustam", "Abbosov");

// p1.id = "200";
// p1.age = 40;

// console.log(p1);

// console.log(p1.id);
// console.log(p1.firstName);
// console.log(p1.lastName);
// console.log(p1.age);

// console.log(p1.getFullName());

console.log(p2);

console.log(p2.id);
console.log(p2.firstName);
console.log(p2.lastName);
console.log(p2.age);

console.log(p2.getFullName());
