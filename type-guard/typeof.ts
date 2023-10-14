function printLength(value: string | number) {
  if (typeof value === "string") {
    console.log(`Length of string: ${value.length}`);
  } else if (typeof value === "number") {
    console.log(`Length of number: ${value.toString().length}`);
  }
}

printLength("Hello, TypeScript!"); // Output: Length of string: 19
printLength(42); // Output: Length of number: 42
// printLength({});
