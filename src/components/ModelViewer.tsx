import { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectType, EffectSettings, parseHexColor } from '../types/effects';

interface ModelViewerProps {
    modelUrl: string | null;
    activeEffect: EffectType;
    settings: EffectSettings;
    onCanvasReady: (getCanvas: () => HTMLCanvasElement | null) => void;
    onFpsUpdate: (fps: number) => void;
    setIsProcessing: (processing: boolean) => void;
}

export function ModelViewer({
    modelUrl,
    activeEffect,
    settings,
    onCanvasReady,
    onFpsUpdate,
    setIsProcessing,
}: ModelViewerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const modelRef = useRef<THREE.Group | null>(null);
    const controlsRef = useRef<OrbitControls | null>(null);
    const animationRef = useRef<number>(0);
    const lastTimeRef = useRef<number>(0);
    const frameCountRef = useRef<number>(0);
    const effectCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const effectCtxRef = useRef<CanvasRenderingContext2D | null>(null);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Initialize Three.js scene
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Create scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(settings.bgColor);
        sceneRef.current = scene;

        // Create camera
        const camera = new THREE.PerspectiveCamera(
            75,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 5;
        cameraRef.current = camera;

        // Create renderer
        const renderer = new THREE.WebGLRenderer({ 
            antialias: true,
            preserveDrawingBuffer: true,
        });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Create controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controlsRef.current = controls;

        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight2.position.set(-5, -5, -5);
        scene.add(directionalLight2);

        // Create effect canvas
        const effectCanvas = document.createElement('canvas');
        effectCanvasRef.current = effectCanvas;
        effectCtxRef.current = effectCanvas.getContext('2d');

        // Handle resize
        const handleResize = () => {
            if (!container || !camera || !renderer) return;
            const width = container.clientWidth;
            const height = container.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
        window.addEventListener('resize', handleResize);

        // Expose canvas for export
        onCanvasReady(() => effectCanvasRef.current);

        return () => {
            window.removeEventListener('resize', handleResize);
            
            // Dispose model resources (geometries, materials, textures)
            if (modelRef.current) {
                modelRef.current.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        child.geometry?.dispose();
                        if (child.material) {
                            if (Array.isArray(child.material)) {
                                child.material.forEach(m => m.dispose());
                            } else {
                                child.material.dispose();
                            }
                        }
                    }
                });
            }
            
            if (rendererRef.current) {
                container.removeChild(rendererRef.current.domElement);
                rendererRef.current.dispose();
            }
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [onCanvasReady, settings.bgColor]);

    // Load model
    useEffect(() => {
        if (!modelUrl || !sceneRef.current) return;

        setIsLoading(true);
        setError(null);
        setIsProcessing(true);

        const loader = new GLTFLoader();
        loader.load(
            modelUrl,
            (gltf) => {
                // Remove previous model
                if (modelRef.current) {
                    sceneRef.current?.remove(modelRef.current);
                }

                // Add new model
                const model = gltf.scene;
                
                // Center and scale model
                const box = new THREE.Box3().setFromObject(model);
                const center = box.getCenter(new THREE.Vector3());
                const size = box.getSize(new THREE.Vector3());
                const maxDim = Math.max(size.x, size.y, size.z);
                const scale = 2 / maxDim;
                
                model.position.sub(center);
                model.scale.multiplyScalar(scale);
                
                sceneRef.current?.add(model);
                modelRef.current = model;
                
                setIsLoading(false);
                setIsProcessing(false);
            },
            undefined,
            (error) => {
                console.error('Error loading model:', error);
                setError('Failed to load 3D model');
                setIsLoading(false);
                setIsProcessing(false);
            }
        );
    }, [modelUrl, setIsProcessing]);

    // Animation loop
    const animate = useCallback(() => {
        if (!rendererRef.current || !sceneRef.current || !cameraRef.current || !controlsRef.current) return;

        controlsRef.current.update();
        
        // Render 3D scene
        rendererRef.current.render(sceneRef.current, cameraRef.current);

        // Apply effects to the rendered image
        if (effectCanvasRef.current && effectCtxRef.current) {
            const width = rendererRef.current.domElement.width;
            const height = rendererRef.current.domElement.height;
            
            effectCanvasRef.current.width = width;
            effectCanvasRef.current.height = height;
            
            // Draw the 3D render
            effectCtxRef.current.drawImage(rendererRef.current.domElement, 0, 0);
            
            // Apply post-processing effects
            applyEffects(effectCtxRef.current, width, height, activeEffect, settings);
        }

        // Update FPS
        const now = performance.now();
        frameCountRef.current++;
        if (now - lastTimeRef.current >= 1000) {
            onFpsUpdate(frameCountRef.current);
            frameCountRef.current = 0;
            lastTimeRef.current = now;
        }

        animationRef.current = requestAnimationFrame(animate);
    }, [activeEffect, settings, onFpsUpdate]);

    useEffect(() => {
        if (!modelUrl) return;
        
        lastTimeRef.current = performance.now();
        frameCountRef.current = 0;
        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [modelUrl, animate]);

    // Update background color
    useEffect(() => {
        if (sceneRef.current) {
            sceneRef.current.background = new THREE.Color(settings.bgColor);
        }
    }, [settings.bgColor]);

    return (
        <div ref={containerRef} className="w-full h-full relative">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-term-bg/80 z-10">
                    <div className="text-term-text-dim text-sm">Loading 3D Model...</div>
                </div>
            )}
            {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-term-bg/80 z-10">
                    <div className="text-red-500 text-sm">{error}</div>
                </div>
            )}
            {!modelUrl && !isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-term-text-dim text-[18px] mb-1">No 3D Model</p>
                        <p className="text-term-text-dim text-[14px] opacity-60">Drop a .GLB file to view</p>
                    </div>
                </div>
            )}
        </div>
    );
}

