const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const keys = <T>(obj: T): (keyof T)[] => {
  return Object.keys(obj) as (keyof T)[];
};

keys(obj).forEach((key) => {
  return obj[key];
});

export {};
