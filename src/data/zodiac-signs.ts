export type Element = 'fire' | 'earth' | 'air' | 'water';
export type Modality = 'cardinal' | 'fixed' | 'mutable';

export interface ZodiacSign {
  index: number;
  name: string;
  glyph: string;
  startDegree: number;
  element: Element;
  modality: Modality;
  ruler: string;
}

export const ZODIAC_SIGNS: ZodiacSign[] = [
  { index: 0,  name: 'Aries',       glyph: '♈', startDegree: 0,   element: 'fire',  modality: 'cardinal', ruler: 'Mars' },
  { index: 1,  name: 'Taurus',      glyph: '♉', startDegree: 30,  element: 'earth', modality: 'fixed',    ruler: 'Venus' },
  { index: 2,  name: 'Gemini',      glyph: '♊', startDegree: 60,  element: 'air',   modality: 'mutable',  ruler: 'Mercury' },
  { index: 3,  name: 'Cancer',      glyph: '♋', startDegree: 90,  element: 'water', modality: 'cardinal', ruler: 'Moon' },
  { index: 4,  name: 'Leo',         glyph: '♌', startDegree: 120, element: 'fire',  modality: 'fixed',    ruler: 'Sun' },
  { index: 5,  name: 'Virgo',       glyph: '♍', startDegree: 150, element: 'earth', modality: 'mutable',  ruler: 'Mercury' },
  { index: 6,  name: 'Libra',       glyph: '♎', startDegree: 180, element: 'air',   modality: 'cardinal', ruler: 'Venus' },
  { index: 7,  name: 'Scorpio',     glyph: '♏', startDegree: 210, element: 'water', modality: 'fixed',    ruler: 'Mars' },
  { index: 8,  name: 'Sagittarius', glyph: '♐', startDegree: 240, element: 'fire',  modality: 'mutable',  ruler: 'Jupiter' },
  { index: 9,  name: 'Capricorn',   glyph: '♑', startDegree: 270, element: 'earth', modality: 'cardinal', ruler: 'Saturn' },
  { index: 10, name: 'Aquarius',    glyph: '♒', startDegree: 300, element: 'air',   modality: 'fixed',    ruler: 'Saturn' },
  { index: 11, name: 'Pisces',      glyph: '♓', startDegree: 330, element: 'water', modality: 'mutable',  ruler: 'Jupiter' },
];

export const ELEMENT_COLORS: Record<Element, number> = {
  fire:  0xff4444,
  earth: 0x44bb44,
  air:   0xdddd44,
  water: 0x4488ff,
};
