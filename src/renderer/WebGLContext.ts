// ============================================================================
// Grainrad - WebGL2 Context (Fallback)
// ============================================================================

/**
 * WebGL capability detection
 */
export interface WebGLCapabilities {
  isWebGL2Supported: boolean;
  isWebGL1Supported: boolean;
  maxTextureSize: number;
  maxRenderbufferSize: number;
  maxViewportDims: [number, number];
  floatTextureSupport: boolean;
  linearFilteringForFloat: boolean;
  error: string | null;
}

/**
 * WebGL context state
 */
export interface WebGLContextState {
  gl: WebGL2RenderingContext | WebGLRenderingContext | null;
  capabilities: WebGLCapabilities;
  programs: Map<string, WebGLProgram | null>;
  textures: Map<string, WebGLTexture | null>;
  buffers: Map<string, WebGLBuffer | null>;
}

/**
 * Check WebGL support
 */
export function checkWebGLSupport(): WebGLCapabilities {
  const caps: WebGLCapabilities = {
    isWebGL2Supported: false,
    isWebGL1Supported: false,
    maxTextureSize: 0,
    maxRenderbufferSize: 0,
    maxViewportDims: [0, 0],
    floatTextureSupport: false,
    linearFilteringForFloat: false,
    error: null,
  };

  try {
    // Test WebGL2
    const canvas2 = document.createElement('canvas');
    const gl2 = canvas2.getContext('webgl2');
    if (gl2) {
      caps.isWebGL2Supported = true;
      caps.maxTextureSize = gl2.getParameter(gl2.MAX_TEXTURE_SIZE);
      caps.maxRenderbufferSize = gl2.getParameter(gl2.MAX_RENDERBUFFER_SIZE);
      caps.maxViewportDims = gl2.getParameter(gl2.MAX_VIEWPORT_DIMS);
      
      // Check float texture support
      const ext = gl2.getExtension('EXT_color_buffer_float');
      caps.floatTextureSupport = !!ext;
      caps.linearFilteringForFloat = !!gl2.getExtension('OES_texture_float_linear');
    }

    // Test WebGL1 as fallback
    const canvas1 = document.createElement('canvas');
    const gl1 = canvas1.getContext('webgl');
    if (gl1) {
      caps.isWebGL1Supported = true;
      if (!caps.isWebGL2Supported) {
        caps.maxTextureSize = gl1.getParameter(gl1.MAX_TEXTURE_SIZE);
        caps.maxRenderbufferSize = gl1.getParameter(gl1.MAX_RENDERBUFFER_SIZE);
        caps.maxViewportDims = gl1.getParameter(gl1.MAX_VIEWPORT_DIMS);
      }
    }

    if (!caps.isWebGL2Supported && !caps.isWebGL1Supported) {
      caps.error = 'WebGL is not supported in this browser';
    }
  } catch (err) {
    caps.error = err instanceof Error ? err.message : 'Failed to detect WebGL support';
  }

  return caps;
}

/**
 * Initialize WebGL context for a canvas
 */
export function initWebGLContext(
  canvas: HTMLCanvasElement,
  preferWebGL2: boolean = true
): WebGLContextState | null {
  const capabilities = checkWebGLSupport();
  
  let gl: WebGL2RenderingContext | WebGLRenderingContext | null = null;

  if (preferWebGL2 && capabilities.isWebGL2Supported) {
    gl = canvas.getContext('webgl2', {
      alpha: true,
      premultipliedAlpha: true,
      preserveDrawingBuffer: true,
    });
  }

  if (!gl && capabilities.isWebGL1Supported) {
    gl = canvas.getContext('webgl', {
      alpha: true,
      premultipliedAlpha: true,
      preserveDrawingBuffer: true,
    });
  }

  return {
    gl,
    capabilities,
    programs: new Map(),
    textures: new Map(),
    buffers: new Map(),
  };
}

/**
 * Compile a shader
 */
export function compileShader(
  gl: WebGL2RenderingContext | WebGLRenderingContext,
  type: number,
  source: string
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

/**
 * Create a shader program
 */
export function createProgram(
  gl: WebGL2RenderingContext | WebGLRenderingContext,
  vertexSource: string,
  fragmentSource: string
): WebGLProgram | null {
  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource);

  if (!vertexShader || !fragmentShader) {
    return null;
  }

  const program = gl.createProgram();
  if (!program) return null;

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }

  // Clean up shaders after linking
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);

  return program;
}

/**
 * Create a texture
 */
export function createTexture(
  gl: WebGL2RenderingContext | WebGLRenderingContext,
  image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap | null,
  options: {
    filter?: number;
    wrap?: number;
    format?: number;
    internalFormat?: number;
    type?: number;
  } = {}
): WebGLTexture | null {
  const texture = gl.createTexture();
  if (!texture) return null;

  const filter = options.filter ?? gl.LINEAR;
  const wrap = options.wrap ?? gl.CLAMP_TO_EDGE;
  const format = options.format ?? gl.RGBA;
  const internalFormat = options.internalFormat ?? format;
  const type = options.type ?? gl.UNSIGNED_BYTE;

  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrap);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrap);

  if (image) {
    gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, format, type, image);
  }

  return texture;
}

/**
 * Update texture from video frame
 */
export function updateTextureFromVideo(
  gl: WebGL2RenderingContext | WebGLRenderingContext,
  texture: WebGLTexture,
  video: HTMLVideoElement
): void {
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
}

/**
 * Create a framebuffer
 */
export function createFramebuffer(
  gl: WebGL2RenderingContext | WebGLRenderingContext,
  texture: WebGLTexture
): WebGLFramebuffer | null {
  const framebuffer = gl.createFramebuffer();
  if (!framebuffer) return null;

  gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

  const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
  if (status !== gl.FRAMEBUFFER_COMPLETE) {
    console.error('Framebuffer incomplete:', status);
    gl.deleteFramebuffer(framebuffer);
    return null;
  }

  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  return framebuffer;
}

/**
 * Create a vertex buffer with quad geometry
 */
export function createQuadBuffer(
  gl: WebGL2RenderingContext | WebGLRenderingContext
): WebGLBuffer | null {
  const vertices = new Float32Array([
    // x, y, u, v
    -1, -1, 0, 1,
     1, -1, 1, 1,
    -1,  1, 0, 0,
     1,  1, 1, 0,
  ]);

  const buffer = gl.createBuffer();
  if (!buffer) return null;

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  return buffer;
}

/**
 * Standard vertex shader for fullscreen quad (WebGL2)
 */
export const STANDARD_VERTEX_SHADER = `#version 300 es
in vec2 a_position;
in vec2 a_texCoord;
out vec2 v_texCoord;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_texCoord = a_texCoord;
}
`;

/**
 * WebGL1 vertex shader
 */
export const STANDARD_VERTEX_SHADER_WEBGL1 = `
attribute vec2 a_position;
attribute vec2 a_texCoord;
varying vec2 v_texCoord;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_texCoord = a_texCoord;
}
`;

/**
 * Simple copy fragment shader (WebGL2)
 */
export const COPY_FRAGMENT_SHADER = `#version 300 es
precision highp float;
in vec2 v_texCoord;
uniform sampler2D u_texture;
out vec4 fragColor;

void main() {
  fragColor = texture(u_texture, v_texCoord);
}
`;

/**
 * WebGL1 copy fragment shader
 */
export const COPY_FRAGMENT_SHADER_WEBGL1 = `
precision highp float;
varying vec2 v_texCoord;
uniform sampler2D u_texture;

void main() {
  gl_FragColor = texture2D(u_texture, v_texCoord);
}
`;