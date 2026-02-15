// ============================================================================
// Grainrad - Render Pipeline
// ============================================================================

import { EffectType, EffectSettings, parseHexColor, getCharacterSet } from '../types/effects';
import { initWebGPUContext, WebGPUContextState } from './WebGPUContext';
import { initWebGLContext, createProgram, createTexture, createQuadBuffer, STANDARD_VERTEX_SHADER, WebGLContextState, updateTextureFromVideo } from './WebGLContext';
import { getShaderDefinition } from './ShaderManager';

/**
 * Renderer type
 */
export type RendererType = 'webgpu' | 'webgl2' | 'webgl1' | 'canvas2d';

/**
 * Render pipeline state
 */
export interface RenderPipelineState {
  rendererType: RendererType;
  webgpu: WebGPUContextState | null;
  webgl: WebGLContextState | null;
  isInitialized: boolean;
  error: string | null;
}

/**
 * Render context passed to effects
 */
export interface RenderContext {
  canvas: HTMLCanvasElement;
  source: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | null;
  effect: EffectType;
  settings: EffectSettings;
  time: number;
  frameCount: number;
}

/**
 * Create render pipeline
 */
export async function createRenderPipeline(
  canvas: HTMLCanvasElement
): Promise<RenderPipelineState> {
  // Try WebGPU first
  const webgpu = await initWebGPUContext(canvas);
  if (webgpu && webgpu.device && webgpu.context) {
    return {
      rendererType: 'webgpu',
      webgpu,
      webgl: null,
      isInitialized: true,
      error: null,
    };
  }

  // Fall back to WebGL
  const webgl = initWebGLContext(canvas, true);
  if (webgl && webgl.gl) {
    const isWebGL2 = webgl.capabilities.isWebGL2Supported;
    return {
      rendererType: isWebGL2 ? 'webgl2' : 'webgl1',
      webgpu: null,
      webgl,
      isInitialized: true,
      error: null,
    };
  }

  // Fall back to Canvas2D
  return {
    rendererType: 'canvas2d',
    webgpu: null,
    webgl: null,
    isInitialized: true,
    error: null,
  };
}

/**
 * Render frame using WebGL
 */
export function renderWebGLFrame(
  state: WebGLContextState,
  source: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | null,
  effect: EffectType,
  settings: EffectSettings,
  time: number
): void {
  const gl = state.gl;
  if (!gl || !source) return;

  const shaderDef = getShaderDefinition(effect);
  if (!shaderDef) {
    // Fallback to copy shader
    renderCopyFrame(state, source);
    return;
  }

  // Get or create program
  let program = state.programs.get(effect);
  if (!program) {
    const vertexShader = shaderDef.vertexShader || STANDARD_VERTEX_SHADER;
    program = createProgram(gl, vertexShader, shaderDef.fragmentShader);
    if (program) {
      state.programs.set(effect, program);
    }
  }

  if (!program) {
    renderCopyFrame(state, source);
    return;
  }

  gl.useProgram(program);

  // Create or update input texture
  let inputTexture = state.textures.get('input');
  if (!inputTexture) {
    inputTexture = createTexture(gl, source, { filter: gl.LINEAR });
    if (inputTexture) {
      state.textures.set('input', inputTexture);
    }
  } else if (source instanceof HTMLVideoElement) {
    updateTextureFromVideo(gl, inputTexture, source);
  }

  if (!inputTexture) return;

  // Bind texture
  const textureLocation = gl.getUniformLocation(program, 'u_texture');
  gl.uniform1i(textureLocation, 0);
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, inputTexture);

  // Set uniforms based on settings
  setUniforms(gl, program, settings, time, effect);

  // Create or get quad buffer
  let quadBuffer = state.buffers.get('quad');
  if (!quadBuffer) {
    quadBuffer = createQuadBuffer(gl);
    if (quadBuffer) {
      state.buffers.set('quad', quadBuffer);
    }
  }

  if (!quadBuffer) return;

  // Set up vertex attributes
  const positionLocation = gl.getAttribLocation(program, 'a_position');
  const texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');

  gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);

  if (positionLocation >= 0) {
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 16, 0);
  }

  if (texCoordLocation >= 0) {
    gl.enableVertexAttribArray(texCoordLocation);
    gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 16, 8);
  }

  // Render
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

