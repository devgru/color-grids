import { Hsl } from 'culori';
import { hsDisc } from './hsDisc';

export const hslSurface = (step: number = 1): Hsl[] => {
  const points: Hsl[] = [];

  for (let l = 0; l <= 1; l += step) {
    for (const { h, s } of hsDisc(step)) {
      if (s === 1 || l === 0 || l === 1) {
        points.push({ mode: 'hsl', h, s, l });
      }
    }
  }
  return points;
};
