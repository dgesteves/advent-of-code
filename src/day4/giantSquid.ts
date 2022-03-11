import { cardsInput } from './inputs';
import {
  CardSize,
  ChallengePart,
  Columns,
  ICard,
  IsBingo,
  MarkedNumbers,
  Numbers,
  NumberToPosition,
  Position,
  Rows,
} from './types';
import part1 from './part1';
import part2 from './part2';

export class Card implements ICard {
  private cardSize: CardSize;
  private markedNumbers: MarkedNumbers;
  private readonly numberToPosition: NumberToPosition;
  public numbers: Numbers;
  public isBingo: IsBingo;
  private readonly rows: Rows;
  private readonly columns: Columns;

  constructor(numbers: Numbers, cardSize: CardSize) {
    this.cardSize = cardSize;
    this.numbers = numbers;
    this.numberToPosition = new Map<number, Position>();
    this.rows = Array(this.cardSize).fill(0);
    this.columns = Array(this.cardSize).fill(0);
    this.isBingo = false;
    this.markedNumbers = new Set<number>();

    for (let i = 0; i < numbers.length; i++) {
      const number = this.numbers[i];
      this.numberToPosition.set(number, { row: Math.floor(i / this.cardSize), column: i % this.cardSize });
    }
  }

  set size(size: CardSize) {
    this.cardSize = size;
  }

  get size() {
    return this.cardSize;
  }

  set cardNumbers(numbers: Numbers) {
    this.numbers = numbers;
  }

  get cardNumbers() {
    return this.numbers;
  }

  addMarkedNumber(number: number) {
    const position = this.numberToPosition.get(number);
    if (!position) return;

    this.markedNumbers.add(number);
    this.rows[position.row]++;
    this.columns[position.column]++;

    if (this.rows[position.row] === this.cardSize || this.columns[position.column] === this.cardSize) {
      this.isBingo = true;
    }
  }

  unmarkedNumbers() {
    return this.numbers.filter((number: number) => !this.markedNumbers.has(number));
  }
}

export default function giantSquid(): { part1: ChallengePart; part2: ChallengePart } {
  return { part1: part1(cardsInput), part2: part2(cardsInput) };
}
