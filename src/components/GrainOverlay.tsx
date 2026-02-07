export function GrainOverlay() {
    return (
        <div className="grain-overlay" aria-hidden="true">
            <svg className="hidden">
                <filter id="noise-filter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.65"
                        numOctaves="3"
                        stitchTiles="stitch"
                    />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
            </svg>
        </div>
    );
}
