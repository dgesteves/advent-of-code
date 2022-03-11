import part2 from './part2';

describe('part2 function', () => {
  const cards = [
    [22, 13, 17, 11, 0, 8, 2, 23, 4, 24, 21, 9, 14, 16, 7, 6, 10, 3, 18, 5, 1, 12, 20, 15, 19],
    [3, 15, 0, 2, 22, 9, 18, 13, 17, 5, 19, 8, 7, 25, 23, 20, 11, 10, 24, 4, 14, 21, 16, 12, 6],
    [14, 21, 17, 24, 4, 10, 16, 15, 9, 19, 18, 8, 23, 26, 20, 22, 11, 13, 6, 5, 2, 0, 12, 3, 7],
  ];

  const draws = [7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1];

  test('part1 function should return the correct amount of points is it has a wining card', () => {
    const points = part2(cards, draws);

    expect(points).toBe(4512);
  });

  test('part1 function should return 0 if there is no wining card wining card', () => {
    const newDraws = [1, 2, 3, 4, 5];

    const points = part2(cards, newDraws);

    expect(points).toBe(0);
  });
});
