// interface Person {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

// type Person = { firstName: string } | { lastName: string } | { age: number };

class Student implements Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public email: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }
}
