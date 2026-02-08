import { useRef, useCallback, useState } from 'react';
import { EffectType, EFFECT_CATEGORIES, PRESETS, Preset } from '../types/effects';

interface LeftSidebarProps {
    activeEffect: EffectType;
    setActiveEffect: (effect: EffectType) => void;
    onFileSelect: (file: File) => void;
    onWebcam: () => void;
    hasSource: boolean;
    onPresetSelect: (preset: Preset) => void;
}

export function LeftSidebar({
    activeEffect,
    setActiveEffect,
    onFileSelect,
    onWebcam,
    hasSource,
    onPresetSelect,
}: LeftSidebarProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [expandedCategories, setExpandedCategories] = useState<string[]>(
        EFFECT_CATEGORIES.map(c => c.name)
    );
    const [showPresets, setShowPresets] = useState(true);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file && (file.type.startsWith('image/') || file.type.startsWith('video/'))) {
            onFileSelect(file);
        }
    }, [onFileSelect]);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback(() => {
        setIsDragging(false);
    }, []);

    const toggleCategory = (name: string) => {
        setExpandedCategories(prev =>
            prev.includes(name)
                ? prev.filter(n => n !== name)
                : [...prev, name]
        );
    };

    return (
        <div className="w-52 border-r border-term-border bg-term-panel flex flex-col overflow-hidden">
            {/* Logo/Brand */}
            <div className="px-3 py-2 border-b border-term-border">
                <h1 className="text-term-text-bright text-sm font-medium">Grainrad</h1>
                <p className="text-term-text-dim text-[10px]">Effects Editor</p>
            </div>

            {/* Input Section */}
            <div className="p-2 border-b border-term-border">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-term-text-dim text-[10px] uppercase tracking-wide">Input</span>
                    {hasSource && (
                        <span className="text-green-500 text-[10px]">● Active</span>
                    )}
                </div>

                {/* Drop Zone */}
                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onClick={() => fileInputRef.current?.click()}
                    className={`
            border border-dashed rounded cursor-pointer transition-colors p-3 text-center
            ${isDragging
                            ? 'border-term-accent bg-term-accent/10'
                            : 'border-term-border hover:border-term-text-dim'
                        }
          `}
                >
                    <p className="text-term-text-dim text-[10px]">
                        Drop file or click to browse
                    </p>
                    <p className="text-term-text-dim text-[8px] mt-1 opacity-60">
                        PNG, JPG, GIF, MP4, WebM
                    </p>
                </div>

                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,video/*"
                    onChange={(e) => e.target.files?.[0] && onFileSelect(e.target.files[0])}
                    className="hidden"
                />

                {/* Webcam Button */}
                <button
                    onClick={onWebcam}
                    className="w-full mt-2 px-2 py-1.5 text-[10px] border border-term-border text-term-text-dim hover:border-term-text hover:text-term-text transition-colors flex items-center justify-center gap-1.5"
                >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Use Webcam
                </button>
            </div>

            {/* Effects List */}
            <div className="flex-1 overflow-y-auto">
                <div className="p-2">
                    <span className="text-term-text-dim text-[10px] uppercase tracking-wide">Effects</span>
                </div>

                {EFFECT_CATEGORIES.map(category => (
                    <div key={category.name} className="border-b border-term-border last:border-b-0">
                        {/* Category Header */}
                        <button
                            onClick={() => toggleCategory(category.name)}
                            className="w-full px-3 py-1.5 flex items-center justify-between text-left hover:bg-term-border/30 transition-colors"
                        >
                            <span className="text-term-text text-[11px]">{category.name}</span>
                            <svg
                                className={`w-3 h-3 text-term-text-dim transition-transform ${expandedCategories.includes(category.name) ? 'rotate-180' : ''
                                    }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Effect Items */}
                        {expandedCategories.includes(category.name) && (
                            <div className="pb-1">
                                {category.effects.map(effect => (
                                    <button
                                        key={effect.id}
                                        onClick={() => setActiveEffect(effect.id)}
                                        className={`
                      w-full px-4 py-1 text-left text-[11px] transition-colors flex items-center gap-2
                      ${activeEffect === effect.id
                                                ? 'text-term-accent bg-term-accent/10'
                                                : 'text-term-text-dim hover:text-term-text hover:bg-term-border/20'
                                            }
                    `}
                                    >
                                        <span className={`w-1.5 h-1.5 rounded-full ${activeEffect === effect.id ? 'bg-term-accent' : 'bg-term-text-dim/30'
                                            }`} />
                                        {effect.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Presets Section */}
            <div className="border-t border-term-border">
                <button
                    onClick={() => setShowPresets(!showPresets)}
                    className="w-full px-3 py-2 flex items-center justify-between text-left hover:bg-term-border/30 transition-colors"
                >
                    <span className="text-term-text-dim text-[10px] uppercase tracking-wide">Presets</span>
                    <svg
                        className={`w-3 h-3 text-term-text-dim transition-transform ${showPresets ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {showPresets && (
                    <div className="px-2 pb-2 space-y-1">
                        {PRESETS.map(preset => (
                            <button
                                key={preset.id}
                                onClick={() => onPresetSelect(preset)}
                                className="w-full px-2 py-1 text-[10px] text-term-text-dim hover:text-term-text hover:bg-term-border/30 transition-colors text-left"
                            >
                                {preset.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Footer Links */}
            <div className="px-3 py-2 border-t border-term-border flex gap-3 text-[9px] text-term-text-dim">
                <a href="#" className="hover:text-term-text">GitHub</a>
                <a href="#" className="hover:text-term-text">About</a>
                <a href="#" className="hover:text-term-text">Changelog</a>
            </div>
        </div>
    );
}
