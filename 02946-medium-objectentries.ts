// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ["name", string]
  | ["age", number]
  | ["locations", string[] | null];

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ["key", undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ["key", undefined]>>
];

// ============= Your Code Here =============

// type MyRequire<T> = {
//   [K in keyof T]-?: T[K];
// };

// type _ObjectEntries<T, U = keyof T> = U extends keyof T ? [U, T[U]] : never;
// type ObjectEntries<T> = _ObjectEntries<MyRequire<T>>;
type a = ObjectEntries<{ key: undefined }>;

// your answers
type ObjectEntries<T, U = keyof T> = U extends keyof T
  ? [U, T[U] extends infer Rest | undefined ? Rest : T[U]]
  : never;
