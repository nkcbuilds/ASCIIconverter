export type EffectType =
    | 'ascii'
    | 'dithering'
    | 'half-tone'
    | 'matrix-rain'
    | 'matrix-dots'
    | 'mosaic'
    | 'pixel-grid'
    | 'pixelate'
    | 'threshold'
    | 'edge-detection'
    | 'convolution'
    | 'edge-lines'
    | 'halftone-dots'
    | 'crosses'
    | 'invert'
    | 'led';

export interface EffectCategory {
    name: string;
    effects: { id: EffectType; name: string }[];
}

export const EFFECT_CATEGORIES: EffectCategory[] = [
    {
        name: 'ASCII',
        effects: [
            { id: 'ascii', name: 'ASCII' },
            { id: 'dithering', name: 'Dithering' },
            { id: 'half-tone', name: 'Half-tone' },
        ],
    },
    {
        name: 'Matrix Rain',
        effects: [
            { id: 'matrix-rain', name: 'Rain' },
            { id: 'matrix-dots', name: 'Dots' },
        ],
    },
    {
        name: 'Retro',
        effects: [
            { id: 'mosaic', name: 'Mosaic' },
            { id: 'pixel-grid', name: 'Pixel Grid' },
            { id: 'pixelate', name: 'Pixelate' },
            { id: 'threshold', name: 'Threshold' },
        ],
    },
    {
        name: 'Edge Detection',
        effects: [
            { id: 'edge-detection', name: 'Sobel' },
            { id: 'convolution', name: 'Convolution' },
            { id: 'edge-lines', name: 'Edge Lines' },
        ],
    },
    {
        name: 'Halftone',
        effects: [
            { id: 'halftone-dots', name: 'Dots/Lines' },
            { id: 'crosses', name: 'Crosses' },
        ],
    },
    {
        name: 'Other',
        effects: [
            { id: 'invert', name: 'Invert' },
            { id: 'led', name: 'LED' },
        ],
    },
];

export interface EffectSettings {
    // ASCII settings
    characterSet: 'standard' | 'extended' | 'blocks' | 'custom';
    customCharacters: string;
    cellSize: number;
    spacing: number;
    speed: number;
    trailLength: number;
    randomization: number;
    glow: number;
    fxOpacity: number;

    // Adjustments
    brightness: number;
    contrast: number;
    threshold: number;

    // Color
    colored: boolean;
    bgColor: string;
    fgColor: string;

    // Processing
    invert: boolean;

    // Post-processing
    scanlines: boolean;
    noise: number;
    blur: number;

    // Export
    format: 'png' | 'jpg' | 'gif' | 'svg' | 'video' | 'text';
    quality: number;
}

export const DEFAULT_SETTINGS: EffectSettings = {
    characterSet: 'standard',
    customCharacters: ' .:-=+*#%@',
    cellSize: 8,
    spacing: 0.8,
    speed: 1.0,
    trailLength: 16,
    randomization: 0,
    glow: 0,
    fxOpacity: 0.5,

    brightness: 0,
    contrast: 0,
    threshold: 0.5,

    colored: false,
    bgColor: '#0a0a0a',
    fgColor: '#00ff00',

    invert: false,

    scanlines: false,
    noise: 0,
    blur: 0,

    format: 'png',
    quality: 100,
};

export interface Preset {
    id: string;
    name: string;
    effect: EffectType;
    settings: Partial<EffectSettings>;
}

export const PRESETS: Preset[] = [
    {
        id: 'classic-ascii',
        name: 'Classic ASCII',
        effect: 'ascii',
        settings: {
            characterSet: 'standard',
            cellSize: 6,
            colored: false,
            fgColor: '#00ff00',
        },
    },
    {
        id: 'matrix',
        name: 'Matrix Rain',
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
        id: 'retro-game',
        name: 'Retro Game',
        effect: 'pixelate',
        settings: {
            cellSize: 8,
            colored: true,
        },
    },
    {
        id: 'newspaper',
        name: 'Newspaper',
        effect: 'halftone-dots',
        settings: {
            cellSize: 4,
            colored: false,
            contrast: 20,
        },
    },
];
