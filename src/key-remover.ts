export const makeKeyRemover =
  <Key extends string>(keys: Key[]) =>
  <Obj>(obj: Obj): Omit<Obj, Key> => {
    return {} as any;
  };

const remover = makeKeyRemover(["a", "b"]);

const data = remover({ a: 1, b: 2, c: 3 });

export {};
