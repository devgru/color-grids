import { Okhsl } from 'culori';
import { hsDisc } from './hsDisc';

export const okHslSurface = (step: number = 1): Okhsl[] => {
  const points: Okhsl[] = [];

  for (let l = 0; l <= 1; l += step) {
    for (const { h, s } of hsDisc(step)) {
      if (s === 1 || l === 0 || l === 1) {
        points.push({ mode: 'okhsl', h, s, l });
      }
    }
  }
  return points;
};
