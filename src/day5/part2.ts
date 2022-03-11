import segments from './inputs';
import { Point, SegmentsMap } from './types';

export default function part2(): number {
  const segmentsMap: SegmentsMap = new Map();
  let count = 0;

  function addPoint(key: string) {
    let content: number | undefined = segmentsMap.get(key);

    if (!content) {
      content = 0;
    }

    content++;
    if (content == 2) {
      count++;
    }
    segmentsMap.set(key, content);
  }

  for (const segment of segments) {
    const isHorizontal: boolean = segment.from.y === segment.to.y;
    const isVertical: boolean = segment.from.x === segment.to.x;
    const currentPoint: Point = { x: segment.from.x, y: segment.from.y };

    while (currentPoint.x !== segment.to.x || currentPoint.y !== segment.to.y) {
      addPoint([currentPoint.x, currentPoint.y].join(','));

      if (isHorizontal) {
        currentPoint.x += currentPoint.x < segment.to.x ? 1 : -1;
      } else if (isVertical) {
        currentPoint.y += currentPoint.y < segment.to.y ? 1 : -1;
      } else {
        currentPoint.x += currentPoint.x < segment.to.x ? 1 : -1;
        currentPoint.y += currentPoint.y < segment.to.y ? 1 : -1;
      }
    }
    addPoint([currentPoint.x, currentPoint.y].join(','));
  }
  return count;
}
