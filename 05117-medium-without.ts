// ============= Test Cases =============
import type { Equal, InArray, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
];

// ============= Your Code Here =============
type Without<
  T extends Array<unknown>,
  U,
  R extends T[number][] = []
> = T extends [infer F, ...infer Rest]
  ? Without<Rest, U, [...R, ...(InArray<F, U> extends true ? [] : [F])]>
  : R;
