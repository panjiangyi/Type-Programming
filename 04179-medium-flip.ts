// ============= Test Cases =============
import type { Equal, Merge, Expect, NotEqual } from "./test-utils";

type cases = [
  Expect<Equal<{ a: "pi" }, Flip<{ pi: "a" }>>>,
  Expect<NotEqual<{ b: "pi" }, Flip<{ pi: "a" }>>>,
  Expect<Equal<{ 3.14: "pi"; true: "bool" }, Flip<{ pi: 3.14; bool: true }>>>,
  Expect<
    Equal<{ val2: "prop2"; val: "prop" }, Flip<{ prop: "val"; prop2: "val2" }>>
  >
];

// ============= Your Code Here =============
type Type2String<T> = T extends string | symbol | number
  ? T
  : T extends true
  ? "true"
  : T extends false
  ? "false"
  : never;

type Flip<T, U = keyof T> = {
  [K in U as K extends keyof T ? Type2String<T[K]> : never]: K;
};

type a = Flip<{ pi: 3.14; bool: true }>;
