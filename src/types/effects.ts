// ============================================================================
// Grainrad - Unified Type Definitions
// ============================================================================

/**
 * All supported effect types from the specification
 */
export type EffectType =
  // ASCII & Text
  | 'ascii'
  | 'dithering'
  // Pixel Effects
  | 'pixel-sorting'
  | 'pixelate'
  | 'mosaic'
  | 'pixel-grid'
  // Matrix
  | 'matrix-rain'
  | 'matrix-dots'
  // Halftone
  | 'halftone'
  | 'halftone-cmyk'
  | 'halftone-dots'
  | 'crosses'
  // VHS/Analog
  | 'vhs-glitch'
  | 'scanlines'
  // Edge Detection
  | 'edge-detection'
  | 'edge-lines'
  | 'convolution'
  // Other
  | 'threshold'
  | 'invert'
  | 'led'
  | 'grain'
  | 'noise'
  | 'half-tone';

/**
 * Source media types
 */
export type SourceType = 'image' | 'video' | 'webcam' | 'model' | null;

/**
 * Character set options for ASCII effects
 */
export type CharacterSet = 'standard' | 'extended' | 'blocks' | 'custom';

/**
 * Sort direction for pixel sorting
 */
export type SortDirection = 'horizontal' | 'vertical';

/**
 * Sort comparator for pixel sorting
 */
export type SortComparator = 'luma' | 'hue' | 'saturation';

/**
 * Dithering algorithm
 */
export type DitherAlgorithm = 'bayer' | 'floyd-steinberg';

/**
 * Color palette for dithering
 */
export type ColorPalette = '1bit' | 'gameboy' | 'sepia' | 'custom';

/**
 * Export format
 */
export type ExportFormat = 'png' | 'jpg' | 'gif' | 'mp4' | 'webm' | 'svg' | 'text';

/**
 * Complete settings interface for all effects
 */
export interface EffectSettings {
  // ===== Character Settings =====
  characterSet: CharacterSet;
  customCharacters: string;

  // ===== Grid/Resolution =====
  cellSize: number;
  spacing: number;

  // ===== Adjustments =====
  brightness: number;
  contrast: number;
  threshold: number;

  // ===== Color =====
  colored: boolean;
  bgColor: string;
  fgColor: string;
  backgroundOpacity: number;

  // ===== Pixel Sorting =====
  sortDirection: SortDirection;
  sortComparator: SortComparator;
  sortThreshold: number;

  // ===== VHS Glitch =====
  trackingNoise: number;
  trackingSpeed: number;
  colorBleed: number;
  warpIntensity: number;
  jitterAmount: number;

  // ===== Matrix Rain =====
  speed: number;
  trailLength: number;
  glow: number;
  randomization: number;
  fxOpacity: number;

  // ===== Halftone =====
  dotSize: number;
  dotAngle: number;
  cmykSeparation: boolean;

  // ===== Dithering =====
  ditherAlgorithm: DitherAlgorithm;
  colorPalette: ColorPalette;

  // ===== Grain/Noise =====
  grainIntensity: number;
  grainSize: number;
  noiseIntensity: number;
  noiseColor: boolean;

  // ===== Post-processing =====
  scanlines: boolean;
  scanlineIntensity: number;
  blur: number;
  invert: boolean;

  // ===== Export =====
  format: ExportFormat;
  quality: number;
}

/**
 * Default settings for all effects
 */
export const DEFAULT_SETTINGS: EffectSettings = {
  // Character Settings
  characterSet: 'standard',
  customCharacters: ' .:-=+*#%@',

  // Grid/Resolution
  cellSize: 8,
  spacing: 0.8,

  // Adjustments
  brightness: 0,
  contrast: 0,
  threshold: 0.5,

  // Color
  colored: false,
  bgColor: '#0a0a0a',
  fgColor: '#00ff00',
  backgroundOpacity: 1.0,

  // Pixel Sorting
  sortDirection: 'vertical',
  sortComparator: 'luma',
  sortThreshold: 0.5,

  // VHS Glitch
  trackingNoise: 0.3,
  trackingSpeed: 1.0,
  colorBleed: 0.2,
  warpIntensity: 0.1,
  jitterAmount: 0.1,

  // Matrix Rain
  speed: 1.0,
  trailLength: 16,
  glow: 0.0,
  randomization: 0.0,
  fxOpacity: 1.0,

  // Halftone
  dotSize: 4,
  dotAngle: 45,
  cmykSeparation: false,

  // Dithering
  ditherAlgorithm: 'bayer',
  colorPalette: '1bit',

  // Grain/Noise
  grainIntensity: 0.0,
  grainSize: 1.0,
  noiseIntensity: 0.0,
  noiseColor: false,

  // Post-processing
  scanlines: false,
  scanlineIntensity: 0.15,
  blur: 0,
  invert: false,

  // Export
  format: 'png',
  quality: 100,
};

