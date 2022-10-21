// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

const curried1 = Currying((a: string, b: number, c: boolean) => true);
const curried2 = Currying(
  (
    a: string,
    b: number,
    c: boolean,
    d: boolean,
    e: boolean,
    f: string,
    g: boolean
  ) => true
);

type cases = [
  Expect<
    Equal<typeof curried1, (a: string) => (b: number) => (c: boolean) => true>
  >,
  Expect<
    Equal<
      typeof curried2,
      (
        a: string
      ) => (
        b: number
      ) => (
        c: boolean
      ) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
    >
  >
];

// ============= Your Code Here =============
declare function Currying<T>(fn: T): CurryingType<T>;

type GetRestItem<T extends any[]> = T extends [infer F, ...infer Rest]
  ? Rest
  : never;

type CurryingType<T> = T extends (...args: infer Params) => infer Return
  ? Params["length"] extends 1
    ? (arg: Params[0]) => Return
    : (arg: Params[0]) => CurryingType<(...args: GetRestItem<Params>) => Return>
  : never;
