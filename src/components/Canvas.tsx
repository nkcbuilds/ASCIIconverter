import { useRef, useEffect, useState, useCallback, MutableRefObject } from 'react';
import { EffectType, EffectSettings } from '../types/effects';
import { PreviewMode } from './Editor';

interface CanvasProps {
    sourceImage: string | null;
    sourceType: 'image' | 'video' | 'webcam' | null;
    activeEffect: EffectType;
    settings: EffectSettings;
    zoom: number;
    previewMode: PreviewMode;
    onFpsUpdate: (fps: number) => void;
    setIsProcessing: (processing: boolean) => void;
    onExportReady?: (getCanvas: () => HTMLCanvasElement | null) => void;
}

interface RenderGrid {
    cellSize: number;
    cols: number;
    rows: number;
}

const MAX_RENDER_CELLS = 120000;
const ASCII_STANDARD = ' .:-=+*#%@';
const ASCII_EXTENDED = " .':,;clodxkO0KXNWM";
const ASCII_BLOCKS = ' .:-=+*#%@';

export function Canvas({
    sourceImage,
    sourceType,
    activeEffect,
    settings,
    zoom,
    previewMode,
    onFpsUpdate,
    setIsProcessing,
    onExportReady,
}: CanvasProps) {
    const outputCanvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const sampleCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const sampleCtxRef = useRef<CanvasRenderingContext2D | null>(null);
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

        const grid = getRenderGrid(dimensions.width, dimensions.height, settings.cellSize);
        const renderWidth = grid.cols * grid.cellSize;
        const renderHeight = grid.rows * grid.cellSize;

        if (canvas.width !== renderWidth || canvas.height !== renderHeight) {
            canvas.width = renderWidth;
            canvas.height = renderHeight;
        }

        const sampleCanvas = ensureSampleCanvas(sampleCanvasRef, sampleCtxRef, grid.cols, grid.rows);
        const sampleCtx = sampleCtxRef.current;
        if (!sampleCanvas || !sampleCtx) return;

        sampleCtx.drawImage(source, 0, 0, grid.cols, grid.rows);
        const pixels = sampleCtx.getImageData(0, 0, grid.cols, grid.rows).data;
        const sourceDimensions = getSourceDimensions(source);

        if (previewMode === 'original') {
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(source, 0, 0, sourceDimensions.width, sourceDimensions.height, 0, 0, canvas.width, canvas.height);
        } else if (previewMode === 'split') {
            const splitX = Math.floor(grid.cols / 2);
            drawProcessed(ctx, pixels, grid.cols, grid.rows, grid.cellSize, activeEffect, settings, splitX);

            const splitRatio = splitX / grid.cols;
            const sourceSplitX = Math.floor(sourceDimensions.width * splitRatio);
            ctx.drawImage(
                source,
                sourceSplitX,
                0,
                sourceDimensions.width - sourceSplitX,
                sourceDimensions.height,
                splitX * grid.cellSize,
                0,
                canvas.width - splitX * grid.cellSize,
                canvas.height
            );
            ctx.strokeStyle = '#00ff00';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(splitX * grid.cellSize, 0);
            ctx.lineTo(splitX * grid.cellSize, canvas.height);
            ctx.stroke();
        } else {
            drawProcessed(ctx, pixels, grid.cols, grid.rows, grid.cellSize, activeEffect, settings, grid.cols);
        }

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
    }, [activeEffect, dimensions.height, dimensions.width, onFpsUpdate, previewMode, settings, sourceType]);

    useEffect(() => {
        if (!sourceImage || isLoading) return;
        setIsProcessing(true);
        lastTimeRef.current = performance.now();
        frameCountRef.current = 0;

        if (sourceType === 'image') {
            render();
            onFpsUpdate(0);
            setIsProcessing(false);
            return;
        }

        animationRef.current = requestAnimationFrame(render);
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
            setIsProcessing(false);
        };
    }, [isLoading, onFpsUpdate, render, setIsProcessing, sourceImage, sourceType]);

    return (
        <div className="flex-1 min-w-0 min-h-0 bg-term-bg flex items-center justify-center overflow-auto p-2 relative">
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
                    <p className="text-term-text-dim text-[18px] mb-1">Waiting Input</p>
                    <p className="text-term-text-dim text-[14px] opacity-60">Drop a file or capture a source</p>
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

function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
}