/**
 * Effect category for UI organization
 */
export interface EffectCategory {
  name: string;
  effects: { id: EffectType; name: string; description?: string }[];
}

/**
 * Effect categories for the sidebar
 */
export const EFFECT_CATEGORIES: EffectCategory[] = [
  {
    name: 'ASCII & Text',
    effects: [
      { id: 'ascii', name: 'ASCII', description: 'Convert brightness to text characters' },
      { id: 'dithering', name: 'Dithering', description: 'Bayer or Floyd-Steinberg dithering' },
    ],
  },
  {
    name: 'Pixel Effects',
    effects: [
      { id: 'pixel-sorting', name: 'Pixel Sorting', description: 'Sort pixels by brightness or hue' },
      { id: 'pixelate', name: 'Pixelate', description: 'Blocky pixel effect' },
      { id: 'pixel-grid', name: 'Pixel Grid', description: 'Pixels with grid lines' },
      { id: 'mosaic', name: 'Mosaic', description: 'Color-quantized blocks' },
    ],
  },
  {
    name: 'Matrix',
    effects: [
      { id: 'matrix-rain', name: 'Matrix Rain', description: 'Falling code effect' },
      { id: 'matrix-dots', name: 'Matrix Dots', description: 'Dot matrix display' },
    ],
  },
  {
    name: 'Halftone',
    effects: [
      { id: 'halftone', name: 'Halftone', description: 'Newsprint dot pattern' },
      { id: 'halftone-cmyk', name: 'CMYK Halftone', description: 'Four-color separation' },
      { id: 'halftone-dots', name: 'Halftone Dots', description: 'Variable dot sizes' },
      { id: 'crosses', name: 'Crosses', description: 'Cross-hatch pattern' },
    ],
  },
  {
    name: 'VHS / Analog',
    effects: [
      { id: 'vhs-glitch', name: 'VHS Glitch', description: 'Old tape recording effect' },
      { id: 'scanlines', name: 'Scanlines', description: 'CRT monitor lines' },
    ],
  },
  {
    name: 'Edge Detection',
    effects: [
      { id: 'edge-detection', name: 'Sobel Edge', description: 'Sobel edge detection' },
      { id: 'edge-lines', name: 'Edge Lines', description: 'ASCII edge lines' },
      { id: 'convolution', name: 'Convolution', description: 'Custom kernel convolution' },
    ],
  },
  {
    name: 'Other',
    effects: [
      { id: 'threshold', name: 'Threshold', description: 'Binary black/white' },
      { id: 'invert', name: 'Invert', description: 'Negative image' },
      { id: 'led', name: 'LED', description: 'LED matrix display' },
      { id: 'grain', name: 'Film Grain', description: 'Analog film texture' },
      { id: 'noise', name: 'Digital Noise', description: 'Sensor noise effect' },
    ],
  },
];

/**
 * Preset configuration
 */
export interface Preset {
  id: string;
  name: string;
  description?: string;
  effect: EffectType;
  settings: Partial<EffectSettings>;
}

/**
 * Built-in presets
 */
