// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<
    Equal<AnyOf<[1, "test", true, [1], { name: "test" }, { 1: "test" }]>, true>
  >,
  Expect<Equal<AnyOf<[1, "", false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "test", false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], { name: "test" }]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], { 1: "test" }]>, true>>,
  Expect<
    Equal<AnyOf<[0, "", false, [], { name: "test" }, { 1: "test" }]>, true>
  >,
  Expect<Equal<AnyOf<[0, "", false, [], {}]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>
];

// ============= Your Code Here =============
type isFalsy<T> = Equal<T, 0> extends true
  ? true
  : Equal<T, ""> extends true
  ? true
  : Equal<T, []> extends true
  ? true
  : Equal<T, {}> extends true
  ? true
  : Equal<T, false> extends true
  ? true
  : false;

type isTruthy<T> = isFalsy<T> extends false ? true : false;

type AnyOf<T extends readonly any[]> = T extends [infer First, ...infer Rest]
  ? isTruthy<First> extends true
    ? true
    : AnyOf<Rest>
  : false;
type r = AnyOf<[0, "", false, [], {}]>;
