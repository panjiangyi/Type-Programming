// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number;
        b: number;
        c: boolean;
      }
    >
  >
];

// ============= Your Code Here =============
type Merge<F, S> = {
  [Prop in keyof F | keyof S]: Prop extends keyof S
    ? S[Prop]
    : Prop extends keyof F
    ? F[Prop]
    : never;
};
type a = Merge<Foo, Bar>;
