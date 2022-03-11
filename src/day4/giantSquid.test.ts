import { Card } from './giantSquid';

describe('card class', () => {
  const cardInput = [22, 13, 17, 11, 0, 8, 2, 23, 4, 24, 21, 9, 14, 16, 7, 6, 10, 3, 18, 5, 1, 12, 20, 15, 19];
  const size = 5;
  const card = new Card(cardInput, size);

  test('Card numbers property should be set as pass in the constructor since is public', () => {
    expect(card.numbers).toBe(cardInput);
  });

  test('Card getter cardNumbers function should return numbers property', () => {
    expect(card.cardNumbers).toBe(cardInput);
  });

  test('Card setter cardNumbers function should return numbers property changed', () => {
    expect(card.cardNumbers).toBe(cardInput);
    const newNumbers = [3, 15, 0, 2, 22, 9, 18, 13, 17, 5, 19, 8, 7, 25, 23, 20, 11, 10, 24, 4, 14, 21, 16, 12, 6];

    card.cardNumbers = newNumbers;
    expect(card.numbers).toBe(newNumbers);
  });

  test('Card getter size function should return cardSize property', () => {
    expect(card.size).toBe(size);
  });

  test('Card setter size function should return numbers property changed', () => {
    expect(card.size).toBe(size);
    const newSize = 8;

    card.size = newSize;
    expect(card.size).toBe(newSize);
  });

  test('Card isBingo property should be set to false', () => {
    expect(card.isBingo).toBe(false);
  });

  test('Card isBingo property should be true if card have horizontal line is fully marked', () => {
    expect(card.isBingo).toBe(false);
    const horizontalLineMarked = [22, 13, 17, 11, 0];

    for (const number of horizontalLineMarked) {
      card.addMarkedNumber(number);
    }

    expect(card.isBingo).toBe(true);
  });

  test('Card isBingo property should be true if card have vertical line is fully marked', () => {
    expect(card.isBingo).toBe(false);
    const verticalLineMarked = [22, 8, 21, 6, 1];

    for (const number of verticalLineMarked) {
      card.addMarkedNumber(number);
    }

    expect(card.isBingo).toBe(true);
  });

  test('Card unmarkedNumbers method should return card non marked numbers', () => {
    const draws = [13, 17, 11, 9, 14, 16, 20, 15, 19];
    const expectedNonMarkedNumbers = [22, 0, 8, 2, 23, 4, 24, 21, 7, 6, 10, 3, 18, 5, 1, 12];

    for (const draw of draws) {
      card.addMarkedNumber(draw);
    }

    const unmarkedNumbers = card.unmarkedNumbers();

    expect(unmarkedNumbers).toEqual(expectedNonMarkedNumbers);
  });

  test('Card unmarkedNumbers method should return empty array when all card is marked and is bingo should be true', () => {
    for (const draw of cardInput) {
      card.addMarkedNumber(draw);
    }

    const unmarkedNumbers = card.unmarkedNumbers();

    expect(unmarkedNumbers).toEqual([]);
    expect(card.isBingo).toBe(true);
  });
});
