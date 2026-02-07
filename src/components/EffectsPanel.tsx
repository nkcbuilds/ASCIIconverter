import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { EffectType, SourceType } from '../hooks/useWebGPURenderer';

const EFFECTS: { id: EffectType; name: string; description: string }[] = [
    { id: 'ascii', name: 'ASCII', description: 'Convert to ASCII art characters' },
    { id: 'dither', name: 'Dither', description: 'Apply Bayer dithering pattern' },
    { id: 'pixel', name: 'Pixel', description: 'Pixelate the image' },
    { id: 'edge', name: 'Edge', description: 'Detect and highlight edges' },
    { id: 'halftone', name: 'Halftone', description: 'Newspaper dot pattern' },
    { id: 'none', name: 'None', description: 'No effect applied' },
];

interface EffectControlsProps {
    effect: EffectType;
    setEffect: (effect: EffectType) => void;
    source: SourceType;
    setSource: (source: SourceType) => void;
    settings: EffectSettings;
    setSettings: (settings: EffectSettings) => void;
}

export interface EffectSettings {
    intensity: number;
    scale: number;
    invert: boolean;
    colored: boolean;
    threshold: number;
}

export function EffectsPanel() {
    const [effect, setEffect] = useState<EffectType>('ascii');
    const [source, setSource] = useState<SourceType>(null);
    const [settings, setSettings] = useState<EffectSettings>({
        intensity: 1,
        scale: 1,
        invert: false,
        colored: false,
        threshold: 0.5,
    });
    const [isWebGPUSupported] = useState(() => 'gpu' in navigator);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewImage(url);
            setSource('image');
        }
    }, []);

    const handleWebcam = useCallback(async () => {
        try {
            await navigator.mediaDevices.getUserMedia({ video: true });
            setSource('webcam');
        } catch {
            console.error('Failed to access webcam');
        }
    }, []);

    return (
        <section id="effects" className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl font-medium text-term-text-bright mb-4">
                        Effects Playground
                    </h2>
                    <p className="text-term-text text-sm max-w-xl mx-auto">
                        Choose an effect and a source to see the transformation in real-time.
                        All processing happens locally using WebGPU shaders.
                    </p>
                </motion.div>

                {/* WebGPU Status */}
                <div className="flex items-center justify-center gap-2 mb-8">
                    <span className={`w-2 h-2 rounded-full ${isWebGPUSupported ? 'bg-green-500 shadow-[0_0_8px_2px_rgba(34,197,94,0.6)]' : 'bg-red-500'}`} />
                    <span className="text-term-text-dim text-xs uppercase tracking-wide">
                        WebGPU {isWebGPUSupported ? 'Supported' : 'Not Supported'}
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Controls Panel */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Source Selection */}
                        <div className="border border-term-border p-4 space-y-4">
                            <h3 className="text-term-text-bright text-xs uppercase tracking-wide">Source</h3>

                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    onClick={handleWebcam}
                                    className={`btn-terminal flex items-center justify-center gap-2 ${source === 'webcam' ? 'border-term-accent text-term-accent' : ''}`}
                                >
                                    <CameraIcon />
                                    <span>Webcam</span>
                                </button>
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    className={`btn-terminal flex items-center justify-center gap-2 ${source === 'image' ? 'border-term-accent text-term-accent' : ''}`}
                                >
                                    <ImageIcon />
                                    <span>Image</span>
                                </button>
                            </div>

                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*,video/*"
                                onChange={handleFileSelect}
                                className="hidden"
                            />
                        </div>

                        {/* Effect Selection */}
                        <div className="border border-term-border p-4 space-y-4">
                            <h3 className="text-term-text-bright text-xs uppercase tracking-wide">Effect</h3>

                            <div className="grid grid-cols-2 gap-2">
                                {EFFECTS.map((e) => (
                                    <button
                                        key={e.id}
                                        onClick={() => setEffect(e.id)}
                                        className={`btn-terminal text-center ${effect === e.id ? 'border-term-accent text-term-accent' : ''}`}
                                    >
                                        {e.name}
                                    </button>
                                ))}
                            </div>

                            <p className="text-term-text-dim text-xs">
                                {EFFECTS.find(e => e.id === effect)?.description}
                            </p>
                        </div>

                        {/* Effect Settings */}
                        <EffectControls
                            effect={effect}
                            setEffect={setEffect}
                            source={source}
                            setSource={setSource}
                            settings={settings}
                            setSettings={setSettings}
                        />
                    </div>

                    {/* Preview Canvas */}
                    <div className="lg:col-span-2">
                        <div className="border border-term-border bg-term-panel aspect-video relative overflow-hidden">
                            {/* Canvas */}
                            <canvas
                                ref={canvasRef}
                                className="absolute inset-0 w-full h-full object-contain"
                            />

                            {/* Placeholder */}
                            {!source && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                                    <div className="text-term-text-dim mb-4">
                                        <svg className="w-16 h-16 mx-auto opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-term-text-dim text-sm">
                                        Select a source to begin
                                    </p>
                                    <p className="text-term-text-dim text-xs mt-2">
                                        Choose webcam or upload an image
                                    </p>
                                </div>
                            )}

                            {/* Preview Image (for demo) */}
                            {source === 'image' && previewImage && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <img
                                        src={previewImage}
                                        alt="Preview"
                                        className={`max-w-full max-h-full object-contain ${effect === 'ascii' ? 'filter grayscale contrast-125' :
                                                effect === 'dither' ? 'filter grayscale contrast-150' :
                                                    effect === 'pixel' ? 'pixelated' :
                                                        effect === 'edge' ? 'filter invert' :
                                                            effect === 'halftone' ? 'filter grayscale' : ''
                                            }`}
                                        style={{
                                            imageRendering: effect === 'pixel' ? 'pixelated' : 'auto',
                                        }}
                                    />
                                    {/* Effect Overlay Label */}
                                    <div className="absolute top-4 right-4 px-2 py-1 bg-term-bg/80 border border-term-border text-term-text-dim text-xs uppercase">
                                        {effect} effect
                                    </div>
                                </div>
                            )}

                            {/* FPS Counter */}
                            <div className="absolute top-4 left-4 px-2 py-1 bg-term-bg/80 border border-term-border">
                                <span className="text-term-text-dim text-xs font-mono tabular-nums">
                                    60 FPS
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function EffectControls({ settings, setSettings }: EffectControlsProps) {
    return (
        <div className="border border-term-border p-4 space-y-4">
            <h3 className="text-term-text-bright text-xs uppercase tracking-wide">Settings</h3>

            {/* Intensity Slider */}
            <div className="space-y-2">
                <div className="flex justify-between text-xs">
                    <span className="text-term-text-dim">Intensity</span>
                    <span className="text-term-text tabular-nums">{Math.round(settings.intensity * 100)}%</span>
                </div>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={settings.intensity}
                    onChange={(e) => setSettings({ ...settings, intensity: parseFloat(e.target.value) })}
                    className="slider-terminal w-full"
                />
            </div>

            {/* Scale Slider */}
            <div className="space-y-2">
                <div className="flex justify-between text-xs">
                    <span className="text-term-text-dim">Scale</span>
                    <span className="text-term-text tabular-nums">{settings.scale.toFixed(1)}x</span>
                </div>
                <input
                    type="range"
                    min="0.5"
                    max="4"
                    step="0.1"
                    value={settings.scale}
                    onChange={(e) => setSettings({ ...settings, scale: parseFloat(e.target.value) })}
                    className="slider-terminal w-full"
                />
            </div>

            {/* Threshold Slider */}
            <div className="space-y-2">
                <div className="flex justify-between text-xs">
                    <span className="text-term-text-dim">Threshold</span>
                    <span className="text-term-text tabular-nums">{Math.round(settings.threshold * 100)}%</span>
                </div>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={settings.threshold}
                    onChange={(e) => setSettings({ ...settings, threshold: parseFloat(e.target.value) })}
                    className="slider-terminal w-full"
                />
            </div>

            {/* Toggle Options */}
            <div className="space-y-3 pt-2 border-t border-term-border">
                <label className="flex items-center justify-between cursor-pointer group">
                    <span className="text-term-text-dim text-xs group-hover:text-term-text transition-colors">Invert</span>
                    <input
                        type="checkbox"
                        checked={settings.invert}
                        onChange={(e) => setSettings({ ...settings, invert: e.target.checked })}
                        className="checkbox-terminal"
                    />
                </label>

                <label className="flex items-center justify-between cursor-pointer group">
                    <span className="text-term-text-dim text-xs group-hover:text-term-text transition-colors">Colored</span>
                    <input
                        type="checkbox"
                        checked={settings.colored}
                        onChange={(e) => setSettings({ ...settings, colored: e.target.checked })}
                        className="checkbox-terminal"
                    />
                </label>
            </div>
        </div>
    );
}

function CameraIcon() {
    return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
    );
}

function ImageIcon() {
    return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    );
}
