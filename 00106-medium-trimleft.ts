// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<TrimLeft<"str">, "str">>,
  Expect<Equal<TrimLeft<" str">, "str">>,
  Expect<Equal<TrimLeft<"     str">, "str">>,
  Expect<Equal<TrimLeft<"     str     ">, "str     ">>,
  Expect<Equal<TrimLeft<"   \n\t foo bar ">, "foo bar ">>,
  Expect<Equal<TrimLeft<"">, "">>,
  Expect<Equal<TrimLeft<" \n\t">, "">>
];

// ============= Your Code Here =============
type TrimLeft<S extends string> = S extends `${infer first}${infer Rest}`
  ? first extends ` ` | `\n` | `\t`
    ? TrimLeft<Rest>
    : S
  : S;
type a = TrimLeft<"   adfad">;
type b = TrimLeft<"  \n\t foo bar ">;
