abstract class Person {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public age: number
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  abstract isPuberty(): boolean;
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

// let p1 = new Person("100", "Abdulaziz", "Toshpulatov", 24);

class Student extends Person {
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    age: number,
    public university: string,
    public course: number
  ) {
    super(id, firstName, lastName, age);
    this.university = university;
    this.course = course;
  }
  isPuberty() {
    return this.age > 16;
    // return this.age > 16 ? "Yes" : "No";
  }
  getInfo() {
    return `Id si ${this.id} bo'lgan va yoshi ${
      this.age
    } da bo'lgan ${super.getFullName()} ${this.university} da ${
      this.course
    }-kursda o'qiydi`;
  }
}

let s1 = new Student("200", "Rustam", "Abbosov", 20, "TATU", 4);

console.log(s1);

console.log(s1.getInfo());
