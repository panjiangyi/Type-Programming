// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<["a", "b", "c", "d"]>, ["b", "c", "d"]>>,
  Expect<Equal<Shift<["a"]>, []>>
];

// ============= Your Code Here =============
type Shift<T> = T extends [infer F, ...infer Rest] ? Rest : [];
