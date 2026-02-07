import { useRef, useEffect, useState, useCallback } from 'react';
import { EffectType, EffectSettings } from '../types/effects';

interface CanvasProps {
    sourceImage: string | null;
    sourceType: 'image' | 'video' | 'webcam' | null;
    activeEffect: EffectType;
    settings: EffectSettings;
    zoom: number;
    onFpsUpdate: (fps: number) => void;
    setIsProcessing: (processing: boolean) => void;
}

export function Canvas({
    sourceImage,
    sourceType,
    activeEffect,
    settings,
    zoom,
    onFpsUpdate,
    setIsProcessing,
}: CanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const outputCanvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const animationRef = useRef<number>(0);
    const lastTimeRef = useRef<number>(0);
    const frameCountRef = useRef<number>(0);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // Load source image/video
    useEffect(() => {
        if (!sourceImage || sourceImage === 'webcam') return;

        setIsLoading(true);
        setError(null);

        if (sourceType === 'image') {
            const img = new Image();
            img.onload = () => {
                imageRef.current = img;
                setDimensions({ width: img.width, height: img.height });
                setIsLoading(false);
            };
            img.onerror = () => {
                setError('Failed to load image');
                setIsLoading(false);
            };
            img.src = sourceImage;
        } else if (sourceType === 'video') {
            const video = document.createElement('video');
            video.onloadedmetadata = () => {
                videoRef.current = video;
                setDimensions({ width: video.videoWidth, height: video.videoHeight });
                setIsLoading(false);
                video.play();
            };
            video.onerror = () => {
                setError('Failed to load video');
                setIsLoading(false);
            };
            video.src = sourceImage;
            video.loop = true;
            video.muted = true;
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current = null;
            }
        };
    }, [sourceImage, sourceType]);

    // Handle webcam
    useEffect(() => {
        if (sourceType !== 'webcam') return;

        let stream: MediaStream | null = null;

        const startWebcam = async () => {
            try {
                setIsLoading(true);
                stream = await navigator.mediaDevices.getUserMedia({
                    video: { width: 1280, height: 720 }
                });
                const video = document.createElement('video');
                video.srcObject = stream;
                video.onloadedmetadata = () => {
                    videoRef.current = video;
                    setDimensions({ width: video.videoWidth, height: video.videoHeight });
                    setIsLoading(false);
                    video.play();
                };
            } catch (err) {
                setError('Failed to access webcam');
                setIsLoading(false);
            }
        };

        startWebcam();

        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current = null;
            }
        };
    }, [sourceType]);

    // Apply effect and render
    const render = useCallback(() => {
        const canvas = outputCanvasRef.current;
        const ctx = canvas?.getContext('2d');

        if (!canvas || !ctx) return;

        // Get source
        const source = imageRef.current || videoRef.current;
        if (!source) return;

        // Set canvas size based on cell size
        const cellSize = settings.cellSize;
        const cols = Math.floor(dimensions.width / cellSize);
        const rows = Math.floor(dimensions.height / cellSize);

        canvas.width = cols * cellSize;
        canvas.height = rows * cellSize;

        // Draw source to temp canvas for pixel access
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = cols;
        tempCanvas.height = rows;
        const tempCtx = tempCanvas.getContext('2d')!;
        tempCtx.drawImage(source, 0, 0, cols, rows);

        const imageData = tempCtx.getImageData(0, 0, cols, rows);
        const pixels = imageData.data;

        // Clear output canvas
        ctx.fillStyle = settings.bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Apply effect
        applyEffect(ctx, pixels, cols, rows, cellSize, activeEffect, settings);

        // Update FPS
        const now = performance.now();
        frameCountRef.current++;
        if (now - lastTimeRef.current >= 1000) {
            onFpsUpdate(frameCountRef.current);
            frameCountRef.current = 0;
            lastTimeRef.current = now;
        }

        // Continue animation for video/webcam
        if (sourceType === 'video' || sourceType === 'webcam') {
            animationRef.current = requestAnimationFrame(render);
        }
    }, [dimensions, activeEffect, settings, sourceType, onFpsUpdate]);

    // Start rendering when source is ready
    useEffect(() => {
        if (!sourceImage || isLoading) return;

        setIsProcessing(true);
        lastTimeRef.current = performance.now();

        if (sourceType === 'image') {
            // Single render for images
            requestAnimationFrame(() => {
                render();
                setIsProcessing(false);
            });
        } else {
            // Animation loop for video/webcam
            animationRef.current = requestAnimationFrame(render);
        }

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            setIsProcessing(false);
        };
    }, [sourceImage, isLoading, sourceType, render, setIsProcessing]);

    return (
        <div className="flex-1 bg-term-bg flex items-center justify-center overflow-auto p-4 relative">
            {/* Loading State */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-term-bg/80 z-10">
                    <div className="text-term-text-dim text-sm">Loading...</div>
                </div>
            )}

            {/* Error State */}
            {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-term-bg/80 z-10">
                    <div className="text-red-500 text-sm">{error}</div>
                </div>
            )}

            {/* Empty State */}
            {!sourceImage && !isLoading && (
                <div className="text-center">
                    <p className="text-term-text-dim text-sm mb-2">Waiting Input</p>
                    <p className="text-term-text-dim text-xs opacity-60">
                        Drop a file or capture a source
                    </p>
                </div>
            )}

            {/* Output Canvas */}
            {sourceImage && (
                <div
                    className="relative"
                    style={{
                        transform: `scale(${zoom / 100})`,
                        transformOrigin: 'center center',
                    }}
                >
                    <canvas
                        ref={outputCanvasRef}
                        className="block"
                        style={{
                            imageRendering: 'pixelated',
                            filter: settings.scanlines
                                ? 'url(#scanlines)'
                                : settings.blur > 0
                                    ? `blur(${settings.blur}px)`
                                    : 'none',
                        }}
                    />

                    {/* Scanlines SVG Filter */}
                    <svg className="absolute w-0 h-0">
                        <filter id="scanlines">
                            <feColorMatrix type="saturate" values="1" />
                        </filter>
                    </svg>

                    {/* Scanlines Overlay */}
                    {settings.scanlines && (
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 1px, rgba(0,0,0,0.3) 1px, rgba(0,0,0,0.3) 2px)',
                            }}
                        />
                    )}
                </div>
            )}

            {/* Hidden reference canvas */}
            <canvas ref={canvasRef} className="hidden" />
        </div>
    );
}

