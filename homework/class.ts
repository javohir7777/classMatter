// // // // 1-misol
// // // // class Car {
// // // //   constructor(
// // // //     public company: string,
// // // //     public modul: string,
// // // //     private year: number,
// // // //     private fuelType: string
// // // //   ) {
// // // //     this.company = company;
// // // //     this.company = company;
// // // //     this.year = year;
// // // //     this.fuelType = fuelType;
// // // //   }
// // // //   age() {
// // // //     return `Kompaniya ${this.year} shu sanada ochildi`;
// // // //   }
// // // //   getInfo() {
// // // //     return `${this.company} kompaniyasi hozirgi kunda eng mashhur kompaniya hisoblanadi.
// // // //     ${this.modul} da hamma qulayliklar mavjud. Hozirgi kunda atrof muhit juda ham rasvo bulmoqda, shuni oldini olish maqasida ${this.company} ${this.fuelType} yuradigan mashinalar ishlab chiqarmoqda.`;
// // // //   }
// // // // }
// // // // const newCar = new Car("Tesla", "Model X", 2003, "Electric car");
// // // // console.log(newCar);
// // // // console.log(newCar.age());
// // // // console.log(newCar.getInfo());

// // // // 2-misol
// // // class Products {
// // //   constructor(
// // //     public name: string,
// // //     public price: number,
// // //     private quantity: number
// // //   ) {
// // //     this.name = name;
// // //     this.price = price;
// // //     this.quantity = quantity;
// // //   }
// // //   totalPrice() {
// // //     return `${this.price} - $`;
// // //   }
// // //   add(quantity: number) {
// // //     return (this.quantity = quantity);
// // //   }
// // //   sell(quantity: number) {
// // //     return `${this.name}ni narxi ${this.price}-$ edi. Soni ${this.quantity} shuncha edi. Sotigandan keyin ${quantity}`;
// // //   }
// // // }
// // // const newProduct = new Products("Olma", 100, 20);
// // // console.log(newProduct);
// // // console.log(newProduct.totalPrice());
// // // console.log(newProduct.add(10));
// // // console.log(newProduct.sell(5));

// // // // 3-misol
// // // class TodoList {
// // //   private todos: { id: number; name: string }[] = [];
// // //   addTask(name: string): void {
// // //     const newName = { id: this.todos.length + 1, name };
// // //     this.todos.push(newName);
// // //   }
// // //   deleteTask(id: number): void {
// // //     this.todos = this.todos.filter((todo) => todo.id !== id);
// // //   }
// // //   editTask(id: number, newName: string): void {
// // //     const todosEdit = this.todos.find((todo) => todo.id === id);
// // //     if (todosEdit) {
// // //       todosEdit.name = newName;
// // //     }
// // //   }
// // //   getTask(id: number): { id: number; name: string } | undefined {
// // //     return this.todos.find((todo) => todo.id === id);
// // //   }
// // //   getTasks(): { id: number; name: string }[] {
// // //     return this.todos;
// // //   }
// // // }

// // // const CRUD = new TodoList();
// // // CRUD.addTask("Javohir");
// // // CRUD.addTask("Jamshid");
// // // CRUD.addTask("Javlon");
// // // CRUD.deleteTask(2);
// // // CRUD.editTask(1, "Jahongir");
// // // console.log(CRUD.getTask(1));
// // // console.log(CRUD.getTasks());

// // // 4-misol
// // class Employee {
// //   firstName: string;
// //   lastName: string;
// //   role: string;
// //   constructor(firstName: string, lastName: string, role: string) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.role = role;
// //   }
// //   introduce(): void {
// //     console.log(`${this.firstName} ${this.lastName} ${this.role}`);
// //   }
// // }
// // class Manager extends Employee {
// //   teamSize: string;
// //   constructor(
// //     firstName: string,
// //     lastName: string,
// //     role: string,
// //     teamSize: string
// //   ) {
// //     super(firstName, lastName, role);
// //     this.teamSize = teamSize;
// //   }
// //   introduce(): void {
// //     console.log(`${this.firstName} ${this.teamSize}`);
// //   }
// // }
// // class Developer extends Employee {
// //   programmingLanguage: string;
// //   constructor(
// //     firstName: string,
// //     lastName: string,
// //     role: string,
// //     programmingLanguage: string
// //   ) {
// //     super(firstName, lastName, role);
// //     this.programmingLanguage = programmingLanguage;
// //   }
// //   introduce(): void {
// //     console.log(
// //       `Assalomu alaykum men ${this.firstName} hozirda ${this.programmingLanguage} dasturchiman`
// //     );
// //   }
// // }
// // const employee = new Employee("Javohir", "Jumayev", "Engener");
// // employee.introduce();

// // const manager = new Manager("Jahongir", "Jumayev", "Manager", "Senior");
// // manager.introduce();
// // const developer = new Developer("Javohir", "Jumayev", "Engener", "JavaScript");
// // developer.introduce();

// // // 5-misol
// // interface Person {
// //   name: string;
// //   age: number;
// // }
// // interface Address {
// //   street: string;
// //   city: string;
// //   zipCode: number;
// // }
// // interface Email {
// //   Email: string;
// // }
// // interface Phone {
// //   phoneNumber: number;
// // }

// // type AllInterface = Person & Address & Email & Phone;

// // const allInterface: AllInterface = {
// //   name: "Javohir",
// //   age: 23,
// //   street: "Bakhor",
// //   city: "Karshi",
// //   zipCode: 180100,
// //   Email: "javohir@gmail.com",
// //   phoneNumber: 996786762,
// // };
// // console.log(allInterface);

// // 6-misol
// interface Square {
//   sideLength: number;
// }
// interface Circle {
//   radius: number;
// }

// function calculateArea(shape: Square | Circle): number {
//   if ("sideLength" in shape) {
//     return shape.sideLength ** 2;
//   } else {
//     return shape.radius * 2;
//   }
// }
// function calculatePerimetr(shape: Circle | Square): number {
//   if ("radius" in shape) {
//     return shape.radius * 3;
//   } else {
//     return shape.sideLength * 3;
//   }
// }

// const square: Square = { sideLength: 8 };
// const circle: Circle = { radius: 4 };

// console.log(calculateArea(square));
// console.log(calculatePerimetr(circle));

// 7-misol
// const getArrayLength = <T>(arr: T[]) => {
//   return arr.length;
// };
// let arr1 = getArrayLength([1, 2, 3]);
// let arr2 = getArrayLength(["olma", "olcha"]);
// console.log("arr1 : ", arr1);
// console.log("arr2 : ", arr2);

// 8-misol
// const reverseArray = <T>(arr: T[]) => {
//   return arr.reverse();
// };
// let arr1 = reverseArray([1, 2, 3]);
// let arr2 = reverseArray(["olma", "olcha", "zardoli", "shaftoli"]);
// console.log("arr1 : ", arr1);
// console.log("arr2 : ", arr2);

// 9-misol
const mergeObjects = <T1, T2>(obj1: T1, obj2: T2) => {
  return { ...obj1, ...obj2 };
};
let objss1 = { ism: "Alisher" };
let objss2 = { familya: "Shodmonovich" };
let mergeObject = mergeObjects(objss1, objss2);
console.log(mergeObject);