/**
 * Set shader uniforms from settings
 */
function setUniforms(
  gl: WebGL2RenderingContext | WebGLRenderingContext,
  program: WebGLProgram,
  settings: EffectSettings,
  time: number,
  effect: EffectType
): void {
  // Common uniforms
  const cellSize = gl.getUniformLocation(program, 'u_cellSize');
  if (cellSize) gl.uniform1f(cellSize, settings.cellSize);

  const brightness = gl.getUniformLocation(program, 'u_brightness');
  if (brightness) gl.uniform1f(brightness, settings.brightness / 100);

  const contrast = gl.getUniformLocation(program, 'u_contrast');
  if (contrast) gl.uniform1f(contrast, (settings.contrast + 100) / 100);

  const threshold = gl.getUniformLocation(program, 'u_threshold');
  if (threshold) gl.uniform1f(threshold, settings.threshold);

  const colored = gl.getUniformLocation(program, 'u_colored');
  if (colored) gl.uniform1i(colored, settings.colored ? 1 : 0);

  // Color uniforms
  const fgColor = gl.getUniformLocation(program, 'u_fgColor');
  if (fgColor) {
    const rgb = parseHexColor(settings.fgColor);
    if (rgb) {
      gl.uniform4f(fgColor, rgb.r / 255, rgb.g / 255, rgb.b / 255, 1.0);
    }
  }

  const bgColor = gl.getUniformLocation(program, 'u_bgColor');
  if (bgColor) {
    const rgb = parseHexColor(settings.bgColor);
    if (rgb) {
      gl.uniform4f(bgColor, rgb.r / 255, rgb.g / 255, rgb.b / 255, 1.0);
    }
  }

  const bgOpacity = gl.getUniformLocation(program, 'u_bgOpacity');
  if (bgOpacity) gl.uniform1f(bgOpacity, settings.backgroundOpacity);

  // Character set
  const charsetLength = gl.getUniformLocation(program, 'u_charsetLength');
  if (charsetLength) {
    const charset = getCharacterSet(settings.characterSet, settings.customCharacters);
    gl.uniform1i(charsetLength, charset.length);
  }

  // Time for animated effects
  const timeUniform = gl.getUniformLocation(program, 'u_time');
  if (timeUniform) gl.uniform1f(timeUniform, time);

  // Effect-specific uniforms
  if (effect === 'pixel-sorting') {
    const sortThreshold = gl.getUniformLocation(program, 'u_threshold');
    if (sortThreshold) gl.uniform1f(sortThreshold, settings.sortThreshold);

    const direction = gl.getUniformLocation(program, 'u_direction');
    if (direction) gl.uniform1i(direction, settings.sortDirection === 'horizontal' ? 0 : 1);

    const comparator = gl.getUniformLocation(program, 'u_comparator');
    if (comparator) gl.uniform1i(comparator, settings.sortComparator === 'luma' ? 0 : settings.sortComparator === 'hue' ? 1 : 2);
  }

  if (effect === 'vhs-glitch') {
    const trackingNoise = gl.getUniformLocation(program, 'u_trackingNoise');
    if (trackingNoise) gl.uniform1f(trackingNoise, settings.trackingNoise);

    const trackingSpeed = gl.getUniformLocation(program, 'u_trackingSpeed');
    if (trackingSpeed) gl.uniform1f(trackingSpeed, settings.trackingSpeed);

    const colorBleed = gl.getUniformLocation(program, 'u_colorBleed');
    if (colorBleed) gl.uniform1f(colorBleed, settings.colorBleed);

    const warpIntensity = gl.getUniformLocation(program, 'u_warpIntensity');
    if (warpIntensity) gl.uniform1f(warpIntensity, settings.warpIntensity);

    const jitterAmount = gl.getUniformLocation(program, 'u_jitterAmount');
    if (jitterAmount) gl.uniform1f(jitterAmount, settings.jitterAmount);

    const scanlines = gl.getUniformLocation(program, 'u_scanlines');
    if (scanlines) gl.uniform1i(scanlines, settings.scanlines ? 1 : 0);

    const scanlineIntensity = gl.getUniformLocation(program, 'u_scanlineIntensity');
    if (scanlineIntensity) gl.uniform1f(scanlineIntensity, settings.scanlineIntensity);
  }

  if (effect === 'matrix-rain') {
    const speed = gl.getUniformLocation(program, 'u_speed');
    if (speed) gl.uniform1f(speed, settings.speed);

    const trailLength = gl.getUniformLocation(program, 'u_trailLength');
    if (trailLength) gl.uniform1f(trailLength, settings.trailLength);

    const glow = gl.getUniformLocation(program, 'u_glow');
    if (glow) gl.uniform1f(glow, settings.glow);

    const randomization = gl.getUniformLocation(program, 'u_randomization');
    if (randomization) gl.uniform1f(randomization, settings.randomization);
  }

  if (effect === 'halftone' || effect === 'halftone-cmyk' || effect === 'half-tone') {
    const dotSize = gl.getUniformLocation(program, 'u_dotSize');
    if (dotSize) gl.uniform1f(dotSize, settings.dotSize);

    const dotAngle = gl.getUniformLocation(program, 'u_dotAngle');
    if (dotAngle) gl.uniform1f(dotAngle, settings.dotAngle);

    const cmykSeparation = gl.getUniformLocation(program, 'u_cmykSeparation');
    if (cmykSeparation) gl.uniform1i(cmykSeparation, settings.cmykSeparation ? 1 : 0);
  }

  if (effect === 'dithering') {
    const ditherAlgorithm = gl.getUniformLocation(program, 'u_ditherAlgorithm');
    if (ditherAlgorithm) gl.uniform1i(ditherAlgorithm, settings.ditherAlgorithm === 'bayer' ? 0 : 1);

    const colorPalette = gl.getUniformLocation(program, 'u_colorPalette');
    if (colorPalette) gl.uniform1i(colorPalette, settings.colorPalette === '1bit' ? 0 : settings.colorPalette === 'gameboy' ? 1 : 2);
  }

  if (effect === 'grain' || effect === 'noise') {
    const grainIntensity = gl.getUniformLocation(program, 'u_grainIntensity');
    if (grainIntensity) gl.uniform1f(grainIntensity, settings.grainIntensity);

    const grainSize = gl.getUniformLocation(program, 'u_grainSize');
    if (grainSize) gl.uniform1f(grainSize, settings.grainSize);

    const noiseIntensity = gl.getUniformLocation(program, 'u_noiseIntensity');
    if (noiseIntensity) gl.uniform1f(noiseIntensity, settings.noiseIntensity);

    const noiseColor = gl.getUniformLocation(program, 'u_noiseColor');
    if (noiseColor) gl.uniform1i(noiseColor, settings.noiseColor ? 1 : 0);
  }

  if (effect === 'scanlines') {
    const scanlineIntensity = gl.getUniformLocation(program, 'u_scanlineIntensity');
    if (scanlineIntensity) gl.uniform1f(scanlineIntensity, settings.scanlineIntensity);

    const noiseIntensity = gl.getUniformLocation(program, 'u_noiseIntensity');
    if (noiseIntensity) gl.uniform1f(noiseIntensity, settings.noiseIntensity);
  }
}

