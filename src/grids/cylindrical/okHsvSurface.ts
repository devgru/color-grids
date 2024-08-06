import { Okhsv } from 'culori';
import { hsDisc } from './hsDisc';

export const okHsvSurface = (step: number = 1): Okhsv[] => {
  const points = [];

  for (let v = 0; v <= 1; v += step) {
    for (const { h, s } of hsDisc(step)) {
      if (s === 1 || v === 0 || v === 1) {
        points.push({ mode: 'okhsv', h, s, v });
      }
    }
  }
  return points;
};
