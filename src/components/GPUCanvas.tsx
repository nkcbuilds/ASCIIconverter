// ============================================================================
// Grainrad - GPU-Accelerated Canvas Component
// ============================================================================

import { useRef, useEffect, useState, useCallback } from 'react';
import { EffectType, EffectSettings, SourceType } from '../types/effects';
import { getShaderDefinition } from '../renderer/ShaderManager';
import { createTexture, createProgram, createQuadBuffer } from '../renderer/WebGLContext';

interface GPUCanvasProps {
  sourceImage: string | null;
  sourceType: SourceType;
  activeEffect: EffectType;
  settings: EffectSettings;
  zoom: number;
  onFpsUpdate: (fps: number) => void;
  setIsProcessing: (processing: boolean) => void;
  onExportReady?: (getCanvas: () => HTMLCanvasElement | null) => void;
}

// Standard vertex shader
const STANDARD_VERTEX_SHADER = `#version 300 es
in vec2 a_position;
in vec2 a_texCoord;
out vec2 v_texCoord;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_texCoord = a_texCoord;
}
`;

export function GPUCanvas({
  sourceImage,
  sourceType,
  activeEffect,
  settings,
  zoom,
  onFpsUpdate,
  setIsProcessing,
  onExportReady,
}: GPUCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGL2RenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const textureRef = useRef<WebGLTexture | null>(null);
  const quadBufferRef = useRef<WebGLBuffer | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const animationRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const frameCountRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Initialize WebGL context
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2', {
      alpha: false,
      antialias: false,
      preserveDrawingBuffer: true,
    });

    if (!gl) {
      setError('WebGL2 not supported');
      return;
    }

    glRef.current = gl;
    quadBufferRef.current = createQuadBuffer(gl);

    return () => {
      if (programRef.current) {
        gl.deleteProgram(programRef.current);
      }
      if (textureRef.current) {
        gl.deleteTexture(textureRef.current);
      }
    };
  }, []);

  // Load source media
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

  // Create/update shader program when effect changes
  useEffect(() => {
    const gl = glRef.current;
    if (!gl) return;

    const shaderDef = getShaderDefinition(activeEffect);
    if (!shaderDef) {
      // Fall back to simple pass-through shader
      const fragmentShader = `#version 300 es
        precision highp float;
        in vec2 v_texCoord;
        uniform sampler2D u_texture;
        out vec4 fragColor;
        void main() {
          fragColor = texture(u_texture, v_texCoord);
        }
      `;
      const program = createProgram(gl, STANDARD_VERTEX_SHADER, fragmentShader);
      if (program) {
        programRef.current = program;
      }
      return;
    }

    const vertexShader = shaderDef.vertexShader || STANDARD_VERTEX_SHADER;
    const program = createProgram(gl, vertexShader, shaderDef.fragmentShader);
    if (program) {
      programRef.current = program;
    }
  }, [activeEffect]);

  // Create texture from source
  const updateTexture = useCallback(() => {
    const gl = glRef.current;
    const source = imageRef.current || videoRef.current;
    if (!gl || !source) return;

    if (!textureRef.current) {
      textureRef.current = createTexture(gl, null);
    }

    gl.bindTexture(gl.TEXTURE_2D, textureRef.current);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
  }, []);

  // Set uniforms for the current effect
  const setUniforms = useCallback((program: WebGLProgram, time: number) => {
    const gl = glRef.current;
    if (!gl) return;

    gl.useProgram(program);

    // Common uniforms
    const cellSizeLoc = gl.getUniformLocation(program, 'u_cellSize');
    const thresholdLoc = gl.getUniformLocation(program, 'u_threshold');
    const coloredLoc = gl.getUniformLocation(program, 'u_colored');
    const fgColorLoc = gl.getUniformLocation(program, 'u_fgColor');
    const bgColorLoc = gl.getUniformLocation(program, 'u_bgColor');
    const timeLoc = gl.getUniformLocation(program, 'u_time');

    if (cellSizeLoc) gl.uniform1f(cellSizeLoc, settings.cellSize);
    if (thresholdLoc) gl.uniform1f(thresholdLoc, settings.threshold);
    if (coloredLoc) gl.uniform1i(coloredLoc, settings.colored ? 1 : 0);
    if (timeLoc) gl.uniform1f(timeLoc, time);

    // Parse colors
    const parseColor = (hex: string): [number, number, number, number] => {
      const clean = hex.replace('#', '');
      const r = parseInt(clean.slice(0, 2), 16) / 255;
      const g = parseInt(clean.slice(2, 4), 16) / 255;
      const b = parseInt(clean.slice(4, 6), 16) / 255;
      return [r, g, b, 1.0];
    };

    if (fgColorLoc) {
      const fg = parseColor(settings.fgColor);
      gl.uniform4fv(fgColorLoc, fg);
    }
    if (bgColorLoc) {
      const bg = parseColor(settings.bgColor);
      gl.uniform4fv(bgColorLoc, bg);
    }

    // Effect-specific uniforms
    switch (activeEffect) {
      case 'ascii': {
        const brightnessLoc = gl.getUniformLocation(program, 'u_brightness');
        const contrastLoc = gl.getUniformLocation(program, 'u_contrast');
        const bgOpacityLoc = gl.getUniformLocation(program, 'u_bgOpacity');
        const charsetLengthLoc = gl.getUniformLocation(program, 'u_charsetLength');

        if (brightnessLoc) gl.uniform1f(brightnessLoc, settings.brightness / 100);
        if (contrastLoc) gl.uniform1f(contrastLoc, settings.contrast / 100);
        if (bgOpacityLoc) gl.uniform1f(bgOpacityLoc, settings.backgroundOpacity);
        if (charsetLengthLoc) {
          const charsetLen = settings.characterSet === 'extended' ? 20 : 10;
          gl.uniform1i(charsetLengthLoc, charsetLen);
        }
        break;
      }

      case 'pixel-sorting': {
        const directionLoc = gl.getUniformLocation(program, 'u_direction');
        const comparatorLoc = gl.getUniformLocation(program, 'u_comparator');

        if (directionLoc) gl.uniform1i(directionLoc, 0); // 0 = horizontal, 1 = vertical
        if (comparatorLoc) gl.uniform1i(comparatorLoc, 0); // 0 = luma, 1 = hue, 2 = saturation
        break;
      }

      case 'vhs-glitch': {
        const trackingNoiseLoc = gl.getUniformLocation(program, 'u_trackingNoise');
        const trackingSpeedLoc = gl.getUniformLocation(program, 'u_trackingSpeed');
        const colorBleedLoc = gl.getUniformLocation(program, 'u_colorBleed');
        const warpIntensityLoc = gl.getUniformLocation(program, 'u_warpIntensity');
        const jitterAmountLoc = gl.getUniformLocation(program, 'u_jitterAmount');
        const scanlinesLoc = gl.getUniformLocation(program, 'u_scanlines');
        const scanlineIntensityLoc = gl.getUniformLocation(program, 'u_scanlineIntensity');

        if (trackingNoiseLoc) gl.uniform1f(trackingNoiseLoc, settings.trackingNoise || 0.5);
        if (trackingSpeedLoc) gl.uniform1f(trackingSpeedLoc, settings.trackingSpeed || 1.0);
        if (colorBleedLoc) gl.uniform1f(colorBleedLoc, settings.colorBleed || 0.5);
        if (warpIntensityLoc) gl.uniform1f(warpIntensityLoc, settings.warpIntensity || 0.5);
        if (jitterAmountLoc) gl.uniform1f(jitterAmountLoc, settings.jitterAmount || 0.5);
        if (scanlinesLoc) gl.uniform1i(scanlinesLoc, settings.scanlines ? 1 : 0);
        if (scanlineIntensityLoc) gl.uniform1f(scanlineIntensityLoc, settings.scanlineIntensity || 0.3);
        break;
      }

      case 'matrix-rain': {
        const speedLoc = gl.getUniformLocation(program, 'u_speed');
        const trailLengthLoc = gl.getUniformLocation(program, 'u_trailLength');
        const glowLoc = gl.getUniformLocation(program, 'u_glow');
        const randomizationLoc = gl.getUniformLocation(program, 'u_randomization');

        if (speedLoc) gl.uniform1f(speedLoc, settings.speed || 1.0);
        if (trailLengthLoc) gl.uniform1f(trailLengthLoc, settings.trailLength || 10);
        if (glowLoc) gl.uniform1f(glowLoc, settings.glow || 0.5);
        if (randomizationLoc) gl.uniform1f(randomizationLoc, settings.randomization || 0.5);
        break;
      }

      case 'dithering': {
        const ditherAlgorithmLoc = gl.getUniformLocation(program, 'u_ditherAlgorithm');
        const colorPaletteLoc = gl.getUniformLocation(program, 'u_colorPalette');

        if (ditherAlgorithmLoc) gl.uniform1i(ditherAlgorithmLoc, 0); // 0 = bayer
        if (colorPaletteLoc) {
          // Map color palette string to number
          const paletteMap: Record<string, number> = {
            '1bit': 0,
            'gameboy': 1,
            'sepia': 2,
            'custom': 3,
          };
          gl.uniform1i(colorPaletteLoc, paletteMap[settings.colorPalette] || 0);
        }
        break;
      }

      case 'halftone':
      case 'halftone-cmyk': {
        const dotSizeLoc = gl.getUniformLocation(program, 'u_dotSize');
        const dotAngleLoc = gl.getUniformLocation(program, 'u_dotAngle');
        const cmykSeparationLoc = gl.getUniformLocation(program, 'u_cmykSeparation');

        if (dotSizeLoc) gl.uniform1f(dotSizeLoc, settings.dotSize || 4);
        if (dotAngleLoc) gl.uniform1f(dotAngleLoc, settings.dotAngle || 45);
        if (cmykSeparationLoc) gl.uniform1i(cmykSeparationLoc, activeEffect === 'halftone-cmyk' ? 1 : 0);
        break;
      }

      case 'grain':
      case 'noise': {
        const grainIntensityLoc = gl.getUniformLocation(program, 'u_grainIntensity');
        const grainSizeLoc = gl.getUniformLocation(program, 'u_grainSize');
        const noiseIntensityLoc = gl.getUniformLocation(program, 'u_noiseIntensity');
        const noiseColorLoc = gl.getUniformLocation(program, 'u_noiseColor');

        if (grainIntensityLoc) gl.uniform1f(grainIntensityLoc, settings.grainIntensity || 0.3);
        if (grainSizeLoc) gl.uniform1f(grainSizeLoc, settings.grainSize || 1.0);
        if (noiseIntensityLoc) gl.uniform1f(noiseIntensityLoc, settings.noiseIntensity || 0.2);
        if (noiseColorLoc) gl.uniform1i(noiseColorLoc, settings.noiseColor ? 1 : 0);
        break;
      }

      case 'scanlines': {
        const scanlineIntensityLoc = gl.getUniformLocation(program, 'u_scanlineIntensity');
        const noiseIntensityLoc = gl.getUniformLocation(program, 'u_noiseIntensity');

        if (scanlineIntensityLoc) gl.uniform1f(scanlineIntensityLoc, settings.scanlineIntensity || 0.3);
        if (noiseIntensityLoc) gl.uniform1f(noiseIntensityLoc, settings.noiseIntensity || 0.1);
        break;
      }
    }
  }, [activeEffect, settings]);

  // Render frame
  const render = useCallback(() => {
    const gl = glRef.current;
    const canvas = canvasRef.current;
    const program = programRef.current;
    const quadBuffer = quadBufferRef.current;
    const source = imageRef.current || videoRef.current;

    if (!gl || !canvas || !program || !quadBuffer || !source || !dimensions.width || !dimensions.height) return;

    // Update canvas size
    if (canvas.width !== dimensions.width || canvas.height !== dimensions.height) {
      canvas.width = dimensions.width;
      canvas.height = dimensions.height;
      gl.viewport(0, 0, dimensions.width, dimensions.height);
    }

    // Update texture
    updateTexture();

    // Clear
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Use program
    gl.useProgram(program);

    // Set uniforms
    const time = (performance.now() - startTimeRef.current) / 1000;
    setUniforms(program, time);

    // Bind texture
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, textureRef.current);
    const textureLoc = gl.getUniformLocation(program, 'u_texture');
    if (textureLoc) gl.uniform1i(textureLoc, 0);

    // Set up attributes
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);

    const positionLoc = gl.getAttribLocation(program, 'a_position');
    const texCoordLoc = gl.getAttribLocation(program, 'a_texCoord');

    if (positionLoc >= 0) {
      gl.enableVertexAttribArray(positionLoc);
      gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 16, 0);
    }
    if (texCoordLoc >= 0) {
      gl.enableVertexAttribArray(texCoordLoc);
      gl.vertexAttribPointer(texCoordLoc, 2, gl.FLOAT, false, 16, 8);
    }

    // Draw
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    // FPS counter
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
  }, [dimensions, updateTexture, setUniforms, onFpsUpdate, sourceType]);

  // Start rendering
  useEffect(() => {
    if (!sourceImage || isLoading) return;
    setIsProcessing(true);
    startTimeRef.current = performance.now();
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

  // Export callback
  useEffect(() => {
    if (!onExportReady) return;
    onExportReady(() => canvasRef.current);
  }, [onExportReady]);

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
            ref={canvasRef}
            className="block"
            style={{ imageRendering: 'pixelated', filter: settings.blur > 0 ? `blur(${settings.blur}px)` : 'none' }}
          />
        </div>
      )}
    </div>
  );
}
