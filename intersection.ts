// interface Person {
//   name: string;
//   age: number;
// }

// interface Address {
//   city: string;
//   zipCode: string;
// }

type Person = {
  name: string;
  age: number;
};

type Address = {
  city: string;
  zipCode: string;
};

// interface PersonWithAddress = Person & Address;
type PersonWithAddress = Person & Address;

let p1: PersonWithAddress = {
  name: "John",
  age: 40,
  city: "Tashkent",
  zipCode: "12341",
};
