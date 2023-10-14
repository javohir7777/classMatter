class Person {
  static defaultAge = 30;
  constructor(public firstName: string, public lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  static createFromFullName(fullName: string) {
    const [firstName, lastName] = fullName.split(" ");
    return new Person(firstName, lastName);
  }
}

let p1 = Person.createFromFullName("Abdulaziz Toshpulatov");

console.log(p1);

console.log(Person.defaultAge);
