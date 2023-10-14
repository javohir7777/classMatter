interface Pair<T1, T2> {
  key: T1;
  value: T2;
}

function createKeyValuePair<T1, T2>(key: T1, value: T2): Pair<T1, T2> {
  return {
    key,
    value,
  };
}

// let res1 = createKeyValuePair(10, "a");
// let res1 = createKeyValuePair<string, number>("a", 10);
let res1 = createKeyValuePair("a", 10);

console.log(res1);
