// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<ReplaceAll<"foobar", "bar", "foo">, "foofoo">>,
  Expect<Equal<ReplaceAll<"foobar", "bag", "foo">, "foobar">>,
  Expect<Equal<ReplaceAll<"foobarbar", "bar", "foo">, "foofoofoo">>,
  Expect<Equal<ReplaceAll<"t y p e s", " ", "">, "types">>,
  Expect<Equal<ReplaceAll<"foobarbar", "", "foo">, "foobarbar">>,
  Expect<Equal<ReplaceAll<"barfoo", "bar", "foo">, "foofoo">>,
  Expect<Equal<ReplaceAll<"foobarfoobar", "ob", "b">, "fobarfobar">>,
  Expect<Equal<ReplaceAll<"foboorfoboar", "bo", "b">, "foborfobar">>,
  Expect<Equal<ReplaceAll<"", "", "">, "">>
];

// ============= Your Code Here =============
// type ReplaceAll<S extends string, From extends string, To extends string> = any

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer First}${From extends "" ? never : From}${infer Last}`
  ? `${ReplaceAll<First, From, To>}${To}${ReplaceAll<Last, From, To>}`
  : S;

type a = ReplaceAll<"foobarfoobar", "ob", "b">;
