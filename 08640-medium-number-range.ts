// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";
type Result1 = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Result2 = 0 | 1 | 2;
type Result3 =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56
  | 57
  | 58
  | 59
  | 60
  | 61
  | 62
  | 63
  | 64
  | 65
  | 66
  | 67
  | 68
  | 69
  | 70
  | 71
  | 72
  | 73
  | 74
  | 75
  | 76
  | 77
  | 78
  | 79
  | 80
  | 81
  | 82
  | 83
  | 84
  | 85
  | 86
  | 87
  | 88
  | 89
  | 90
  | 91
  | 92
  | 93
  | 94
  | 95
  | 96
  | 97
  | 98
  | 99
  | 100
  | 101
  | 102
  | 103
  | 104
  | 105
  | 106
  | 107
  | 108
  | 109
  | 110
  | 111
  | 112
  | 113
  | 114
  | 115
  | 116
  | 117
  | 118
  | 119
  | 120
  | 121
  | 122
  | 123
  | 124
  | 125
  | 126
  | 127
  | 128
  | 129
  | 130
  | 131
  | 132
  | 133
  | 134
  | 135
  | 136
  | 137
  | 138
  | 139
  | 140;
type cases = [
  Expect<Equal<NumberRange<2, 9>, Result1>>,
  Expect<Equal<NumberRange<0, 2>, Result2>>,
  Expect<Equal<NumberRange<0, 140>, Result3>>
];

// ============= Your Code Here =============
type GreaterThan<
  T extends number,
  U extends number,
  Arr extends Array<1> = []
> = Arr["length"] extends T
  ? false
  : Arr["length"] extends U
  ? true
  : GreaterThan<T, U, [1, ...Arr]>;

type NumberRange<
  L extends number,
  H,
  Arr extends Array<number> = []
> = Arr["length"] extends H
  ? [...Arr, Arr["length"]]
  : NumberRange<L, H, [...Arr, Arr["length"]]>;
type ShiftBy<T, N extends number, R extends unknown[] = []> = T extends [
  infer F,
  ...infer Rest
]
  ? ShiftBy<Rest, N, [F, ...R]>
  : T;
type a = ShiftBy<[1, 2, 3, 4, 5], 3>;
