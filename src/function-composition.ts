function compose<Input, FirstArg>(
  func: (input: Input) => FirstArg
): (input: Input) => FirstArg;

function compose<Input, FirstArg, SecondArg>(
  func: (input: Input) => FirstArg,
  func2: (input: FirstArg) => SecondArg
): (input: Input) => SecondArg;

function compose<Input, FirstArg, SecondArg, ThirdArg>(
  func: (input: Input) => FirstArg,
  func2: (input: FirstArg) => SecondArg,
  func3: (input: SecondArg) => ThirdArg
): (input: Input) => ThirdArg;

function compose(...args: any[]) {
  return {} as any;
}

const addOne = (a: number): number => a + 1;
const numToString = (a: number): string => a.toString();
const stringToNum = (a: string): number => Number.parseFloat(a);

const one = compose(addOne);
const two = compose(addOne, numToString);
const three = compose(addOne, numToString, stringToNum);

export {};
