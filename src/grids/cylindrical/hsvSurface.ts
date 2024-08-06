import { Hsv } from 'culori';
import { hsDisc } from './hsDisc';

export const hsvSurface = (step: number = 1): Hsv[] => {
  const points = [];

  for (let v = 0; v <= 1; v += step) {
    for (const { h, s } of hsDisc(step)) {
      if (s === 1 || v === 0 || v === 1) {
        points.push({ mode: 'hsv', h, s, v });
      }
    }
  }
  return points;
};
