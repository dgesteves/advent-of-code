export type CardSize = number;
export type TCard = number[];
export type Cards = TCard[];
export type Numbers = number[];
export type NumberToPosition = Map<number, { row: number; column: number }>;
export type Position = { row: number; column: number };
export type Rows = number[];
export type Columns = number[];
export type IsBingo = boolean;
export type MarkedNumbers = Set<number>;
export type Total = number;
export type ChallengePart = number;

export interface ICard {
  addMarkedNumber: (number: number) => void;
  unmarkedNumbers: () => number[];
}
