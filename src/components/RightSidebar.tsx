import { EffectType, EffectSettings } from '../types/effects';
import { PreviewMode } from './Editor';

interface RightSidebarProps {
    activeEffect: EffectType;
    settings: EffectSettings;
    setSettings: (settings: EffectSettings) => void;
    sourceImage: string | null;
    previewMode: PreviewMode;
    setPreviewMode: (mode: PreviewMode) => void;
    onResetSettings: () => void;
    onExport: (format: EffectSettings['format']) => void;
}

export function RightSidebar({
    activeEffect,
    settings,
    setSettings,
    sourceImage,
    previewMode,
    setPreviewMode,
    onResetSettings,
    onExport,
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
            'pixel-sorting': 'Pixel Sorting',
            'halftone': 'Halftone',
            'halftone-cmyk': 'CMYK Halftone',
            'vhs-glitch': 'VHS Glitch',
            'scanlines': 'Scanlines',
            'grain': 'Grain',
            'noise': 'Noise',
        };
        return names[effect] || effect;
    };

    return (
        <div className="w-[318px] xl:w-[336px] border-l border-term-border bg-term-panel flex flex-col overflow-hidden">
            <div className="px-3 py-2 border-b border-term-border flex items-center justify-between">
                <span className="text-term-text-dim text-[11px] uppercase tracking-wide">- Settings</span>
                <button type="button" onClick={onResetSettings} className="text-term-text-dim text-[11px] hover:text-term-text">
                    Reset
                </button>
            </div>

            <div className="flex-1 overflow-y-auto">
                <div className="px-3 py-2 border-b border-term-border">
                    <span className="text-term-text-bright text-[14px] truncate">{getEffectName(activeEffect)}</span>
                </div>

                <SettingsSection title="Preview">
                    <div className="grid grid-cols-3 gap-1">
                        {(['processed', 'split', 'original'] as const).map((mode) => (
                            <button
                                key={mode}
                                onClick={() => setPreviewMode(mode)}
                                className={`px-2 py-1 text-[10px] uppercase border ${previewMode === mode ? 'border-term-accent text-term-accent' : 'border-term-border text-term-text-dim hover:border-term-text'}`}
                            >
                                {mode}
                            </button>
                        ))}
                    </div>
                </SettingsSection>

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
                    </SettingsSection>
                )}

                <SettingsSection title="Effects">
                    <SliderField label="Cell Size" value={settings.cellSize} min={2} max={32} step={1} onChange={(v) => updateSetting('cellSize', v)} />
                    <SliderField label="Brightness" value={settings.brightness} min={-100} max={100} step={1} onChange={(v) => updateSetting('brightness', v)} />
                    <SliderField label="Contrast" value={settings.contrast} min={-100} max={100} step={1} onChange={(v) => updateSetting('contrast', v)} />
                    <SliderField label="Threshold" value={settings.threshold} min={0} max={1} step={0.01} onChange={(v) => updateSetting('threshold', v)} />
                    <SliderField label="Noise" value={settings.noiseIntensity} min={0} max={1} step={0.01} onChange={(v) => updateSetting('noiseIntensity', v)} />
                    <SliderField label="Blur" value={settings.blur} min={0} max={10} step={0.1} onChange={(v) => updateSetting('blur', v)} />
                </SettingsSection>

                <SettingsSection title="Color">
                    <div className="flex items-center justify-between">
                        <span className="text-term-text-dim text-[11px]">Auto Color</span>
                        <input type="checkbox" checked={settings.colored} onChange={(e) => updateSetting('colored', e.target.checked)} className="w-4 h-4 accent-term-accent" />
                    </div>
                </SettingsSection>

                <SettingsSection title="Export">
                    <div className="grid grid-cols-3 gap-1">
                        {(['png', 'jpg', 'svg', 'text'] as const).map((format) => (
                            <button
                                key={format}
                                onClick={() => updateSetting('format', format)}
                                className={`px-2 py-1 text-[10px] uppercase border ${settings.format === format ? 'border-term-accent text-term-accent' : 'border-term-border text-term-text-dim hover:border-term-text'}`}
                            >
                                {format}
                            </button>
                        ))}
                    </div>
                </SettingsSection>
            </div>

            <div className="p-3 border-t border-term-border">
                <button
                    type="button"
                    onClick={() => onExport(settings.format)}
                    disabled={!sourceImage}
                    className={`w-full py-2 text-[12px] uppercase tracking-wide transition-colors ${sourceImage ? 'bg-term-text-bright text-term-bg hover:bg-term-accent' : 'bg-term-border text-term-text-dim cursor-not-allowed'}`}
                >
                    Export {settings.format.toUpperCase()}
                </button>
            </div>
        </div>
    );
}

function SettingsSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="px-3 py-2 border-b border-term-border">
            <span className="text-term-text text-[10px] uppercase tracking-wide block mb-2">{title}</span>
            <div className="space-y-2">{children}</div>
        </div>
    );
}

function SliderField({ label, value, min, max, step, onChange }: { label: string; value: number; min: number; max: number; step: number; onChange: (value: number) => void; }) {
    return (
        <div className="space-y-1">
            <div className="flex justify-between text-[10px]">
                <span className="text-term-text-dim">{label}</span>
                <span className="text-term-text tabular-nums">{step < 1 ? value.toFixed(2) : value}</span>
            </div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(parseFloat(e.target.value))}
                className="w-full h-1 bg-term-border appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:bg-term-text-bright"
            />
        </div>
    );
}

function SelectField({ value, onChange, options }: { value: string; onChange: (value: string) => void; options: { value: string; label: string }[]; }) {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full px-2 py-1.5 text-[11px] bg-term-bg border border-term-border text-term-text">
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </select>
    );
}
