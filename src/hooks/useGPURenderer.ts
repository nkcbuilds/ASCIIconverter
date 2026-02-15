/**
 * useGPURenderer - Custom hook for GPU-accelerated rendering
 * 
 * This hook manages the WebGL/WebGPU rendering pipeline and provides
 * a simple interface for rendering effects on canvas elements.
 */

import { useRef, useEffect, useCallback, useState } from 'react';
import { EffectSettings, EffectType } from '../types/effects';
import {
  createRenderPipeline,
  renderFrame,
  RenderPipelineState,
  RendererType,
} from '../renderer/RenderPipeline';

export interface GPURendererOptions {
  /** Whether to use WebGL acceleration (falls back to Canvas2D if unavailable) */
  preferGPU?: boolean;
}

export interface GPURendererResult {
  /** Whether GPU rendering is available */
  isGPUAvailable: boolean;
  /** Current renderer type being used */
  rendererType: RendererType | null;
  /** Render a frame with the given settings */
  render: (
    source: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | null,
    effect: EffectType,
    settings: EffectSettings
  ) => void;
  /** Whether the renderer is initializing */
  isInitializing: boolean;
  /** Any error that occurred during initialization */
  error: string | null;
}

/**
 * Hook for GPU-accelerated rendering
 */
export function useGPURenderer(options: GPURendererOptions = {}): GPURendererResult {
  const { preferGPU = true } = options;
  
  const pipelineRef = useRef<RenderPipelineState | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isInitializing, setIsInitializing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const frameCountRef = useRef(0);

  // Initialize pipeline on mount
  useEffect(() => {
    let mounted = true;
    setIsInitializing(true);
    setError(null);

    const initPipeline = async () => {
      try {
        // Create a canvas for the pipeline
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        canvasRef.current = canvas;
        
        const pipeline = await createRenderPipeline(canvas);
        
        if (mounted) {
          pipelineRef.current = pipeline;
          setIsInitializing(false);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to initialize renderer');
          setIsInitializing(false);
        }
      }
    };

    if (preferGPU) {
      initPipeline();
    } else {
      pipelineRef.current = {
        rendererType: 'canvas2d',
        webgpu: null,
        webgl: null,
        isInitialized: true,
        error: null,
      };
      setIsInitializing(false);
    }

    return () => {
      mounted = false;
    };
  }, [preferGPU]);

  // Render function
  const render = useCallback(
    (
      source: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | null,
      effect: EffectType,
      settings: EffectSettings
    ) => {
      const pipeline = pipelineRef.current;
      if (!pipeline || !source) return;

      const time = performance.now() / 1000;
      frameCountRef.current++;

      renderFrame(pipeline, source, effect, settings, time);
    },
    []
  );

  return {
    isGPUAvailable: pipelineRef.current?.rendererType !== 'canvas2d',
    rendererType: pipelineRef.current?.rendererType ?? null,
    render,
    isInitializing,
    error,
  };
}

/**
 * Hook for managing a WebGL canvas with automatic cleanup
 */
export function useWebGLCanvas(
  canvasRef: React.RefObject<HTMLCanvasElement>
): {
  gl: WebGLRenderingContext | null;
  isWebGL2: boolean;
  error: string | null;
} {
  const [gl, setGL] = useState<WebGLRenderingContext | null>(null);
  const [isWebGL2, setIsWebGL2] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      setGL(null);
      return;
    }

    // Try WebGL2 first
    let context: WebGL2RenderingContext | WebGLRenderingContext | null = canvas.getContext('webgl2', {
      alpha: true,
      premultipliedAlpha: false,
      preserveDrawingBuffer: true,
    });

    if (context) {
      setGL(context as unknown as WebGLRenderingContext);
      setIsWebGL2(true);
      setError(null);
      return;
    }

    // Fall back to WebGL1
    context = canvas.getContext('webgl', {
      alpha: true,
      premultipliedAlpha: false,
      preserveDrawingBuffer: true,
    });

    if (context) {
      setGL(context);
      setIsWebGL2(false);
      setError(null);
      return;
    }

    // No WebGL support
    setGL(null);
    setIsWebGL2(false);
    setError('WebGL is not supported in this browser');
  }, [canvasRef]);

  return { gl, isWebGL2, error };
}

export default useGPURenderer;