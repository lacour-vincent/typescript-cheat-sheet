# TypeScript Cheat Sheet

## Primitives

```typescript
const a: number = 1;
const b: string = "Hello World";
const c: boolean = true;
const d: null = null;
const e: undefined = undefined;
```

## Array

```typescript
const a: Array<number> = [1, 2, 3];
const b: number[] = [1, 2, 3];
const b: Array<string> = ["a", "b", "c"];
```

## Object Literal

```typescript
const a: { a: number; b: string } = { a: 1, b: "Hello World" };
const b: { [key in string]: number } = { a: 1, b: 2 };
const c: Record<string, number> = { a: 1, b: 2 };
```

## Function

```typescript
const a: (a: number) => number = (a: number) => a;
```

## Tuple

```typescript
const a: [a: number, b: string] = [1, "b"];
```

## Enums

```typescript
enum Direction {
  UP,
  RIGHT,
  DOWN,
  LEFT,
}

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```

## Class

```typescript
class ABC {
  constructor(public a: string) {
    this.a = a;
  }
}
```

## Types

### Interface

```typescript
interface Type {
  a: number;
  b: string;
}

type A = Partial<Type>;
type B = Readonly<Type>;
type C = Pick<Type, "a">;
type D = Omit<Type, "a">;
```

### Optional Type

```typescript
interface OptionalType {
  a?: number;
  b?: string;
}

type E = Required<OptionalType>;
```

### Union Type

```typescript
type UnionType = "a" | "b" | "c";

type F = Exclude<UnionType, "a">;
type G = Extract<UnionType, "a">;
```

### NonNullable Type

```typescript
type NullableType = string | null | undefined;

type H = NonNullable<NullableType>;
```

### Function Type

```typescript
type FunctionType = (a: number, b: string) => number;

type I = Parameters<FunctionType>;
type J = ReturnType<FunctionType>;
```

### Types from data

```typescript
type ExistingType = { a: string; b: number };
const data: ExistingType = { a: "a", b: 1 };

type TypeOf = typeof data;
type KeyOf = keyof ExistingType;
type SubType = ExistingType["a"];
```

### String Manipulation

```typescript
type StringType = "Hello World";

type K = Uppercase<StringType>;
type L = Lowercase<StringType>;
type M = Capitalize<StringType>;
type N = Uncapitalize<StringType>;
```

### Template Union

```typescript
type LeftType = "a" | "b" | "c";
type RightType = "d" | "e";

type O = `${LeftType}-${RightType}`;
```

## Control Flow

### Generics

```typescript
interface TypeGeneric<T> {
  a: T;
}

const a: TypeGeneric<number> = { a: 1 };
const b: TypeGeneric<string> = { a: "a" };

function FunctionGeneric<T>(arg: T): T {
  return arg;
}

const ArrowFunctionGeneric = <T>(args: T): T => args;

class ClassGeneric<T> {
  constructor(public a: T) {
    this.a = a;
  }
}
```

### Type Guards

```typescript
type A = { a: string };
type B = { b: string };
type UnionType = A | B;

const isA = (obj: A | B): obj is A => {
  return (obj as A).a !== undefined;
};
```

### Assertion Functions

```typescript
type A = { a: string };
type B = { b: string };
type UnionType = A | B;

function assertIsA(obj: A | B): asserts obj is A {
  if ((obj as A).a === undefined) throw new Error("obj is not A");
}
```
