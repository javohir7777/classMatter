function concatArray(arr1: number[], arr2: string[]): (number | string)[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];

let res = concatArray(arr1, arr2);

console.log(res);
