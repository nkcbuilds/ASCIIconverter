interface BottomBarProps {
    zoom: number;
    setZoom: (zoom: number) => void;
}

export function BottomBar({ zoom, setZoom }: BottomBarProps) {
    const zoomPresets = [25, 50, 75, 100, 150, 200];

    return (
        <div className="h-6 border-t border-term-border bg-term-panel flex items-center justify-between px-3">
            {/* Left: Zoom Controls */}
            <div className="flex items-center gap-2">
                <span className="text-term-text-dim text-[10px] tabular-nums w-10">
                    {zoom}%
                </span>
                <input
                    type="range"
                    min={10}
                    max={300}
                    value={zoom}
                    onChange={(e) => setZoom(parseInt(e.target.value))}
                    className="w-20 h-1 bg-term-border appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-term-text-bright"
                />
                <div className="flex items-center gap-1">
                    {zoomPresets.slice(0, 4).map(preset => (
                        <button
                            key={preset}
                            onClick={() => setZoom(preset)}
                            className={`px-1.5 py-0.5 text-[9px] border transition-colors ${zoom === preset
                                    ? 'border-term-accent text-term-accent'
                                    : 'border-term-border text-term-text-dim hover:border-term-text hover:text-term-text'
                                }`}
                        >
                            {preset}%
                        </button>
                    ))}
                </div>
            </div>

            {/* Center: Spacer */}
            <div className="flex-1" />

            {/* Right: Status */}
            <div className="flex items-center gap-3 text-term-text-dim text-[10px]">
                <span>Ready</span>
                <span className="opacity-50">|</span>
                <span>GPU</span>
            </div>
        </div>
    );
}
