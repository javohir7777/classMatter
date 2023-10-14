// const input = document.querySelector('input[type="text"]') as HTMLInputElement;
// const input = <HTMLInputElement>document.querySelector('input[type="text"]');

// console.log(input.value);

// let x: unknown = "hello";

// console.log((x as string).length);
// console.log((<string>x).length);

interface Student {
  name: string;
  age: number;
}

const student = {} as Student;

// (student as Student).name = "Rustam";
// (student as Student).age = 20;

// (<Student>student).name = "Rustam";
// (<Student>student).age = 20;

student.name = "Abdulaziz";
student.age = 12345;

console.log(student);
