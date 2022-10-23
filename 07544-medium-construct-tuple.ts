// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<ConstructTuple<0>, []>>,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
  Expect<Equal<ConstructTuple<999>["length"], 999>>,
  // @ts-expect-error
  Expect<Equal<ConstructTuple<1000>["length"], 1000>>
];

// ============= Your Code Here =============
export type CreateArray<
  T extends number,
  Arr extends Array<unknown> = []
> = Arr["length"] extends T ? Arr : CreateArray<T, [unknown, ...Arr]>;

type ConstructTuple<L extends number> = CreateArray<L>;