// ASCII character sets
const ASCII_STANDARD = ' .:-=+*#%@';
const ASCII_EXTENDED = ' .\':,;clodxkO0KXNWM';
const ASCII_BLOCKS = ' ░▒▓█';

function getCharacterSet(type: string, custom: string): string {
    switch (type) {
        case 'extended': return ASCII_EXTENDED;
        case 'blocks': return ASCII_BLOCKS;
        case 'custom': return custom || ASCII_STANDARD;
        default: return ASCII_STANDARD;
    }
}

function applyEffect(
    ctx: CanvasRenderingContext2D,
    pixels: Uint8ClampedArray,
    cols: number,
    rows: number,
    cellSize: number,
    effect: EffectType,
    settings: EffectSettings
) {
    const charset = getCharacterSet(settings.characterSet, settings.customCharacters);

    // Apply brightness/contrast adjustments
    const adjustPixel = (r: number, g: number, b: number) => {
        const brightness = settings.brightness / 100;
        const contrast = (settings.contrast + 100) / 100;

        r = ((r / 255 - 0.5) * contrast + 0.5 + brightness) * 255;
        g = ((g / 255 - 0.5) * contrast + 0.5 + brightness) * 255;
        b = ((b / 255 - 0.5) * contrast + 0.5 + brightness) * 255;

        if (settings.invert) {
            r = 255 - r;
            g = 255 - g;
            b = 255 - b;
        }

        return [
            Math.max(0, Math.min(255, r)),
            Math.max(0, Math.min(255, g)),
            Math.max(0, Math.min(255, b)),
        ];
    };

    ctx.font = `${cellSize * settings.spacing}px "IBM Plex Mono", monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Add glow effect
    if (settings.glow > 0) {
        ctx.shadowColor = settings.fgColor;
        ctx.shadowBlur = settings.glow * 10;
    }

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            const i = (y * cols + x) * 4;
            let [r, g, b] = adjustPixel(pixels[i], pixels[i + 1], pixels[i + 2]);

            const brightness = (r + g + b) / 3 / 255;

            switch (effect) {
                case 'ascii':
                case 'dithering':
                case 'matrix-rain': {
                    const charIndex = Math.floor(brightness * (charset.length - 1));
                    const char = charset[charIndex];

                    if (settings.colored) {
                        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                    } else {
                        // Fade color based on brightness
                        const alpha = brightness * settings.fxOpacity + (1 - settings.fxOpacity);
                        ctx.fillStyle = settings.fgColor + Math.floor(alpha * 255).toString(16).padStart(2, '0');
                    }

                    ctx.fillText(char, x * cellSize + cellSize / 2, y * cellSize + cellSize / 2);
                    break;
                }

                case 'pixelate':
                case 'mosaic':
                case 'pixel-grid': {
                    if (settings.colored) {
                        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                    } else {
                        const gray = Math.floor(brightness * 255);
                        ctx.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
                    }

                    const gap = effect === 'pixel-grid' ? 1 : 0;
                    ctx.fillRect(
                        x * cellSize + gap,
                        y * cellSize + gap,
                        cellSize - gap * 2,
                        cellSize - gap * 2
                    );
                    break;
                }

                case 'threshold': {
                    const isWhite = brightness > settings.threshold;
                    ctx.fillStyle = isWhite ? '#ffffff' : '#000000';
                    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                    break;
                }

                case 'halftone-dots':
                case 'crosses': {
                    const radius = (brightness * cellSize) / 2;

                    if (settings.colored) {
                        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                    } else {
                        ctx.fillStyle = settings.fgColor;
                    }

                    if (effect === 'crosses') {
                        const size = radius * 0.8;
                        ctx.fillRect(x * cellSize + cellSize / 2 - size / 6, y * cellSize + cellSize / 2 - size / 2, size / 3, size);
                        ctx.fillRect(x * cellSize + cellSize / 2 - size / 2, y * cellSize + cellSize / 2 - size / 6, size, size / 3);
                    } else {
                        ctx.beginPath();
                        ctx.arc(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2, radius * 0.4, 0, Math.PI * 2);
                        ctx.fill();
                    }
                    break;
                }

                case 'led': {
                    if (settings.colored) {
                        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                    } else {
                        const intensity = brightness;
                        ctx.fillStyle = `rgba(${parseInt(settings.fgColor.slice(1, 3), 16)}, ${parseInt(settings.fgColor.slice(3, 5), 16)}, ${parseInt(settings.fgColor.slice(5, 7), 16)}, ${intensity})`;
                    }

                    ctx.beginPath();
                    ctx.arc(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2, cellSize * 0.4, 0, Math.PI * 2);
                    ctx.fill();
                    break;
                }

                case 'edge-detection':
                case 'edge-lines': {
                    // Simple edge detection using neighbors
                    let edgeStrength = 0;
                    if (x > 0 && x < cols - 1 && y > 0 && y < rows - 1) {
                        const getPixelBrightness = (px: number, py: number) => {
                            const pi = (py * cols + px) * 4;
                            return (pixels[pi] + pixels[pi + 1] + pixels[pi + 2]) / 3;
                        };

                        const gx = getPixelBrightness(x + 1, y) - getPixelBrightness(x - 1, y);
                        const gy = getPixelBrightness(x, y + 1) - getPixelBrightness(x, y - 1);
                        edgeStrength = Math.sqrt(gx * gx + gy * gy) / 255;
                    }

                    if (edgeStrength > settings.threshold) {
                        ctx.fillStyle = settings.fgColor;
                        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                    }
                    break;
                }

                case 'invert': {
                    ctx.fillStyle = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
                    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                    break;
                }

                default: {
                    // Default: colored pixels
                    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                }
            }
        }
    }

    // Reset shadow
    ctx.shadowBlur = 0;
}
