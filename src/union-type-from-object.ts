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

const apple: Union = { apple: 1 };
const pear: Union = { pear: "2" };
const banana: Union = { banana: true };
