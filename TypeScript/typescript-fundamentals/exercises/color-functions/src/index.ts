import { hexToRgb, rgbToHex } from './color-utils';

export let color = {
  r: 255,
  g: 0,
  b: 0,
  get hex() {
    return rgbToHex(this.r, this.g, this.b);
  },
  set hex(hex) {
    let { r, g, b } = hexToRgb(hex);
    this.r = r;
    this.g = g;
    this.b = b;
  }
};