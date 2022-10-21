// ============= Test Cases =============
import type { Equal, CreateArray, Expect } from "./test-utils";

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>
];

// ============= Your Code Here =============
type GreaterThan<
  T extends number,
  U extends number,
  Arr extends Array<1> = []
> = Arr["length"] extends T
  ? false
  : Arr["length"] extends U
  ? true
  : GreaterThan<T, U, [1, ...Arr]>;