/**
 * Simple copy frame (fallback)
 */
function renderCopyFrame(
  state: WebGLContextState,
  source: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap
): void {
  const gl = state.gl;
  if (!gl) return;

  // Get or create copy program
  let program = state.programs.get('copy');
  if (!program) {
    const isWebGL2 = gl instanceof WebGL2RenderingContext;
    const fragmentShader = isWebGL2 
      ? `#version 300 es
precision highp float;
in vec2 v_texCoord;
uniform sampler2D u_texture;
out vec4 fragColor;
void main() { fragColor = texture(u_texture, v_texCoord); }`
      : `
precision highp float;
varying vec2 v_texCoord;
uniform sampler2D u_texture;
void main() { gl_FragColor = texture2D(u_texture, v_texCoord); }`;
    
    program = createProgram(gl, STANDARD_VERTEX_SHADER, fragmentShader);
    if (program) {
      state.programs.set('copy', program);
    }
  }

  if (!program) return;

  gl.useProgram(program);

  // Create or update input texture
  let inputTexture = state.textures.get('input');
  if (!inputTexture) {
    inputTexture = createTexture(gl, source, { filter: gl.LINEAR });
    if (inputTexture) {
      state.textures.set('input', inputTexture);
    }
  } else if (source instanceof HTMLVideoElement) {
    updateTextureFromVideo(gl, inputTexture, source);
  }

  if (!inputTexture) return;

  // Bind texture
  const textureLocation = gl.getUniformLocation(program, 'u_texture');
  gl.uniform1i(textureLocation, 0);
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, inputTexture);

  // Create or get quad buffer
  let quadBuffer = state.buffers.get('quad');
  if (!quadBuffer) {
    quadBuffer = createQuadBuffer(gl);
    if (quadBuffer) {
      state.buffers.set('quad', quadBuffer);
    }
  }

  if (!quadBuffer) return;

  // Set up vertex attributes
  const positionLocation = gl.getAttribLocation(program, 'a_position');
  const texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');

  gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);

  if (positionLocation >= 0) {
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 16, 0);
  }

  if (texCoordLocation >= 0) {
    gl.enableVertexAttribArray(texCoordLocation);
    gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 16, 8);
  }

  // Render
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