export const PRESETS: Preset[] = [
  {
    id: 'terminal',
    name: 'Terminal',
    description: 'Classic green terminal look',
    effect: 'ascii',
    settings: {
      characterSet: 'standard',
      cellSize: 6,
      colored: false,
      fgColor: '#00ff00',
      bgColor: '#000000',
      backgroundOpacity: 1,
    },
  },
  {
    id: 'matrix',
    name: 'Matrix Rain',
    description: 'Falling code from The Matrix',
    effect: 'matrix-rain',
    settings: {
      cellSize: 12,
      speed: 2,
      trailLength: 20,
      fgColor: '#00ff41',
      glow: 0.5,
    },
  },
  {
    id: 'newsprint',
    name: 'Newsprint',
    description: 'Black and white newspaper print',
    effect: 'halftone',
    settings: {
      cellSize: 4,
      colored: false,
      dotSize: 4,
      dotAngle: 45,
      contrast: 20,
    },
  },
  {
    id: 'broken-tape',
    name: 'Broken Tape',
    description: 'Heavy VHS warping with static',
    effect: 'vhs-glitch',
    settings: {
      trackingNoise: 0.5,
      colorBleed: 0.3,
      warpIntensity: 0.2,
      scanlines: true,
      scanlineIntensity: 0.2,
    },
  },
  {
    id: 'cyber',
    name: 'Cyber',
    description: 'High contrast neon pixel sorting',
    effect: 'pixel-sorting',
    settings: {
      sortThreshold: 0.6,
      sortDirection: 'vertical',
      sortComparator: 'hue',
      colored: true,
      contrast: 30,
    },
  },
  {
    id: 'retro-game',
    name: 'Retro Game',
    description: '8-bit pixel art style',
    effect: 'pixelate',
    settings: {
      cellSize: 8,
      colored: true,
    },
  },
  {
    id: 'gameboy',
    name: 'GameBoy',
    description: 'Classic GameBoy green palette',
    effect: 'dithering',
    settings: {
      ditherAlgorithm: 'bayer',
      colorPalette: 'gameboy',
      cellSize: 4,
    },
  },
  {
    id: 'security-cam',
    name: 'Security Cam',
    description: 'Low-res surveillance look',
    effect: 'scanlines',
    settings: {
      scanlineIntensity: 0.3,
      noiseIntensity: 0.2,
      contrast: 20,
    },
  },
];

// ============================================================================
// Character Sets
// ============================================================================

export const ASCII_STANDARD = ' .:-=+*#%@';
export const ASCII_EXTENDED = " .':,;clodxkO0KXNWM";
export const ASCII_BLOCKS = ' .:-=+*#%@';

/**
 * Get character set string by type
 */
export function getCharacterSet(type: CharacterSet, custom: string = ''): string {
  switch (type) {
    case 'extended':
      return ASCII_EXTENDED;
    case 'blocks':
      return ASCII_BLOCKS;
    case 'custom':
      return custom || ASCII_STANDARD;
    default:
      return ASCII_STANDARD;
  }
}

// ============================================================================
// Color Utilities
// ============================================================================

/**
 * RGB color from hex string
 */
export interface RGB {
  r: number;
  g: number;
  b: number;
}

/**
 * Parse hex color to RGB
 */
export function parseHexColor(hex: string): RGB | null {
  const clean = hex.replace('#', '');
  if (clean.length !== 6) return null;
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) return null;
  return { r, g, b };
}

/**
 * Convert RGB to hex
 */
export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// ============================================================================
// Effect Parameter Definitions for UI
// ============================================================================

export interface SliderParam {
  key: keyof EffectSettings;
  label: string;
  min: number;
  max: number;
  step: number;
  showFor?: EffectType[];
}

export interface ToggleParam {
  key: keyof EffectSettings;
  label: string;
  showFor?: EffectType[];
}

export interface SelectParam {
  key: keyof EffectSettings;
  label: string;
  options: { value: string; label: string }[];
  showFor?: EffectType[];
}

/**
 * Slider parameters for effect controls
 */
