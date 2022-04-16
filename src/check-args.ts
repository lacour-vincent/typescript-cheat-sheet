type CheckWrongArgs<Arg> = Arg extends any[] ? "Bad args." : Arg;

const deepEquals = <Arg>(
  a: CheckWrongArgs<Arg>,
  b: CheckWrongArgs<Arg>
): boolean => {
  if (Array.isArray(a) || Array.isArray(b)) throw new Error("Bad args");
  return a === b;
};

const a = deepEquals("a", "b");
const b = deepEquals({}, {});

export {};
