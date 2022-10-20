// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Trim<"str">, "str">>,
  Expect<Equal<Trim<" str">, "str">>,
  Expect<Equal<Trim<"     str">, "str">>,
  Expect<Equal<Trim<"str   ">, "str">>,
  Expect<Equal<Trim<"     str     ">, "str">>,
  Expect<Equal<Trim<"   \n\t foo bar \t">, "foo bar">>,
  Expect<Equal<Trim<"">, "">>,
  Expect<Equal<Trim<" \n\t ">, "">>
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

type Trim<S extends string> = Reverse<TrimLeft<Reverse<TrimLeft<S>>>>;

/**
 * Better solution
 * type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}` ? TrimLeft<R> : S
 * type TrimRight<S extends string> = S extends `${infer R}${' ' | '\n' | '\t'}` ? TrimRight<R> : S
 * type Trim<S extends string> = TrimRight<TrimLeft<S>>
 */
