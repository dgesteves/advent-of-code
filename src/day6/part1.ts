import lanternFishes from './inputs';

export default function part1(): number {
  const queue = Array(9).fill(0);

  for (const lanternFish of lanternFishes) {
    queue[lanternFish]++;
  }

  for (let i = 0; i < 80; i++) {
    const current = queue.shift();
    queue.push(current);
    queue[6] += current;
  }

  return queue.reduce((total, value) => total + value, 0);
}
