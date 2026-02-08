import { useRef, useEffect, useState, useCallback } from 'react';
import { EffectType, EffectSettings } from '../types/effects';
import { PreviewMode, RenderOutput } from './Editor';

interface CanvasProps {
    sourceImage: string | null;
    sourceType: 'image' | 'video' | 'webcam' | null;
    activeEffect: EffectType;
    settings: EffectSettings;
    zoom: number;
    previewMode: PreviewMode;
    onFpsUpdate: (fps: number) => void;
    onOutputUpdate: (output: RenderOutput) => void;
    setIsProcessing: (processing: boolean) => void;
    onExportReady?: (getCanvas: () => HTMLCanvasElement | null) => void;
}

export function Canvas({
    sourceImage,
    sourceType,
    activeEffect,
    settings,
    zoom,
    previewMode,
    onFpsUpdate,
    onOutputUpdate,
    setIsProcessing,
    onExportReady,
}: CanvasProps) {
    const outputCanvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const animationRef = useRef<number>(0);
    const lastTimeRef = useRef<number>(0);
    const frameCountRef = useRef<number>(0);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (!onExportReady) return;
        onExportReady(() => outputCanvasRef.current);
    }, [onExportReady]);

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

    useEffect(() => {
        if (sourceType !== 'webcam') return;
        let stream: MediaStream | null = null;

        const startWebcam = async () => {
            try {
                setIsLoading(true);
                setError(null);
                stream = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 } });
                const video = document.createElement('video');
                video.srcObject = stream;
                video.onloadedmetadata = () => {
                    videoRef.current = video;
                    setDimensions({ width: video.videoWidth, height: video.videoHeight });
                    setIsLoading(false);
                    video.play();
                };
            } catch {
                setError('Failed to access webcam');
                setIsLoading(false);
            }
        };

        startWebcam();

        return () => {
            if (stream) stream.getTracks().forEach((track) => track.stop());
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current = null;
            }
        };
    }, [sourceType]);

    const render = useCallback(() => {
        const canvas = outputCanvasRef.current;
        const ctx = canvas?.getContext('2d');
        const source = imageRef.current || videoRef.current;
        if (!canvas || !ctx || !source || !dimensions.width || !dimensions.height) return;

        const cellSize = Math.max(1, Math.floor(settings.cellSize));
        const cols = Math.max(1, Math.floor(dimensions.width / cellSize));
        const rows = Math.max(1, Math.floor(dimensions.height / cellSize));

        canvas.width = cols * cellSize;
        canvas.height = rows * cellSize;

        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = cols;
        tempCanvas.height = rows;
        const tempCtx = tempCanvas.getContext('2d');
        if (!tempCtx) return;

        tempCtx.drawImage(source, 0, 0, cols, rows);
        const imageData = tempCtx.getImageData(0, 0, cols, rows);
        const pixels = imageData.data;

        if (previewMode === 'original') {
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
        } else if (previewMode === 'split') {
            const splitX = Math.floor(cols / 2);
            drawProcessed(ctx, pixels, cols, rows, cellSize, activeEffect, settings, splitX);
            ctx.drawImage(
                source,
                splitX * cellSize,
                0,
                canvas.width - splitX * cellSize,
                canvas.height,
                splitX * cellSize,
                0,
                canvas.width - splitX * cellSize,
                canvas.height
            );
            ctx.strokeStyle = '#00ff00';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(splitX * cellSize, 0);
            ctx.lineTo(splitX * cellSize, canvas.height);
            ctx.stroke();
        } else {
            drawProcessed(ctx, pixels, cols, rows, cellSize, activeEffect, settings, cols);
        }

        onOutputUpdate({
            dataUrl: canvas.toDataURL('image/png'),
            asciiText: generateAsciiText(pixels, cols, rows, settings),
        });

        const now = performance.now();
        frameCountRef.current++;
        if (now - lastTimeRef.current >= 1000) {
            onFpsUpdate(frameCountRef.current);
            frameCountRef.current = 0;
            lastTimeRef.current = now;
        }

        if (sourceType === 'video' || sourceType === 'webcam') {
            animationRef.current = requestAnimationFrame(render);
        }
    }, [activeEffect, dimensions.height, dimensions.width, onFpsUpdate, onOutputUpdate, previewMode, settings, sourceType]);

    useEffect(() => {
        if (!sourceImage || isLoading) return;
        setIsProcessing(true);
        lastTimeRef.current = performance.now();

        if (sourceType === 'image') {
            requestAnimationFrame(() => {
                render();
                setIsProcessing(false);
            });
        } else {
            animationRef.current = requestAnimationFrame(render);
        }

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
            setIsProcessing(false);
        };
    }, [sourceImage, isLoading, sourceType, render, setIsProcessing]);

    return (
        <div className="flex-1 bg-term-bg flex items-center justify-center overflow-auto p-4 relative">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-term-bg/80 z-10">
                    <div className="text-term-text-dim text-sm">Loading...</div>
                </div>
            )}
            {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-term-bg/80 z-10">
                    <div className="text-red-500 text-sm">{error}</div>
                </div>
            )}
            {!sourceImage && !isLoading && (
                <div className="text-center">
                    <p className="text-term-text-dim text-sm mb-2">Waiting Input</p>
                    <p className="text-term-text-dim text-xs opacity-60">Drop a file or capture a source</p>
                </div>
            )}

            {sourceImage && (
                <div className="relative" style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'center center' }}>
                    <canvas
                        ref={outputCanvasRef}
                        className="block"
                        style={{ imageRendering: 'pixelated', filter: settings.blur > 0 ? `blur(${settings.blur}px)` : 'none' }}
                    />
                </div>
            )}
        </div>
    );
}