/**
 * Render using Canvas2D (fallback)
 */
export function renderCanvas2DFrame(
  ctx: CanvasRenderingContext2D,
  source: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | null,
  effect: EffectType,
  settings: EffectSettings
): void {
  if (!source) return;

  const width = source instanceof HTMLVideoElement ? source.videoWidth : source.width;
  const height = source instanceof HTMLVideoElement ? source.videoHeight : source.height;

  ctx.canvas.width = width;
  ctx.canvas.height = height;

  // Draw source
  ctx.drawImage(source, 0, 0);

  // Apply simple effects
  if (effect === 'invert') {
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i];
      data[i + 1] = 255 - data[i + 1];
      data[i + 2] = 255 - data[i + 2];
    }
    ctx.putImageData(imageData, 0, 0);
  } else if (effect === 'threshold') {
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    const fg = parseHexColor(settings.fgColor) || { r: 255, g: 255, b: 255 };
    const bg = parseHexColor(settings.bgColor) || { r: 0, g: 0, b: 0 };
    
    for (let i = 0; i < data.length; i += 4) {
      const gray = (data[i] + data[i + 1] + data[i + 2]) / 3 / 255;
      const color = gray > settings.threshold ? fg : bg;
      data[i] = color.r;
      data[i + 1] = color.g;
      data[i + 2] = color.b;
    }
    ctx.putImageData(imageData, 0, 0);
  }
  // For other effects, just keep the original image
}

/**
 * Main render function
 */
export function renderFrame(
  state: RenderPipelineState,
  source: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | null,
  effect: EffectType,
  settings: EffectSettings,
  time: number
): void {
  if (!source) return;

  if (state.rendererType === 'webgl2' || state.rendererType === 'webgl1') {
    if (state.webgl) {
      renderWebGLFrame(state.webgl, source, effect, settings, time);
    }
  } else if (state.rendererType === 'canvas2d') {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      renderCanvas2DFrame(ctx, source, effect, settings);
    }
  }
  // WebGPU rendering would go here
}