function getRenderGrid(width: number, height: number, requestedCellSize: number): RenderGrid {
    let cellSize = Math.max(1, Math.floor(requestedCellSize));
    let cols = Math.max(1, Math.floor(width / cellSize));
    let rows = Math.max(1, Math.floor(height / cellSize));

    const totalCells = cols * rows;
    if (totalCells > MAX_RENDER_CELLS) {
        const scale = Math.sqrt(totalCells / MAX_RENDER_CELLS);
        cellSize = Math.max(cellSize, Math.ceil(cellSize * scale));
        cols = Math.max(1, Math.floor(width / cellSize));
        rows = Math.max(1, Math.floor(height / cellSize));
    }

    return { cellSize, cols, rows };
}

function getSourceDimensions(source: HTMLImageElement | HTMLVideoElement): { width: number; height: number } {
    if (source instanceof HTMLVideoElement) {
        return { width: source.videoWidth || 1, height: source.videoHeight || 1 };
    }
    return { width: source.naturalWidth || source.width || 1, height: source.naturalHeight || source.height || 1 };
}

function ensureSampleCanvas(
    sampleCanvasRef: MutableRefObject<HTMLCanvasElement | null>,
    sampleCtxRef: MutableRefObject<CanvasRenderingContext2D | null>,
    cols: number,
    rows: number
): HTMLCanvasElement | null {
    if (!sampleCanvasRef.current) {
        sampleCanvasRef.current = document.createElement('canvas');
    }

    const sampleCanvas = sampleCanvasRef.current;
    if (sampleCanvas.width !== cols || sampleCanvas.height !== rows || !sampleCtxRef.current) {
        sampleCanvas.width = cols;
        sampleCanvas.height = rows;
        sampleCtxRef.current = sampleCanvas.getContext('2d');
    }

    return sampleCanvas;
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

function toneMap(luma: number, settings: EffectSettings): number {
    const contrast = (settings.contrast + 100) / 100;
    const brightness = settings.brightness / 100;
    return clamp((luma - 0.5) * contrast + 0.5 + brightness, 0, 1);
}

function bayerThreshold(x: number, y: number): number {
    const matrix = [
        0, 8, 2, 10,
        12, 4, 14, 6,
        3, 11, 1, 9,
        15, 7, 13, 5,
    ];
    return matrix[(y & 3) * 4 + (x & 3)] / 16;
}

function quantizeChannel(value: number, levels: number): number {
    if (levels <= 1) return value;
    const step = 255 / (levels - 1);
    return clamp(Math.round(value / step) * step, 0, 255);
}

function parseHexColor(hex: string): { r: number; g: number; b: number } | null {
    const clean = hex.replace('#', '');
    if (clean.length !== 6) return null;
    const r = parseInt(clean.slice(0, 2), 16);
    const g = parseInt(clean.slice(2, 4), 16);
    const b = parseInt(clean.slice(4, 6), 16);
    if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) return null;
    return { r, g, b };
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
    const totalCells = cols * rows;
    const tones = new Float32Array(totalCells);
    const red = new Uint8ClampedArray(totalCells);
    const green = new Uint8ClampedArray(totalCells);
    const blue = new Uint8ClampedArray(totalCells);
    const shouldInvert = settings.invert || effect === 'invert';
    const matrixColor = parseHexColor(settings.fgColor) ?? { r: 0, g: 255, b: 65 };
    const now = performance.now();

    ctx.fillStyle = settings.bgColor;
    ctx.fillRect(0, 0, cols * cellSize, rows * cellSize);
    ctx.font = `${cellSize * settings.spacing}px "IBM Plex Mono", monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            const i = (y * cols + x) * 4;
            let r = pixels[i];
            let g = pixels[i + 1];
            let b = pixels[i + 2];

            if (shouldInvert) {
                r = 255 - r;
                g = 255 - g;
                b = 255 - b;
            }

            const idx = y * cols + x;
            red[idx] = r;
            green[idx] = g;
            blue[idx] = b;
            tones[idx] = toneMap((r + g + b) / (3 * 255), settings);
        }
    }

    switch (effect) {
        case 'convolution': {
            const kernel = [
                0, -1, 0,
                -1, 5, -1,
                0, -1, 0,
            ];
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < renderCols; x++) {
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

                    let cr = clamp(rr, 0, 255);
                    let cg = clamp(gg, 0, 255);
                    let cb = clamp(bb, 0, 255);
                    if (shouldInvert) {
                        cr = 255 - cr;
                        cg = 255 - cg;
                        cb = 255 - cb;
                    }

                    if (settings.colored) {
                        ctx.fillStyle = `rgb(${cr}, ${cg}, ${cb})`;
                    } else {
                        const convTone = toneMap((cr + cg + cb) / (3 * 255), settings);
                        const gray = Math.floor(convTone * 255);
                        ctx.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
                    }
                    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                }
            }
            break;
        }

        case 'edge-detection':
        case 'edge-lines': {
            for (let y = 1; y < rows - 1; y++) {
                for (let x = 1; x < Math.min(renderCols, cols - 1); x++) {
                    const idxL = y * cols + (x - 1);
                    const idxR = y * cols + (x + 1);
                    const idxT = (y - 1) * cols + x;
                    const idxB = (y + 1) * cols + x;
                    const gx = tones[idxR] - tones[idxL];
                    const gy = tones[idxB] - tones[idxT];
                    const edgeStrength = Math.sqrt(gx * gx + gy * gy);

                    if (edgeStrength <= settings.threshold) continue;

                    if (effect === 'edge-lines') {
                        let char = '|';
                        if (Math.abs(gy) > Math.abs(gx) * 1.5) {
                            char = '-';
                        } else if (gx * gy > 0) {
                            char = '\\';
                        } else if (gx * gy < 0) {
                            char = '/';
                        }
                        ctx.fillStyle = settings.fgColor;
                        ctx.fillText(char, x * cellSize + cellSize / 2, y * cellSize + cellSize / 2);
                    } else {
                        ctx.fillStyle = settings.fgColor;
                        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                    }
                }
            }
            break;
        }

        case 'threshold': {
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < renderCols; x++) {
                    const idx = y * cols + x;
                    ctx.fillStyle = tones[idx] > settings.threshold ? settings.fgColor : settings.bgColor;
                    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                }
            }
            break;
        }

        case 'matrix-dots': {
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < renderCols; x++) {
                    const idx = y * cols + x;
                    const radius = Math.max(0.5, tones[idx] * (cellSize * 0.45));
                    ctx.fillStyle = settings.colored ? `rgb(${red[idx]}, ${green[idx]}, ${blue[idx]})` : settings.fgColor;
                    ctx.beginPath();
                    ctx.arc(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2, radius, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            break;
        }

        case 'matrix-rain': {
            const trail = Math.max(4, Math.floor(settings.trailLength));
            const speed = Math.max(0.15, settings.speed) * 0.04;
            const randomness = settings.randomization * 0.8;

            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < renderCols; x++) {
                    const idx = y * cols + x;
                    const head = (now * speed + x * (2 + randomness * 9)) % (rows + trail);
                    const distance = (y - head + rows + trail) % (rows + trail);
                    const trailStrength = clamp(1 - distance / trail, 0, 1);
                    const mixTone = clamp(tones[idx] * 0.45 + trailStrength * 0.9, 0, 1);
                    const charIndex = Math.floor(clamp(mixTone + bayerThreshold(x, y) * 0.1, 0, 1) * (charset.length - 1));
                    const char = charset[charIndex] ?? ' ';

                    if (settings.colored) {
                        ctx.fillStyle = `rgb(${red[idx]}, ${green[idx]}, ${blue[idx]})`;
                    } else {
                        const glow = Math.floor(70 + mixTone * 185);
                        const gr = Math.floor(matrixColor.r * (glow / 255));
                        const gg = Math.floor(matrixColor.g * (glow / 255));
                        const gb = Math.floor(matrixColor.b * (glow / 255));
                        ctx.fillStyle = `rgb(${gr}, ${gg}, ${gb})`;
                    }

                    ctx.fillText(char, x * cellSize + cellSize / 2, y * cellSize + cellSize / 2);
                }
            }
            break;
        }

        case 'half-tone': {
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < renderCols; x++) {
                    const idx = y * cols + x;
                    const radius = Math.max(0.1, (1 - tones[idx]) * cellSize * 0.45);
                    ctx.fillStyle = settings.colored ? `rgb(${red[idx]}, ${green[idx]}, ${blue[idx]})` : settings.fgColor;
                    ctx.beginPath();
                    ctx.arc(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2, radius, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            break;
        }

        case 'halftone-dots': {
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < renderCols; x++) {
                    const idx = y * cols + x;
                    const width = Math.max(1, (1 - tones[idx]) * cellSize * 0.85);
                    const lineHeight = Math.max(1, cellSize * 0.16);
                    const centerX = x * cellSize + cellSize / 2 + (y % 2 === 0 ? 0 : cellSize * 0.08);
                    ctx.fillStyle = settings.colored ? `rgb(${red[idx]}, ${green[idx]}, ${blue[idx]})` : settings.fgColor;
                    ctx.fillRect(centerX - width / 2, y * cellSize + cellSize / 2 - lineHeight / 2, width, lineHeight);
                }
            }
            break;
        }

        case 'crosses': {
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < renderCols; x++) {
                    const idx = y * cols + x;
                    const size = Math.max(1, (1 - tones[idx]) * cellSize * 0.9);
                    const thickness = Math.max(1, cellSize * 0.12);
                    const cx = x * cellSize + cellSize / 2;
                    const cy = y * cellSize + cellSize / 2;
                    ctx.fillStyle = settings.colored ? `rgb(${red[idx]}, ${green[idx]}, ${blue[idx]})` : settings.fgColor;
                    ctx.fillRect(cx - thickness / 2, cy - size / 2, thickness, size);
                    ctx.fillRect(cx - size / 2, cy - thickness / 2, size, thickness);
                }
            }
            break;
        }

        case 'pixelate':
        case 'pixel-grid':
        case 'mosaic':
        case 'invert': {
            const gap = effect === 'pixel-grid' ? 1 : 0;
            const levels = effect === 'mosaic' ? 5 : 0;
            const forceColor = effect === 'invert';

            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < renderCols; x++) {
                    const idx = y * cols + x;
                    let rr = red[idx];
                    let gg = green[idx];
                    let bb = blue[idx];

                    if (levels > 0) {
                        rr = quantizeChannel(rr, levels);
                        gg = quantizeChannel(gg, levels);
                        bb = quantizeChannel(bb, levels);
                    }

                    if (settings.colored || forceColor) {
                        ctx.fillStyle = `rgb(${rr}, ${gg}, ${bb})`;
                    } else {
                        const gray = Math.floor(tones[idx] * 255);
                        ctx.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
                    }

                    ctx.fillRect(x * cellSize + gap, y * cellSize + gap, cellSize - gap * 2, cellSize - gap * 2);
                }
            }
            break;
        }

        case 'led': {
            const ledColor = parseHexColor(settings.fgColor) ?? { r: 204, g: 204, b: 204 };
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < renderCols; x++) {
                    const idx = y * cols + x;
                    const intensity = tones[idx];
                    const radius = Math.max(1, cellSize * (0.2 + intensity * 0.26));
                    const cx = x * cellSize + cellSize / 2;
                    const cy = y * cellSize + cellSize / 2;

                    if (settings.colored) {
                        ctx.fillStyle = `rgb(${red[idx]}, ${green[idx]}, ${blue[idx]})`;
                    } else {
                        const rr = Math.floor(ledColor.r * (0.3 + intensity * 0.7));
                        const gg = Math.floor(ledColor.g * (0.3 + intensity * 0.7));
                        const bb = Math.floor(ledColor.b * (0.3 + intensity * 0.7));
                        ctx.fillStyle = `rgb(${rr}, ${gg}, ${bb})`;
                    }

                    ctx.beginPath();
                    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
                    ctx.fill();

                    ctx.fillStyle = 'rgba(255,255,255,0.16)';
                    ctx.beginPath();
                    ctx.arc(cx - radius * 0.25, cy - radius * 0.25, Math.max(0.5, radius * 0.25), 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            break;
        }

        case 'dithering': {
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < renderCols; x++) {
                    const idx = y * cols + x;
                    const level = tones[idx] * (charset.length - 1);
                    const base = Math.floor(level);
                    const frac = level - base;
                    const step = frac > bayerThreshold(x, y) ? 1 : 0;
                    const char = charset[Math.min(charset.length - 1, base + step)] ?? ' ';
                    ctx.fillStyle = settings.colored ? `rgb(${red[idx]}, ${green[idx]}, ${blue[idx]})` : settings.fgColor;
                    ctx.fillText(char, x * cellSize + cellSize / 2, y * cellSize + cellSize / 2);
                }
            }
            break;
        }

        case 'ascii':
        default: {
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < renderCols; x++) {
                    const idx = y * cols + x;
                    const char = charset[Math.floor(tones[idx] * (charset.length - 1))] ?? ' ';
                    ctx.fillStyle = settings.colored ? `rgb(${red[idx]}, ${green[idx]}, ${blue[idx]})` : settings.fgColor;
                    ctx.fillText(char, x * cellSize + cellSize / 2, y * cellSize + cellSize / 2);
                }
            }
            break;
        }
    }

    if (settings.noise > 0) {
        const overlayAlpha = Math.min(0.3, settings.noise * 0.25);
        ctx.fillStyle = `rgba(255,255,255,${overlayAlpha})`;
        const count = Math.min(20000, Math.floor(cols * rows * settings.noise));
        for (let n = 0; n < count; n++) {
            const nx = Math.floor(Math.random() * cols) * cellSize;
            const ny = Math.floor(Math.random() * rows) * cellSize;
            ctx.fillRect(nx, ny, 1, 1);
        }
    }

    if (settings.scanlines) {
        ctx.fillStyle = 'rgba(0,0,0,0.15)';
        for (let y = 0; y < rows * cellSize; y += 2) {
            ctx.fillRect(0, y, cols * cellSize, 1);
        }
    }
}
