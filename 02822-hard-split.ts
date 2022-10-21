// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Split<"Hi! How are you?", "z">, ["Hi! How are you?"]>>,
  Expect<Equal<Split<"Hi! How are you?", " ">, ["Hi!", "How", "are", "you?"]>>,
  Expect<
    Equal<
      Split<"Hi! How are you?", "">,
      [
        "H",
        "i",
        "!",
        " ",
        "H",
        "o",
        "w",
        " ",
        "a",
        "r",
        "e",
        " ",
        "y",
        "o",
        "u",
        "?"
      ]
    >
  >,
  Expect<Equal<Split<"", "">, []>>,
  Expect<Equal<Split<"", "z">, [""]>>,
  Expect<Equal<Split<string, "whatever">, string[]>>
];

// ============= Your Code Here =============
type SplitAll<S extends string> = S extends `${infer F}${infer R}`
  ? [F, ...SplitAll<R>]
  : [];
type Split<S extends string, SEP extends string> = SEP extends ""
  ? SplitAll<S>
  : S extends `${SEP}${infer R}`
  ? R extends ""
    ? never
    : Split<R, SEP>
  : S extends `${infer F}${SEP}${infer R}`
  ? [F, ...Split<R, SEP>]
  : S extends `${infer F}`
  ? [S]
  : string[];
