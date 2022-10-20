// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<["a", "b", "c", "d"]>, ["a", "b", "c"]>>,
  Expect<Equal<Pop<[]>, []>>
];

// ============= Your Code Here =============

type Last<T extends any[]> = T extends [infer First, ...infer Rest]
  ? Rest["length"] extends 1
    ? Rest extends [infer Last]
      ? Last
      : never
    : Last<Rest>
  : never;

type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

type Pop<T extends any[], Result extends unknown[] = []> = T extends [
  infer First,
  ...infer Rest
]
  ? Rest["length"] extends 1
    ? Concat<Result, [First]>
    : Pop<Rest, Concat<Result, [First]>>
  : Result;
// or
// type Pop<T extends any[]> = T extends [...infer L, infer R] ? L : T;
