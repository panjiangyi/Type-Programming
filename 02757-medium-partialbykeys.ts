// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

interface User {
  name: string;
  age: number;
  address: string;
}

interface UserPartialName {
  name?: string;
  age: number;
  address: string;
}

interface UserPartialNameAndAge {
  name?: string;
  age?: number;
  address: string;
}

type cases = [
  Expect<Equal<PartialByKeys<User, "name">, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, "name" | "unknown">, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, "name" | "age">, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>
];

// ============= Your Code Here =============
type Merge<T> = {
  [K in keyof T]: T[K];
};
type PartialByKeys<T, U = keyof T> = Merge<
  {
    [K in keyof T as K extends U ? never : K]: T[K];
  } & {
    [K in keyof T as K extends U ? K : never]?: T[K];
  }
>;

type a = PartialByKeys<User>;
