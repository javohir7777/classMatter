class Person {
  constructor(
    private id: string,
    public firstName: string,
    public lastName: string,
    protected age: number
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
  getId() {
    return this.id;
  }
}

let p1 = new Person("100", "Abdulaziz", "Toshpulatov", 24);

console.log(p1);

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
  getInfo() {
    return `Id si ${this.getId()} bo'lgan va yoshi ${
      this.age
    } da bo'lgan ${super.getFullName()} ${this.university} da ${
      this.course
    }-kursda o'qiydi`;
  }
}

let s1 = new Student("200", "Rustam", "Abbosov", 20, "TATU", 4);

console.log(s1);

console.log(s1.getInfo());
