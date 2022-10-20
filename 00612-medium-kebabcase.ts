// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<KebabCase<"FooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"fooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"foo-bar">, "foo-bar">>,
  Expect<Equal<KebabCase<"foo_bar">, "foo_bar">>,
  Expect<Equal<KebabCase<"Foo-Bar">, "foo--bar">>,
  Expect<Equal<KebabCase<"ABC">, "a-b-c">>,
  Expect<Equal<KebabCase<"-">, "-">>,
  Expect<Equal<KebabCase<"">, "">>,
  Expect<Equal<KebabCase<"😎">, "😎">>
];

// ============= Your Code Here =============
type UpperAlphabet =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

type MyLowercase<S extends string> = S extends UpperAlphabet
  ? `-${Lowercase<S>}`
  : S;

type IsFirstUpper<S extends string> = S extends `${UpperAlphabet}${infer Rest}`
  ? true
  : false;

type KebabCase<
  S extends string,
  Deep extends Array<1> = []
> = S extends `${infer First}${infer Rest}`
  ? `${Deep["length"] extends 0
      ? Lowercase<First>
      : MyLowercase<First>}${KebabCase<Rest, [1, ...Deep]>}`
  : S;
