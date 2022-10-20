// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(Promise.resolve(3))]);

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>
];

// ============= Your Code Here =============
// 我的答案
// declare function PromiseAll<T>(values: T): Promise<T>;

// 网上答案
declare function PromiseAll<T extends unknown[]>(
  value: readonly [...T]
): Promise<{ [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P] }>;

type a = typeof promiseAllTest1;
type b = typeof promiseAllTest2;
type c = typeof promiseAllTest3;
