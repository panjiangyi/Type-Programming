// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
const spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
] as const;

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<"hello world">
];

// ============= Your Code Here =============
// type Rest<T extends any[]> = T extends [infer First, ...infer Rest]
//   ? Rest
//   : never;

// type Length<T extends readonly any[], Len extends number = 0> = T extends [
//   infer F,
//   ...infer R
// ]
//   ? R extends unknown[]
//     ? Length<R, Len>
//     : Len
//   : Len;

// type a = Length<typeof tesla>;

type Length<T extends readonly any[]> = T["length"];
