function concatArray<T1, T2>(arr1: T1[], arr2: T2[]): (T1 | T2)[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];

// let res = concatArray<number, string>(arr1, arr2);
// let res = concatArray<number, boolean>([5, 0, 6], [true, false, false]);
// let res = concatArray([5, 0, 6], [true, false, false]);
let res = concatArray([5, "2", 6], [true, 0, false]);

console.log(res);
