// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
  Expect<Equal<Last<[() => 123, { a: string }, false]>, false>>,
  Expect<Equal<Last<[() => 123, { a: string }, true]>, true>>
];

// ============= Your Code Here =============
type Last<T extends any[]> = T extends [infer First, ...infer Rest]
  ? Rest["length"] extends 1
    ? Rest extends [infer Last]
      ? Last
      : never
    : Last<Rest>
  : never;
