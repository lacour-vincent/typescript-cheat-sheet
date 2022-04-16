type ExistingType = { a: string; b: number };
const data: ExistingType = { a: "a", b: 1 };

type TypeOf = typeof data;
type KeyOf = keyof ExistingType;
type SubType = ExistingType["a"];
