// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>
];

// ============= Your Code Here =============
type Chunk<
  T extends any[],
  S extends number,
  R extends Array<any> = []
> = T extends [infer F, ...infer Rest]
  ? R extends [...infer Whatever, infer Cur extends R[number]]
    ? Cur["length"] extends S
      ? Chunk<Rest, S, [...Whatever, Cur, [F]]>
      : Chunk<Rest, S, [...Whatever, [...Cur, F]]>
    : Chunk<Rest, S, [F]>
  : R;

type a = Chunk<[1, 2, 3], 1>;
