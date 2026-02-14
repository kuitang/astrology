export interface PlanetPosition {
  id: PlanetId;
  longitude: number;    // ecliptic longitude 0-360
  latitude: number;     // ecliptic latitude
  distance: number;     // AU from Earth
  speed: number;        // degrees/day (negative = retrograde)
  signIndex: number;    // 0=Aries..11=Pisces
  signDegree: number;   // degree within sign 0-30
}

export type PlanetId =
  | 'Sun' | 'Moon' | 'Mercury' | 'Venus' | 'Mars'
  | 'Jupiter' | 'Saturn' | 'Uranus' | 'Neptune' | 'Pluto';

export interface HouseCusps {
  system: 'whole-sign';
  cusps: number[];        // 12 ecliptic longitudes
  ascendant: number;      // ecliptic longitude of Ascendant
  mc: number;             // Midheaven
}

export interface TransitEvent {
  planetId: PlanetId;
  signIndex: number;
  startDate: Date;
  endDate: Date;
}

export type DignityType = 'domicile' | 'exaltation' | 'detriment' | 'fall' | 'peregrine';

export interface SelectedObject {
  type: 'planet' | 'sign' | 'constellation' | 'rising' | 'polaris';
  id: string;
}

export type InterpretationStyle = 'traditional' | 'modern';

export interface AppState {
  date: Date;
  latitude: number;
  longitude: number;
  timezone: string;
  planetPositions: Map<PlanetId, PlanetPosition>;
  houses: HouseCusps | null;
  selectedObject: SelectedObject | null;
  currentTransit: TransitEvent | null;
  selectedDignity: DignityType | null;
  natalMode: boolean;
  interpretationStyle: InterpretationStyle;
  zodiacSegmentCount: number;
  loading: boolean;
  ready: boolean;
}
