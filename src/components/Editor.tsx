import { useState, useCallback } from 'react';
import { LeftSidebar } from './LeftSidebar';
import { Canvas } from './Canvas';
import { RightSidebar } from './RightSidebar';
import { TopBar } from './TopBar';
import { BottomBar } from './BottomBar';
import { EffectType, EffectSettings, DEFAULT_SETTINGS, Preset } from '../types/effects';

export type PreviewMode = 'processed' | 'split' | 'original';

export interface RenderOutput {
    dataUrl: string;
    asciiText: string;
}

export function Editor() {
    const [sourceImage, setSourceImage] = useState<string | null>(null);
    const [sourceType, setSourceType] = useState<'image' | 'video' | 'webcam' | null>(null);
    const [activeEffect, setActiveEffect] = useState<EffectType>('ascii');
    const [settings, setSettings] = useState<EffectSettings>(DEFAULT_SETTINGS);
    const [isProcessing, setIsProcessing] = useState(false);
    const [fps, setFps] = useState(0);
    const [zoom, setZoom] = useState(100);
    const [previewMode, setPreviewMode] = useState<PreviewMode>('processed');
    const [renderOutput, setRenderOutput] = useState<RenderOutput | null>(null);

    const handleFileSelect = useCallback((file: File) => {
        const url = URL.createObjectURL(file);
        setSourceImage(url);
        setSourceType(file.type.startsWith('video/') ? 'video' : 'image');
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
        setRenderOutput(null);
    }, [sourceImage]);

    const handlePresetSelect = useCallback((preset: Preset) => {
        setActiveEffect(preset.effect);
        setSettings((prev) => ({ ...prev, ...preset.settings }));
    }, []);

    const handleExport = useCallback((format: EffectSettings['format']) => {
        if (!renderOutput) return;

        const download = (href: string, extension: string) => {
            const link = document.createElement('a');
            link.href = href;
            link.download = `grainrad-${activeEffect}.${extension}`;
            link.click();
        };

        if (format === 'text') {
            const blob = new Blob([renderOutput.asciiText], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            download(url, 'txt');
            URL.revokeObjectURL(url);
            return;
        }

        if (format === 'svg') {
            const svg = `<svg xmlns="http://www.w3.org/2000/svg"><image href="${renderOutput.dataUrl}" width="100%" height="100%"/></svg>`;
            const blob = new Blob([svg], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            download(url, 'svg');
            URL.revokeObjectURL(url);
            return;
        }

        if (format === 'jpg') {
            download(renderOutput.dataUrl, 'jpg');
            return;
        }

        if (format === 'gif' || format === 'video') {
            // Fallback until dedicated encoders are wired.
            download(renderOutput.dataUrl, 'png');
            return;
        }

        download(renderOutput.dataUrl, 'png');
    }, [activeEffect, renderOutput]);

    return (
        <div className="h-full flex flex-col bg-term-bg">
            <TopBar
                activeEffect={activeEffect}
                fps={fps}
                isProcessing={isProcessing}
                onReset={handleReset}
            />

            <div className="flex-1 flex overflow-hidden">
                <LeftSidebar
                    activeEffect={activeEffect}
                    setActiveEffect={setActiveEffect}
                    onFileSelect={handleFileSelect}
                    onWebcam={handleWebcam}
                    onPresetSelect={handlePresetSelect}
                    hasSource={!!sourceImage}
                />

                <Canvas
                    sourceImage={sourceImage}
                    sourceType={sourceType}
                    activeEffect={activeEffect}
                    settings={settings}
                    zoom={zoom}
                    previewMode={previewMode}
                    onFpsUpdate={setFps}
                    onOutputUpdate={setRenderOutput}
                    setIsProcessing={setIsProcessing}
                />

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