const ASCII_STANDARD = ' .:-=+*#%@';
const ASCII_EXTENDED = " .':,;clodxkO0KXNWM";
const ASCII_BLOCKS = ' .:-=+*#%@';

function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
}

function getCharacterSet(type: string, custom: string): string {
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

function generateAsciiText(pixels: Uint8ClampedArray, cols: number, rows: number, settings: EffectSettings): string {
    const charset = getCharacterSet(settings.characterSet, settings.customCharacters);
    const lines: string[] = [];

    for (let y = 0; y < rows; y++) {
        let line = '';
        for (let x = 0; x < cols; x++) {
            const i = (y * cols + x) * 4;
            const brightness = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3 / 255;
            const index = Math.floor(brightness * (charset.length - 1));
            line += charset[index] ?? ' ';
        }
        lines.push(line);
    }

    return lines.join('\n');
}

function drawProcessed(
    ctx: CanvasRenderingContext2D,
    pixels: Uint8ClampedArray,
    cols: number,
    rows: number,
    cellSize: number,
    effect: EffectType,
    settings: EffectSettings,
    renderCols: number
) {
    const charset = getCharacterSet(settings.characterSet, settings.customCharacters);

    ctx.fillStyle = settings.bgColor;
    ctx.fillRect(0, 0, cols * cellSize, rows * cellSize);
    ctx.font = `${cellSize * settings.spacing}px "IBM Plex Mono", monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < renderCols; x++) {
            const i = (y * cols + x) * 4;
            let r = pixels[i];
            let g = pixels[i + 1];
            let b = pixels[i + 2];

            if (settings.invert || effect === 'invert') {
                r = 255 - r;
                g = 255 - g;
                b = 255 - b;
            }

            if (settings.noise > 0 && Math.random() < settings.noise) {
                const n = (Math.random() - 0.5) * 80;
                r = clamp(r + n, 0, 255);
                g = clamp(g + n, 0, 255);
                b = clamp(b + n, 0, 255);
            }

            const brightness = (r + g + b) / 3 / 255;
            const normalized = clamp(
                (brightness + settings.brightness / 100) * ((settings.contrast + 100) / 100),
                0,
                1
            );

            if (effect === 'convolution') {
                const kernel = [
                    0, -1, 0,
                    -1, 5, -1,
                    0, -1, 0,
                ];
                let rr = 0;
                let gg = 0;
                let bb = 0;

                for (let ky = -1; ky <= 1; ky++) {
                    for (let kx = -1; kx <= 1; kx++) {
                        const sx = clamp(x + kx, 0, cols - 1);
                        const sy = clamp(y + ky, 0, rows - 1);
                        const si = (sy * cols + sx) * 4;
                        const w = kernel[(ky + 1) * 3 + (kx + 1)];
                        rr += pixels[si] * w;
                        gg += pixels[si + 1] * w;
                        bb += pixels[si + 2] * w;
                    }
                }

                ctx.fillStyle = settings.colored
                    ? `rgb(${clamp(rr, 0, 255)}, ${clamp(gg, 0, 255)}, ${clamp(bb, 0, 255)})`
                    : `rgb(${normalized * 255}, ${normalized * 255}, ${normalized * 255})`;
                ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                continue;
            }

            if (effect === 'edge-detection' || effect === 'edge-lines') {
                let edgeStrength = 0;
                if (x > 0 && x < cols - 1 && y > 0 && y < rows - 1) {
                    const idxL = (y * cols + (x - 1)) * 4;
                    const idxR = (y * cols + (x + 1)) * 4;
                    const idxT = ((y - 1) * cols + x) * 4;
                    const idxB = ((y + 1) * cols + x) * 4;
                    const gx = ((pixels[idxR] + pixels[idxR + 1] + pixels[idxR + 2]) - (pixels[idxL] + pixels[idxL + 1] + pixels[idxL + 2])) / 3;
                    const gy = ((pixels[idxB] + pixels[idxB + 1] + pixels[idxB + 2]) - (pixels[idxT] + pixels[idxT + 1] + pixels[idxT + 2])) / 3;
                    edgeStrength = Math.sqrt(gx * gx + gy * gy) / 255;
                }

                if (edgeStrength > settings.threshold) {
                    ctx.fillStyle = settings.fgColor;
                    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                }
                continue;
            }

            if (effect === 'matrix-dots') {
                const radius = Math.max(0.5, normalized * (cellSize * 0.45));
                ctx.fillStyle = settings.colored ? `rgb(${r}, ${g}, ${b})` : settings.fgColor;
                ctx.beginPath();
                ctx.arc(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2, radius, 0, Math.PI * 2);
                ctx.fill();
                continue;
            }

            if (effect === 'half-tone' || effect === 'halftone-dots') {
                const radius = (normalized * cellSize) / 2;
                ctx.fillStyle = settings.colored ? `rgb(${r}, ${g}, ${b})` : settings.fgColor;
                ctx.beginPath();
                ctx.arc(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2, radius * 0.5, 0, Math.PI * 2);
                ctx.fill();
                continue;
            }

            if (effect === 'crosses') {
                const radius = (normalized * cellSize) / 2;
                ctx.fillStyle = settings.colored ? `rgb(${r}, ${g}, ${b})` : settings.fgColor;
                ctx.fillRect(x * cellSize + cellSize / 2 - 1, y * cellSize + cellSize / 2 - radius / 2, 2, radius);
                ctx.fillRect(x * cellSize + cellSize / 2 - radius / 2, y * cellSize + cellSize / 2 - 1, radius, 2);
                continue;
            }

            if (effect === 'threshold') {
                ctx.fillStyle = normalized > settings.threshold ? '#ffffff' : '#000000';
                ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                continue;
            }

            if (effect === 'pixelate' || effect === 'mosaic' || effect === 'pixel-grid' || effect === 'led') {
                if (effect === 'led') {
                    const radius = Math.max(1, cellSize * 0.35);
                    ctx.fillStyle = settings.colored ? `rgb(${r}, ${g}, ${b})` : settings.fgColor;
                    ctx.beginPath();
                    ctx.arc(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2, radius, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    ctx.fillStyle = settings.colored
                        ? `rgb(${r}, ${g}, ${b})`
                        : `rgb(${normalized * 255}, ${normalized * 255}, ${normalized * 255})`;
                    const gap = effect === 'pixel-grid' ? 1 : 0;
                    ctx.fillRect(x * cellSize + gap, y * cellSize + gap, cellSize - gap * 2, cellSize - gap * 2);
                }
                continue;
            }

            const char = charset[Math.floor(normalized * (charset.length - 1))] ?? ' ';
            ctx.fillStyle = settings.colored ? `rgb(${r}, ${g}, ${b})` : settings.fgColor;
            ctx.fillText(char, x * cellSize + cellSize / 2, y * cellSize + cellSize / 2);
        }
    }

    if (settings.noise > 0) {
        const overlayAlpha = Math.min(0.3, settings.noise * 0.25);
        ctx.fillStyle = `rgba(255,255,255,${overlayAlpha})`;
        const count = Math.floor(cols * rows * settings.noise);
        for (let n = 0; n < count; n++) {
            const nx = Math.floor(Math.random() * cols) * cellSize;
            const ny = Math.floor(Math.random() * rows) * cellSize;
            ctx.fillRect(nx, ny, 1, 1);
        }
    }
}
