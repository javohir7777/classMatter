class Person {
  // public id: string;
  // public firstName: string;
  // public lastName: string;
  // public age: number;

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
}

let p1 = new Person("100", "Abdulaziz", "Toshpulatov", 24);

p1.firstName = "Abdulazizbek";
p1.lastName = "Toshpo'latov";
// p1.age = 30;
// p1.id = "200";

console.log(p1);
