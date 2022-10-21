// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<BEM<"btn", ["price"], []>, "btn__price">>,
  Expect<
    Equal<
      BEM<"btn", ["price"], ["warning", "success"]>,
      "btn__price--warning" | "btn__price--success"
    >
  >,
  Expect<
    Equal<
      BEM<"btn", [], ["small", "medium", "large"]>,
      "btn--small" | "btn--medium" | "btn--large"
    >
  >
];

// ============= Your Code Here =============

type Array2Union<T extends string[]> = T extends Array<infer TT> ? TT : T;
type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = E extends []
  ? M extends []
    ? `${B}`
    : `${B}--${Array2Union<M>}`
  : M extends []
  ? `${B}__${Array2Union<E>}`
  : `${B}__${Array2Union<E>}--${Array2Union<M>}`;

type a = BEM<"btn", [], ["small", "medium", "large"]>;
