import { Cards, Total } from './types';
import { drawnNumbers } from './inputs';
import { Card } from './giantSquid';

export default function part2(_cards: Cards, draws = drawnNumbers): number {
  let lastWinningCard;
  let lastWinningNumber;
  const cards = _cards.map((numbers) => new Card(numbers, 5));

  for (const draw of draws) {
    let hasIncompleteCards = false;

    for (const card of cards) {
      if (!card.isBingo) {
        hasIncompleteCards = true;
        card.addMarkedNumber(draw);

        if (card.isBingo) {
          lastWinningCard = card;
          lastWinningNumber = draw;
        }
      }
    }
    if (!hasIncompleteCards) {
      break;
    }
  }

  if (lastWinningCard && lastWinningNumber) {
    const unmarkedNumbers = lastWinningCard.unmarkedNumbers();
    return unmarkedNumbers.reduce((total: Total, number: number) => total + number, 0) * lastWinningNumber;
  }

  return 0;
}
