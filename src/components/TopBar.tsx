import { EffectType } from '../types/effects';

interface TopBarProps {
    activeEffect: EffectType;
    fps: number;
    isProcessing: boolean;
    onReset: () => void;
}

export function TopBar({ activeEffect, fps, isProcessing, onReset }: TopBarProps) {
    const getEffectDisplayName = (effect: EffectType): string => {
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
        <div className="h-9 border-b border-term-border bg-term-panel flex items-center justify-between px-3">
            {/* Left: Status */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2.5">
                    <span
                        className={`w-2.5 h-2.5 rounded-full ${isProcessing
                                ? 'bg-green-500 animate-pulse shadow-[0_0_8px_2px_rgba(34,197,94,0.6)]'
                                : 'bg-term-text-dim'
                            }`}
                    />
                    <span className="text-term-text text-[13px]">
                        {getEffectDisplayName(activeEffect)}
                    </span>
                    {isProcessing && (
                        <span className="text-term-text-dim text-[11px]">(WebGPU)</span>
                    )}
                </div>
            </div>

            {/* Center: Effect Name with FPS */}
            <div className="flex items-center gap-3">
                {fps > 0 && (
                    <span className="text-term-text-dim text-[11px] tabular-nums">
                        {fps} FPS
                    </span>
                )}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
                <button
                    onClick={onReset}
                    className="px-2.5 py-1 text-[12px] text-term-text-dim hover:text-term-text border border-term-border hover:border-term-text-dim transition-colors"
                >
                    Reset
                </button>
                <button className="p-1 text-term-text-dim hover:text-term-text transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
                <button className="p-1 text-term-text-dim hover:text-term-text transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
