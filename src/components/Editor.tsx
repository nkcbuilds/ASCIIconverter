import { useState, useCallback } from 'react';
import { LeftSidebar } from './LeftSidebar';
import { Canvas } from './Canvas';
import { RightSidebar } from './RightSidebar';
import { TopBar } from './TopBar';
import { BottomBar } from './BottomBar';
import { EffectType, EffectSettings, DEFAULT_SETTINGS } from '../types/effects';

export function Editor() {
    // Source image/video state
    const [sourceImage, setSourceImage] = useState<string | null>(null);
    const [sourceType, setSourceType] = useState<'image' | 'video' | 'webcam' | null>(null);

    // Active effect
    const [activeEffect, setActiveEffect] = useState<EffectType>('ascii');

    // Effect settings
    const [settings, setSettings] = useState<EffectSettings>(DEFAULT_SETTINGS);

    // Processing state
    const [isProcessing, setIsProcessing] = useState(false);
    const [fps, setFps] = useState(0);

    // Zoom level
    const [zoom, setZoom] = useState(100);

    // Handle file drop/select
    const handleFileSelect = useCallback((file: File) => {
        const url = URL.createObjectURL(file);
        setSourceImage(url);
        setSourceType(file.type.startsWith('video/') ? 'video' : 'image');
    }, []);

    // Handle webcam
    const handleWebcam = useCallback(() => {
        setSourceType('webcam');
        setSourceImage('webcam');
    }, []);

    // Reset/clear
    const handleReset = useCallback(() => {
        if (sourceImage && sourceImage !== 'webcam') {
            URL.revokeObjectURL(sourceImage);
        }
        setSourceImage(null);
        setSourceType(null);
        setSettings(DEFAULT_SETTINGS);
    }, [sourceImage]);

    return (
        <div className="h-full flex flex-col bg-term-bg">
            {/* Top Bar */}
            <TopBar
                activeEffect={activeEffect}
                fps={fps}
                isProcessing={isProcessing}
                onReset={handleReset}
            />

            {/* Main Content */}
            <div className="flex-1 flex overflow-hidden">
                {/* Left Sidebar - Input & Effects */}
                <LeftSidebar
                    activeEffect={activeEffect}
                    setActiveEffect={setActiveEffect}
                    onFileSelect={handleFileSelect}
                    onWebcam={handleWebcam}
                    hasSource={!!sourceImage}
                />

                {/* Canvas Area */}
                <Canvas
                    sourceImage={sourceImage}
                    sourceType={sourceType}
                    activeEffect={activeEffect}
                    settings={settings}
                    zoom={zoom}
                    onFpsUpdate={setFps}
                    setIsProcessing={setIsProcessing}
                />

                {/* Right Sidebar - Settings */}
                <RightSidebar
                    activeEffect={activeEffect}
                    settings={settings}
                    setSettings={setSettings}
                    sourceImage={sourceImage}
                />
            </div>

            {/* Bottom Bar */}
            <BottomBar
                zoom={zoom}
                setZoom={setZoom}
            />
        </div>
    );
}
