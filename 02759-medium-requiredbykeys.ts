// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

interface User {
  name?: string;
  age?: number;
  address?: string;
}

interface UserRequiredName {
  name: string;
  age?: number;
  address?: string;
}

interface UserRequiredNameAndAge {
  name: string;
  age: number;
  address?: string;
}

type cases = [
  Expect<Equal<RequiredByKeys<User, "name">, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, "name" | "unknown">, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, "name" | "age">, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>
];

// ============= Your Code Here =============
type Merge<T> = {
  [K in keyof T]: T[K];
};

type RequiredByKeys<T, U = keyof T> = Merge<
  {
    [K in keyof T as K extends U ? never : K]: T[K];
  } & {
    [K in keyof T as K extends U ? K : never]-?: T[K];
  }
>;
