// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, "a"], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, "a", any], any>, 4>>
];

// ============= Your Code Here =============
type IndexOf<T extends any[], U, R extends 1[] = []> = T extends [
  infer F,
  ...infer Rest
]
  ? Equal<U, F> extends true
    ? R["length"]
    : IndexOf<Rest, U, [1, ...R]>
  : -1;
