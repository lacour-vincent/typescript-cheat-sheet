const fruits = {
  apple: 1,
  pear: "2",
  banana: true,
};

type Fruits = typeof fruits;

type Union = {
  [K in keyof Fruits]: {
    [K2 in K]: Fruits[K];
  };
}[keyof Fruits];
