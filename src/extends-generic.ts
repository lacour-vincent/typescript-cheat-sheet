export const getDeepValue = <
  T,
  FirstKey extends keyof T,
  SecondKey extends keyof T[FirstKey]
>(
  obj: T,
  firstKey: FirstKey,
  secondKey: SecondKey
): T[FirstKey][SecondKey] => {
  return obj[firstKey][secondKey];
};

const data = {
  foo: { a: true, b: 2 },
  bar: { c: "cool", d: [] },
};

const a = getDeepValue(data, "foo", "a");
const b = getDeepValue(data, "foo", "b");
const c = getDeepValue(data, "bar", "c");
const d = getDeepValue(data, "bar", "d");
