// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<TrimRight<"str">, "str">>,
  Expect<Equal<TrimRight<"str ">, "str">>,
  Expect<Equal<TrimRight<"str     ">, "str">>,
  Expect<Equal<TrimRight<"     str     ">, "     str">>,
  Expect<Equal<TrimRight<"   foo bar  \n\t ">, "   foo bar">>,
  Expect<Equal<TrimRight<"">, "">>,
  Expect<Equal<TrimRight<"\n\t ">, "">>
];

// ============= Your Code Here =============

type TrimLeft<S extends string> = S extends `${infer first}${infer Rest}`
  ? first extends ` ` | `\n` | `\t`
    ? TrimLeft<Rest>
    : S
  : S;

type Reverse<S extends string> = S extends `${infer F}${infer R}`
  ? `${Reverse<R>}${F}`
  : S;

type TrimRight<S extends string> = Reverse<TrimLeft<Reverse<S>>>;
