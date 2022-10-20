// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>
];

// ============= Your Code Here =============

type CreateArray<
  T extends number,
  Arr extends Array<unknown> = []
> = Arr["length"] extends T ? Arr : CreateArray<T, ["", ...Arr]>;

type MinusOne<T extends number> = CreateArray<T> extends [
  infer First,
  ...infer Rest
]
  ? Rest["length"]
  : never;

type a = MinusOne<1101>;
