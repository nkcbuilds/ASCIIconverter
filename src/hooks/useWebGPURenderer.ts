import { useState, useEffect, useRef, useCallback } from 'react';

export type EffectType = 'ascii' | 'dither' | 'pixel' | 'edge' | 'halftone' | 'none';
export type SourceType = 'webcam' | 'image' | 'video' | null;

interface UseWebGPURendererOptions {
    canvas: HTMLCanvasElement | null;
    source: SourceType;
    effect: EffectType;
    enabled: boolean;
}

interface WebGPUState {
    isSupported: boolean;
    isInitialized: boolean;
    error: string | null;
    fps: number;
}

export function useWebGPURenderer(options: UseWebGPURendererOptions): WebGPUState {
    const { canvas, source, effect, enabled } = options;
    const [state, setState] = useState<WebGPUState>({
        isSupported: false,
        isInitialized: false,
        error: null,
        fps: 0,
    });

    const deviceRef = useRef<GPUDevice | null>(null);
    const contextRef = useRef<GPUCanvasContext | null>(null);
    const animationFrameRef = useRef<number>(0);
    const lastTimeRef = useRef<number>(0);
    const frameCountRef = useRef<number>(0);

    // Check WebGPU support
    useEffect(() => {
        const checkSupport = async () => {
            if (!navigator.gpu) {
                setState(s => ({ ...s, isSupported: false, error: 'WebGPU not supported in this browser' }));
                return;
            }

            try {
                const adapter = await navigator.gpu.requestAdapter();
                if (!adapter) {
                    setState(s => ({ ...s, isSupported: false, error: 'No GPU adapter found' }));
                    return;
                }

                const device = await adapter.requestDevice();
                deviceRef.current = device;
                setState(s => ({ ...s, isSupported: true, error: null }));
            } catch (err) {
                setState(s => ({
                    ...s,
                    isSupported: false,
                    error: err instanceof Error ? err.message : 'Failed to initialize WebGPU'
                }));
            }
        };

        checkSupport();
    }, []);

    // Initialize canvas context
    useEffect(() => {
        if (!canvas || !deviceRef.current || !state.isSupported) return;

        try {
            const context = canvas.getContext('webgpu');
            if (!context) {
                setState(s => ({ ...s, error: 'Failed to get WebGPU context' }));
                return;
            }

            const format = navigator.gpu.getPreferredCanvasFormat();
            context.configure({
                device: deviceRef.current,
                format,
                alphaMode: 'premultiplied',
            });

            contextRef.current = context;
            setState(s => ({ ...s, isInitialized: true }));
        } catch (err) {
            setState(s => ({
                ...s,
                error: err instanceof Error ? err.message : 'Failed to configure canvas'
            }));
        }
    }, [canvas, state.isSupported]);

    // Render loop
    const render = useCallback(() => {
        if (!enabled || !contextRef.current || !deviceRef.current) return;

        const now = performance.now();
        frameCountRef.current++;

        // Calculate FPS every second
        if (now - lastTimeRef.current >= 1000) {
            setState(s => ({ ...s, fps: frameCountRef.current }));
            frameCountRef.current = 0;
            lastTimeRef.current = now;
        }

        // Simple demo render - in a full implementation, this would apply the shader effects
        const commandEncoder = deviceRef.current.createCommandEncoder();
        const textureView = contextRef.current.getCurrentTexture().createView();

        const renderPassDescriptor: GPURenderPassDescriptor = {
            colorAttachments: [{
                view: textureView,
                clearValue: { r: 0.04, g: 0.04, b: 0.04, a: 1.0 },
                loadOp: 'clear',
                storeOp: 'store',
            }],
        };

        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        passEncoder.end();

        deviceRef.current.queue.submit([commandEncoder.finish()]);

        animationFrameRef.current = requestAnimationFrame(render);
    }, [enabled, effect, source]);

    useEffect(() => {
        if (enabled && state.isInitialized) {
            lastTimeRef.current = performance.now();
            animationFrameRef.current = requestAnimationFrame(render);
        }

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [enabled, state.isInitialized, render]);

    return state;
}

// ASCII art character ramp from dark to light
export const ASCII_RAMP = ' .:-=+*#%@';
export const ASCII_RAMP_EXTENDED = ' .\':,;clodxkO0KXNWM';

// Dithering patterns
export const BAYER_MATRIX_4X4 = [
    [0, 8, 2, 10],
    [12, 4, 14, 6],
    [3, 11, 1, 9],
    [15, 7, 13, 5],
];

export function getBayerThreshold(x: number, y: number): number {
    return BAYER_MATRIX_4X4[y % 4][x % 4] / 16;
}