export const SLIDER_PARAMS: SliderParam[] = [
  // Grid
  { key: 'cellSize', label: 'Cell Size', min: 2, max: 32, step: 1 },
  { key: 'spacing', label: 'Spacing', min: 0.5, max: 1.5, step: 0.1 },
  
  // Adjustments
  { key: 'brightness', label: 'Brightness', min: -100, max: 100, step: 1 },
  { key: 'contrast', label: 'Contrast', min: -100, max: 100, step: 1 },
  { key: 'threshold', label: 'Threshold', min: 0, max: 1, step: 0.01 },
  
  // Pixel Sorting
  { key: 'sortThreshold', label: 'Sort Threshold', min: 0, max: 1, step: 0.01, showFor: ['pixel-sorting'] },
  
  // VHS Glitch
  { key: 'trackingNoise', label: 'Tracking Noise', min: 0, max: 1, step: 0.01, showFor: ['vhs-glitch'] },
  { key: 'trackingSpeed', label: 'Tracking Speed', min: 0.1, max: 5, step: 0.1, showFor: ['vhs-glitch'] },
  { key: 'colorBleed', label: 'Color Bleed', min: 0, max: 1, step: 0.01, showFor: ['vhs-glitch'] },
  { key: 'warpIntensity', label: 'Warp', min: 0, max: 1, step: 0.01, showFor: ['vhs-glitch'] },
  { key: 'jitterAmount', label: 'Jitter', min: 0, max: 1, step: 0.01, showFor: ['vhs-glitch'] },
  
  // Matrix Rain
  { key: 'speed', label: 'Speed', min: 0.1, max: 5, step: 0.1, showFor: ['matrix-rain'] },
  { key: 'trailLength', label: 'Trail Length', min: 4, max: 50, step: 1, showFor: ['matrix-rain'] },
  { key: 'glow', label: 'Glow', min: 0, max: 1, step: 0.01, showFor: ['matrix-rain'] },
  { key: 'randomization', label: 'Randomization', min: 0, max: 1, step: 0.01, showFor: ['matrix-rain'] },
  { key: 'fxOpacity', label: 'Effect Opacity', min: 0, max: 1, step: 0.01 },
  
  // Halftone
  { key: 'dotSize', label: 'Dot Size', min: 1, max: 16, step: 1, showFor: ['halftone', 'halftone-cmyk', 'halftone-dots'] },
  { key: 'dotAngle', label: 'Dot Angle', min: 0, max: 90, step: 1, showFor: ['halftone', 'halftone-cmyk'] },
  
  // Grain/Noise
  { key: 'grainIntensity', label: 'Grain Intensity', min: 0, max: 1, step: 0.01, showFor: ['grain'] },
  { key: 'grainSize', label: 'Grain Size', min: 0.5, max: 3, step: 0.1, showFor: ['grain'] },
  { key: 'noiseIntensity', label: 'Noise Intensity', min: 0, max: 1, step: 0.01, showFor: ['noise'] },
  
  // Post-processing
  { key: 'scanlineIntensity', label: 'Scanline Intensity', min: 0, max: 0.5, step: 0.01 },
  { key: 'blur', label: 'Blur', min: 0, max: 10, step: 0.1 },
  { key: 'backgroundOpacity', label: 'Background Opacity', min: 0, max: 1, step: 0.01 },
  
  // Export
  { key: 'quality', label: 'Quality', min: 1, max: 100, step: 1 },
];

/**
 * Toggle parameters for effect controls
 */
export const TOGGLE_PARAMS: ToggleParam[] = [
  { key: 'colored', label: 'Colored' },
  { key: 'invert', label: 'Invert' },
  { key: 'scanlines', label: 'Scanlines' },
  { key: 'cmykSeparation', label: 'CMYK Separation', showFor: ['halftone-cmyk'] },
  { key: 'noiseColor', label: 'Colored Noise', showFor: ['noise'] },
];

/**
 * Select parameters for effect controls
 */
export const SELECT_PARAMS: SelectParam[] = [
  {
    key: 'characterSet',
    label: 'Character Set',
    options: [
      { value: 'standard', label: 'Standard' },
      { value: 'extended', label: 'Extended' },
      { value: 'blocks', label: 'Blocks' },
      { value: 'custom', label: 'Custom' },
    ],
    showFor: ['ascii', 'matrix-rain', 'dithering'],
  },
  {
    key: 'sortDirection',
    label: 'Direction',
    options: [
      { value: 'horizontal', label: 'Horizontal' },
      { value: 'vertical', label: 'Vertical' },
    ],
    showFor: ['pixel-sorting'],
  },
  {
    key: 'sortComparator',
    label: 'Comparator',
    options: [
      { value: 'luma', label: 'Brightness' },
      { value: 'hue', label: 'Hue' },
      { value: 'saturation', label: 'Saturation' },
    ],
    showFor: ['pixel-sorting'],
  },
  {
    key: 'ditherAlgorithm',
    label: 'Algorithm',
    options: [
      { value: 'bayer', label: 'Bayer (Ordered)' },
      { value: 'floyd-steinberg', label: 'Floyd-Steinberg' },
    ],
    showFor: ['dithering'],
  },
  {
    key: 'colorPalette',
    label: 'Palette',
    options: [
      { value: '1bit', label: '1-Bit (B&W)' },
      { value: 'gameboy', label: 'GameBoy' },
      { value: 'sepia', label: 'Sepia' },
      { value: 'custom', label: 'Custom' },
    ],
    showFor: ['dithering'],
  },
];
