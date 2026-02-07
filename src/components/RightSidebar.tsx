import { EffectType, EffectSettings } from '../types/effects';

interface RightSidebarProps {
    activeEffect: EffectType;
    settings: EffectSettings;
    setSettings: (settings: EffectSettings) => void;
    sourceImage: string | null;
}

export function RightSidebar({
    activeEffect,
    settings,
    setSettings,
    sourceImage,
}: RightSidebarProps) {
    const updateSetting = <K extends keyof EffectSettings>(
        key: K,
        value: EffectSettings[K]
    ) => {
        setSettings({ ...settings, [key]: value });
    };

    const getEffectName = (effect: EffectType): string => {
        const names: Record<EffectType, string> = {
            'ascii': 'ASCII',
            'dithering': 'Dithering',
            'half-tone': 'Half-tone',
            'matrix-rain': 'Matrix Rain',
            'matrix-dots': 'Matrix Dots',
            'mosaic': 'Mosaic',
            'pixel-grid': 'Pixel Grid',
            'pixelate': 'Pixelate',
            'threshold': 'Threshold',
            'edge-detection': 'Edge Detection',
            'convolution': 'Convolution',
            'edge-lines': 'Edge Lines',
            'halftone-dots': 'Halftone Dots',
            'crosses': 'Crosses',
            'invert': 'Invert',
            'led': 'LED',
        };
        return names[effect] || effect;
    };

    return (
        <div className="w-64 border-l border-term-border bg-term-panel flex flex-col overflow-hidden">
            {/* Header */}
            <div className="px-3 py-2 border-b border-term-border flex items-center justify-between">
                <span className="text-term-text-dim text-[10px] uppercase tracking-wide">Settings</span>
                <button
                    onClick={() => setSettings({ ...settings })}
                    className="text-term-text-dim text-[10px] hover:text-term-text"
                >
                    Reset
                </button>
            </div>

            {/* Scrollable Settings */}
            <div className="flex-1 overflow-y-auto">
                {/* Effect Name */}
                <div className="px-3 py-2 border-b border-term-border">
                    <span className="text-term-text-bright text-xs">{getEffectName(activeEffect)}</span>
                </div>

                {/* Character Set (for ASCII effects) */}
                {(activeEffect === 'ascii' || activeEffect === 'matrix-rain') && (
                    <SettingsSection title="Character Set">
                        <SelectField
                            value={settings.characterSet}
                            onChange={(v) => updateSetting('characterSet', v as EffectSettings['characterSet'])}
                            options={[
                                { value: 'standard', label: 'Standard' },
                                { value: 'extended', label: 'Extended' },
                                { value: 'blocks', label: 'Blocks' },
                                { value: 'custom', label: 'Custom' },
                            ]}
                        />
                        {settings.characterSet === 'custom' && (
                            <input
                                type="text"
                                value={settings.customCharacters}
                                onChange={(e) => updateSetting('customCharacters', e.target.value)}
                                placeholder="Enter characters..."
                                className="w-full mt-2 px-2 py-1 text-[10px] bg-term-bg border border-term-border text-term-text focus:border-term-text-dim focus:outline-none"
                            />
                        )}
                    </SettingsSection>
                )}

                {/* Cell Size */}
                <SettingsSection title="">
                    <SliderField
                        label="Cell Size"
                        value={settings.cellSize}
                        min={2}
                        max={32}
                        step={1}
                        onChange={(v) => updateSetting('cellSize', v)}
                    />
                    <SliderField
                        label="Spacing"
                        value={settings.spacing}
                        min={0}
                        max={2}
                        step={0.1}
                        onChange={(v) => updateSetting('spacing', v)}
                    />
                    <SliderField
                        label="Speed"
                        value={settings.speed}
                        min={0}
                        max={5}
                        step={0.1}
                        onChange={(v) => updateSetting('speed', v)}
                    />
                    <SliderField
                        label="Trail Length"
                        value={settings.trailLength}
                        min={1}
                        max={50}
                        step={1}
                        onChange={(v) => updateSetting('trailLength', v)}
                    />
                    <SliderField
                        label="Randomization"
                        value={settings.randomization}
                        min={0}
                        max={1}
                        step={0.01}
                        onChange={(v) => updateSetting('randomization', v)}
                    />
                    <SliderField
                        label="Glow"
                        value={settings.glow}
                        min={0}
                        max={1}
                        step={0.01}
                        onChange={(v) => updateSetting('glow', v)}
                    />
                    <SliderField
                        label="FX Opacity"
                        value={settings.fxOpacity}
                        min={0}
                        max={1}
                        step={0.01}
                        onChange={(v) => updateSetting('fxOpacity', v)}
                    />
                </SettingsSection>

                {/* Adjustments */}
                <SettingsSection title="Adjustments">
                    <SliderField
                        label="Brightness"
                        value={settings.brightness}
                        min={-100}
                        max={100}
                        step={1}
                        onChange={(v) => updateSetting('brightness', v)}
                    />
                    <SliderField
                        label="Contrast"
                        value={settings.contrast}
                        min={-100}
                        max={100}
                        step={1}
                        onChange={(v) => updateSetting('contrast', v)}
                    />
                    <SliderField
                        label="Threshold"
                        value={settings.threshold}
                        min={0}
                        max={1}
                        step={0.01}
                        onChange={(v) => updateSetting('threshold', v)}
                    />
                </SettingsSection>

                {/* Color */}
                <SettingsSection title="Color">
                    <div className="flex items-center justify-between">
                        <span className="text-term-text-dim text-[10px]">Auto Color</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={settings.colored}
                                onChange={(e) => updateSetting('colored', e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-8 h-4 bg-term-border peer-checked:bg-term-accent rounded-none peer-checked:after:translate-x-4 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-term-text-bright after:w-3 after:h-3 after:transition-all"></div>
                        </label>
                    </div>
                    {!settings.colored && (
                        <div className="mt-2 flex items-center gap-2">
                            <input
                                type="color"
                                value={settings.fgColor}
                                onChange={(e) => updateSetting('fgColor', e.target.value)}
                                className="w-8 h-6 bg-transparent border border-term-border cursor-pointer"
                            />
                            <span className="text-term-text-dim text-[10px] uppercase">{settings.fgColor}</span>
                        </div>
                    )}
                </SettingsSection>

                {/* Processing */}
                <SettingsSection title="Processing">
                    <div className="flex items-center justify-between">
                        <span className="text-term-text-dim text-[10px]">Invert</span>
                        <input
                            type="checkbox"
                            checked={settings.invert}
                            onChange={(e) => updateSetting('invert', e.target.checked)}
                            className="w-4 h-4 accent-term-accent bg-term-bg border-term-border"
                        />
                    </div>
                </SettingsSection>

                {/* Post-Processing */}
                <SettingsSection title="Post-Processing">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-term-text-dim text-[10px]">Scanlines</span>
                        <input
                            type="checkbox"
                            checked={settings.scanlines}
                            onChange={(e) => updateSetting('scanlines', e.target.checked)}
                            className="w-4 h-4 accent-term-accent bg-term-bg border-term-border"
                        />
                    </div>
                    <SliderField
                        label="Noise"
                        value={settings.noise}
                        min={0}
                        max={1}
                        step={0.01}
                        onChange={(v) => updateSetting('noise', v)}
                    />
                    <SliderField
                        label="Blur"
                        value={settings.blur}
                        min={0}
                        max={10}
                        step={0.1}
                        onChange={(v) => updateSetting('blur', v)}
                    />
                </SettingsSection>

                {/* Export */}
                <SettingsSection title="Export">
                    <div className="mb-2">
                        <span className="text-term-text-dim text-[10px] block mb-1">Format</span>
                        <div className="grid grid-cols-3 gap-1">
                            {(['png', 'jpg', 'gif', 'svg', 'video', 'text'] as const).map(format => (
                                <button
                                    key={format}
                                    onClick={() => updateSetting('format', format)}
                                    className={`px-2 py-1 text-[9px] uppercase border transition-colors ${settings.format === format
                                            ? 'border-term-accent text-term-accent'
                                            : 'border-term-border text-term-text-dim hover:border-term-text'
                                        }`}
                                >
                                    {format}
                                </button>
                            ))}
                        </div>
                    </div>
                    <SliderField
                        label="Quality"
                        value={settings.quality}
                        min={10}
                        max={100}
                        step={10}
                        suffix="%"
                        onChange={(v) => updateSetting('quality', v)}
                    />
                </SettingsSection>

                {/* High Quality Image Notice */}
                <div className="px-3 py-2 text-term-text-dim text-[9px] border-t border-term-border">
                    High Quality Image
                </div>
            </div>

            {/* Export Button */}
            <div className="p-3 border-t border-term-border">
                <button
                    disabled={!sourceImage}
                    className={`w-full py-2 text-[11px] uppercase tracking-wide transition-colors ${sourceImage
                            ? 'bg-term-text-bright text-term-bg hover:bg-term-accent'
                            : 'bg-term-border text-term-text-dim cursor-not-allowed'
                        }`}
                >
                    Export PNG
                </button>
            </div>
        </div>
    );
}

// Settings Section Component
function SettingsSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="px-3 py-2 border-b border-term-border">
            {title && (
                <span className="text-term-text text-[10px] uppercase tracking-wide block mb-2">{title}</span>
            )}
            <div className="space-y-2">{children}</div>
        </div>
    );
}

// Slider Field Component
function SliderField({
    label,
    value,
    min,
    max,
    step,
    suffix = '',
    onChange,
}: {
    label: string;
    value: number;
    min: number;
    max: number;
    step: number;
    suffix?: string;
    onChange: (value: number) => void;
}) {
    return (
        <div className="space-y-1">
            <div className="flex justify-between text-[10px]">
                <span className="text-term-text-dim">{label}</span>
                <span className="text-term-text tabular-nums">
                    {step < 1 ? value.toFixed(1) : value}{suffix}
                </span>
            </div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(parseFloat(e.target.value))}
                className="w-full h-1 bg-term-border appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-term-text-bright [&::-webkit-slider-thumb]:cursor-pointer"
            />
        </div>
    );
}

// Select Field Component
function SelectField({
    value,
    onChange,
    options,
}: {
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
}) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-2 py-1 text-[10px] bg-term-bg border border-term-border text-term-text focus:border-term-text-dim focus:outline-none appearance-none cursor-pointer"
        >
            {options.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </select>
    );
}
