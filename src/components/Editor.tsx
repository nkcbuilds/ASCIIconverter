import { useState, useCallback } from 'react';
import { LeftSidebar } from './LeftSidebar';
import { Canvas } from './Canvas';
import { ModelViewer } from './ModelViewer';
import { RightSidebar } from './RightSidebar';
import { TopBar } from './TopBar';
import { BottomBar } from './BottomBar';
import { EffectType, EffectSettings, DEFAULT_SETTINGS, Preset, SourceType } from '../types/effects';

export type PreviewMode = 'processed' | 'split' | 'original';

export function Editor() {
    const [sourceImage, setSourceImage] = useState<string | null>(null);
    const [sourceType, setSourceType] = useState<SourceType>(null);
    const [activeEffect, setActiveEffect] = useState<EffectType>('ascii');
    const [settings, setSettings] = useState<EffectSettings>(DEFAULT_SETTINGS);
    const [isProcessing, setIsProcessing] = useState(false);
    const [fps, setFps] = useState(0);
    const [zoom, setZoom] = useState(100);
    const [previewMode, setPreviewMode] = useState<PreviewMode>('processed');
    const [exportCanvas, setExportCanvas] = useState<(() => HTMLCanvasElement | null) | null>(null);

    const handleFileSelect = useCallback((file: File) => {
        const url = URL.createObjectURL(file);
        
        // Detect file type
        if (file.name.endsWith('.glb') || file.name.endsWith('.gltf')) {
            setSourceType('model');
        } else if (file.type.startsWith('video/')) {
            setSourceType('video');
        } else {
            setSourceType('image');
        }
        setSourceImage(url);
    }, []);

    const handleWebcam = useCallback(() => {
        setSourceType('webcam');
        setSourceImage('webcam');
    }, []);

    const handleReset = useCallback(() => {
        if (sourceImage && sourceImage !== 'webcam') {
            URL.revokeObjectURL(sourceImage);
        }
        setSourceImage(null);
        setSourceType(null);
        setSettings(DEFAULT_SETTINGS);
        setPreviewMode('processed');
    }, [sourceImage]);

    const handlePresetSelect = useCallback((preset: Preset) => {
        setActiveEffect(preset.effect);
        setSettings((prev) => ({ ...prev, ...preset.settings }));
    }, []);

    const handleExport = useCallback((format: EffectSettings['format']) => {
        const canvas = exportCanvas?.();
        if (!canvas) return;

        const download = (href: string, extension: string) => {
            const link = document.createElement('a');
            link.href = href;
            link.download = `grainrad-${activeEffect}.${extension}`;
            link.click();
        };

        if (format === 'text') {
            const asciiText = generateAsciiTextFromCanvas(canvas, settings);
            const blob = new Blob([asciiText], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            download(url, 'txt');
            setTimeout(() => URL.revokeObjectURL(url), 0);
            return;
        }

        if (format === 'svg') {
            const pngData = canvas.toDataURL('image/png');
            const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}"><image href="${pngData}" width="100%" height="100%"/></svg>`;
            const blob = new Blob([svg], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            download(url, 'svg');
            setTimeout(() => URL.revokeObjectURL(url), 0);
            return;
        }

        if (format === 'jpg') {
            download(canvas.toDataURL('image/jpeg', settings.quality / 100), 'jpg');
            return;
        }

        if (format === 'gif' || format === 'mp4' || format === 'webm') {
            // Fallback until dedicated encoders are wired.
            download(canvas.toDataURL('image/png'), 'png');
            return;
        }

        download(canvas.toDataURL('image/png'), 'png');
    }, [activeEffect, exportCanvas, settings]);

    return (
        <div className="h-full min-h-0 flex flex-col bg-term-bg text-[13px] leading-tight">
            <TopBar
                activeEffect={activeEffect}
                fps={fps}
                isProcessing={isProcessing}
                onReset={handleReset}
            />

            <div className="flex-1 min-h-0 flex overflow-hidden">
                <LeftSidebar
                    activeEffect={activeEffect}
                    setActiveEffect={setActiveEffect}
                    onFileSelect={handleFileSelect}
                    onWebcam={handleWebcam}
                    onPresetSelect={handlePresetSelect}
                    hasSource={!!sourceImage}
                />

                {sourceType === 'model' ? (
                    <ModelViewer
                        modelUrl={sourceImage}
                        activeEffect={activeEffect}
                        settings={settings}
                        onCanvasReady={setExportCanvas}
                        onFpsUpdate={setFps}
                        setIsProcessing={setIsProcessing}
                    />
                ) : (
                    <Canvas
                        sourceImage={sourceImage}
                        sourceType={sourceType}
                        activeEffect={activeEffect}
                        settings={settings}
                        zoom={zoom}
                        previewMode={previewMode}
                        onFpsUpdate={setFps}
                        setIsProcessing={setIsProcessing}
                        onExportReady={setExportCanvas}
                    />
                )}

                <RightSidebar
                    activeEffect={activeEffect}
                    settings={settings}
                    setSettings={setSettings}
                    sourceImage={sourceImage}
                    previewMode={previewMode}
                    setPreviewMode={setPreviewMode}
                    onResetSettings={() => setSettings(DEFAULT_SETTINGS)}
                    onExport={handleExport}
                />
            </div>

            <BottomBar
                zoom={zoom}
                setZoom={setZoom}
            />
        </div>
    );
}

function generateAsciiTextFromCanvas(canvas: HTMLCanvasElement, settings: EffectSettings): string {
    const ctx = canvas.getContext('2d');
    if (!ctx || !canvas.width || !canvas.height) return '';

    const charset = settings.customCharacters || ' .:-=+*#%@';
    const step = Math.max(1, Math.floor(settings.cellSize));
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const lines: string[] = [];

    for (let y = 0; y < canvas.height; y += step) {
        let line = '';
        for (let x = 0; x < canvas.width; x += step) {
            const i = (y * canvas.width + x) * 4;
            const brightness = (data[i] + data[i + 1] + data[i + 2]) / (3 * 255);
            const index = Math.min(charset.length - 1, Math.floor(brightness * charset.length));
            line += charset[index] ?? ' ';
        }
        lines.push(line);
    }

    return lines.join('\n');
}