function applyEffects(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    effect: EffectType,
    settings: EffectSettings
): void {
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    switch (effect) {
        case 'pixelate':
        case 'pixel-grid':
        case 'mosaic': {
            const cellSize = Math.max(1, settings.cellSize);
            const gap = effect === 'pixel-grid' ? 1 : 0;
            const levels = effect === 'mosaic' ? 5 : 0;

            for (let y = 0; y < height; y += cellSize) {
                for (let x = 0; x < width; x += cellSize) {
                    let r = 0, g = 0, b = 0, count = 0;
                    
                    // Average colors in cell
                    for (let cy = 0; cy < cellSize && y + cy < height; cy++) {
                        for (let cx = 0; cx < cellSize && x + cx < width; cx++) {
                            const i = ((y + cy) * width + (x + cx)) * 4;
                            r += data[i];
                            g += data[i + 1];
                            b += data[i + 2];
                            count++;
                        }
                    }
                    
                    r = Math.floor(r / count);
                    g = Math.floor(g / count);
                    b = Math.floor(b / count);
                    
                    if (levels > 0) {
                        const step = 255 / (levels - 1);
                        r = Math.round(r / step) * step;
                        g = Math.round(g / step) * step;
                        b = Math.round(b / step) * step;
                    }
                    
                    // Fill cell
                    for (let cy = gap; cy < cellSize - gap && y + cy < height; cy++) {
                        for (let cx = gap; cx < cellSize - gap && x + cx < width; cx++) {
                            const i = ((y + cy) * width + (x + cx)) * 4;
                            data[i] = r;
                            data[i + 1] = g;
                            data[i + 2] = b;
                        }
                    }
                }
            }
            break;
        }

        case 'vhs-glitch': {
            const time = performance.now() * 0.001;
            const threshold = settings.threshold;
            
            for (let y = 0; y < height; y++) {
                const shift = Math.floor(Math.sin(y * 0.01 + time * 3) * threshold * 10);
                
                for (let x = 0; x < width; x++) {
                    const srcX = Math.max(0, Math.min(width - 1, x + shift));
                    const i = (y * width + x) * 4;
                    const srcI = (y * width + srcX) * 4;
                    
                    // Chromatic aberration
                    const aberrationOffset = Math.floor(Math.sin(y * 0.005 + time) * 3);
                    const rI = (y * width + Math.max(0, Math.min(width - 1, x + aberrationOffset))) * 4;
                    const bI = (y * width + Math.max(0, Math.min(width - 1, x - aberrationOffset))) * 4;
                    
                    data[i] = data[rI];
                    data[i + 1] = data[srcI + 1];
                    data[i + 2] = data[bI + 2];
                }
            }
            break;
        }

        case 'grain': {
            const grainIntensity = settings.grainIntensity;
            
            for (let i = 0; i < data.length; i += 4) {
                const grain = (Math.random() - 0.5) * grainIntensity * 100;
                data[i] = Math.max(0, Math.min(255, data[i] + grain));
                data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + grain));
                data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + grain));
            }
            break;
        }

        case 'noise': {
            const noiseIntensity = settings.noiseIntensity;
            
            for (let i = 0; i < data.length; i += 4) {
                if (Math.random() < noiseIntensity) {
                    data[i] = Math.random() * 255;
                    data[i + 1] = Math.random() * 255;
                    data[i + 2] = Math.random() * 255;
                }
            }
            break;
        }

        case 'scanlines': {
            for (let y = 0; y < height; y++) {
                const factor = y % 2 === 0 ? 1 : 0.7;
                for (let x = 0; x < width; x++) {
                    const i = (y * width + x) * 4;
                    data[i] *= factor;
                    data[i + 1] *= factor;
                    data[i + 2] *= factor;
                }
            }
            break;
        }

        case 'invert': {
            for (let i = 0; i < data.length; i += 4) {
                data[i] = 255 - data[i];
                data[i + 1] = 255 - data[i + 1];
                data[i + 2] = 255 - data[i + 2];
            }
            break;
        }

        case 'threshold': {
            const threshold = settings.threshold * 255;
            const fgColor = parseHexColor(settings.fgColor) ?? { r: 255, g: 255, b: 255 };
            const bgColor = parseHexColor(settings.bgColor) ?? { r: 0, g: 0, b: 0 };
            
            for (let i = 0; i < data.length; i += 4) {
                const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
                const color = brightness > threshold ? fgColor : bgColor;
                data[i] = color.r;
                data[i + 1] = color.g;
                data[i + 2] = color.b;
            }
            break;
        }

        default:
            // No effect or unsupported effect for 3D
            break;
    }

    ctx.putImageData(imageData, 0, 0);

    // Apply scanlines overlay if enabled
    if (settings.scanlines && effect !== 'scanlines') {
        ctx.fillStyle = 'rgba(0,0,0,0.15)';
        for (let y = 0; y < height; y += 2) {
            ctx.fillRect(0, y, width, 1);
        }
    }
}
