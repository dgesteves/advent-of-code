import { Cards, Total } from './types';
import { drawnNumbers } from './inputs';
import { Card } from './giantSquid';

export default function part1(_cards: Cards, draws = drawnNumbers): number {
  let winingCard;
  const actualDraws: number[] = [];
  const cards = _cards.map((numbers) => new Card(numbers, 5));

  for (const draw of draws) {
    let gameFinished = false;
    actualDraws.push(draw);

    for (const card of cards) {
      card.addMarkedNumber(draw);

      if (card.isBingo) {
        gameFinished = true;
        winingCard = card;
        break;
      }
    }
    if (gameFinished) {
      break;
    }
  }

  if (winingCard) {
    const unmarkedNumbers = winingCard.unmarkedNumbers();
    const lastActualDraw = parseInt(actualDraws.slice(-1).join());
    return unmarkedNumbers.reduce((total: Total, number: number) => total + number, 0) * lastActualDraw;
  }

  return 0;
}
