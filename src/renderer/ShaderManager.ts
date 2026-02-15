// ============================================================================
// Grainrad - Shader Manager
// ============================================================================

import { EffectType } from '../types/effects';

/**
 * Shader definition for an effect
 */
export interface ShaderDefinition {
  id: EffectType;
  vertexShader: string;
  fragmentShader: string;
  uniforms: string[];
}

/**
 * ASCII fragment shader (WebGL2)
 */
export const ASCII_FRAGMENT_SHADER = `#version 300 es
precision highp float;

in vec2 v_texCoord;
uniform sampler2D u_texture;
uniform float u_cellSize;
uniform float u_brightness;
uniform float u_contrast;
uniform float u_threshold;
uniform int u_colored;
uniform vec4 u_fgColor;
uniform vec4 u_bgColor;
uniform float u_bgOpacity;
uniform int u_charsetLength;

out vec4 fragColor;

// Character ramp from dark to light
const float CHAR_RAMP[10] = float[10](
  0.0, 0.11, 0.22, 0.33, 0.44, 0.55, 0.66, 0.77, 0.88, 1.0
);

float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

void main() {
  vec2 pixelCoord = v_texCoord * vec2(textureSize(u_texture, 0));
  vec2 cellCoord = floor(pixelCoord / u_cellSize) * u_cellSize + u_cellSize * 0.5;
  vec2 sampleCoord = cellCoord / vec2(textureSize(u_texture, 0));
  
  vec4 texColor = texture(u_texture, sampleCoord);
  float gray = luma(texColor.rgb);
  
  // Apply brightness and contrast
  gray = (gray - 0.5) * (u_contrast + 1.0) + 0.5 + u_brightness;
  gray = clamp(gray, 0.0, 1.0);
  
  // Background
  vec3 bg = u_bgColor.rgb * u_bgOpacity;
  
  // Foreground color
  vec3 fg = u_colored == 1 ? texColor.rgb : u_fgColor.rgb;
  
  // Determine character brightness level
  int charIndex = int(gray * float(u_charsetLength - 1));
  charIndex = clamp(charIndex, 0, u_charsetLength - 1);
  
  // Simple brightness-based rendering
  float charBrightness = gray;
  
  vec3 color = mix(bg, fg, charBrightness);
  fragColor = vec4(color, 1.0);
}
`;

/**
 * Pixel sorting fragment shader (WebGL2)
 */
export const PIXEL_SORT_FRAGMENT_SHADER = `#version 300 es
precision highp float;

in vec2 v_texCoord;
uniform sampler2D u_texture;
uniform float u_threshold;
uniform int u_direction; // 0 = horizontal, 1 = vertical
uniform int u_comparator; // 0 = luma, 1 = hue, 2 = saturation
uniform float u_time;

out vec4 fragColor;

float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

float hue(vec3 color) {
  float maxC = max(max(color.r, color.g), color.b);
  float minC = min(min(color.r, color.g), color.b);
  float delta = maxC - minC;
  
  if (delta < 0.001) return 0.0;
  
  float h = 0.0;
  if (maxC == color.r) {
    h = (color.g - color.b) / delta;
  } else if (maxC == color.g) {
    h = 2.0 + (color.b - color.r) / delta;
  } else {
    h = 4.0 + (color.r - color.g) / delta;
  }
  return fract(h / 6.0);
}

float saturation(vec3 color) {
  float maxC = max(max(color.r, color.g), color.b);
  float minC = min(min(color.r, color.g), color.b);
  if (maxC < 0.001) return 0.0;
  return (maxC - minC) / maxC;
}

float getComparatorValue(vec3 color) {
  if (u_comparator == 0) return luma(color);
  if (u_comparator == 1) return hue(color);
  return saturation(color);
}

void main() {
  vec2 size = vec2(textureSize(u_texture, 0));
  vec4 color = texture(u_texture, v_texCoord);
  
  // Simple pixel sorting effect - sort based on threshold
  float sortValue = getComparatorValue(color.rgb);
  
  if (sortValue > u_threshold) {
    // Apply sorting effect (simplified - just offset for now)
    float offset = sin(v_texCoord.y * 10.0 + u_time) * 0.01;
    vec2 sortedCoord = u_direction == 0 
      ? vec2(v_texCoord.x + offset, v_texCoord.y)
      : vec2(v_texCoord.x, v_texCoord.y + offset);
    color = texture(u_texture, sortedCoord);
  }
  
  fragColor = color;
}
`;

/**
 * VHS Glitch fragment shader (WebGL2)
 */
export const VHS_GLITCH_FRAGMENT_SHADER = `#version 300 es
precision highp float;

in vec2 v_texCoord;
uniform sampler2D u_texture;
uniform float u_trackingNoise;
uniform float u_trackingSpeed;
uniform float u_colorBleed;
uniform float u_warpIntensity;
uniform float u_jitterAmount;
uniform float u_time;
uniform int u_scanlines;
uniform float u_scanlineIntensity;

out vec4 fragColor;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

void main() {
  vec2 size = vec2(textureSize(u_texture, 0));
  
  // Tracking noise - horizontal bands
  float trackingY = v_texCoord.y + u_time * u_trackingSpeed * 0.1;
  float trackingBand = step(0.98, fract(trackingY * 5.0));
  float noiseLine = trackingBand * random(vec2(floor(trackingY * 100.0), u_time)) * u_trackingNoise;
  
  // Warp - sine wave distortion
  float warp = sin(v_texCoord.y * 20.0 + u_time * 2.0) * u_warpIntensity * 0.02;
  
  // Jitter - random horizontal offset
  float jitter = (random(vec2(floor(v_texCoord.y * 100.0), floor(u_time * 30.0))) - 0.5) * u_jitterAmount * 0.02;
  
  // Apply distortions
  vec2 distortedCoord = vec2(
    v_texCoord.x + warp + jitter + noiseLine * 0.1,
    v_texCoord.y
  );
  distortedCoord = clamp(distortedCoord, 0.0, 1.0);
  
  // Color bleed - chromatic aberration
  float bleed = u_colorBleed * 0.01;
  float r = texture(u_texture, distortedCoord + vec2(bleed, 0.0)).r;
  float g = texture(u_texture, distortedCoord).g;
  float b = texture(u_texture, distortedCoord - vec2(bleed, 0.0)).b;
  
  vec3 color = vec3(r, g, b);
  
  // Add noise
  color += (random(v_texCoord + u_time) - 0.5) * u_trackingNoise * 0.3;
  
  // Scanlines
  if (u_scanlines == 1) {
    float scanline = sin(v_texCoord.y * size.y * 3.14159) * 0.5 + 0.5;
    color *= 1.0 - scanline * u_scanlineIntensity;
  }
  
  fragColor = vec4(color, 1.0);
}
`;

/**
 * Halftone fragment shader (WebGL2)
 */
export const HALFTONE_FRAGMENT_SHADER = `#version 300 es
precision highp float;

in vec2 v_texCoord;
uniform sampler2D u_texture;
uniform float u_cellSize;
uniform float u_dotSize;
uniform float u_dotAngle;
uniform int u_colored;
uniform int u_cmykSeparation;

out vec4 fragColor;

float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

float halftone(vec2 coord, float angle, float size) {
  float s = sin(angle);
  float c = cos(angle);
  vec2 rotated = vec2(
    coord.x * c - coord.y * s,
    coord.x * s + coord.y * c
  );
  vec2 cell = fract(rotated / size) * 2.0 - 1.0;
  return 1.0 - length(cell);
}

void main() {
  vec2 size = vec2(textureSize(u_texture, 0));
  vec4 texColor = texture(u_texture, v_texCoord);
  
  float angleRad = u_dotAngle * 3.14159 / 180.0;
  
  if (u_cmykSeparation == 1) {
    // CMYK halftone
    float c = 1.0 - texColor.r;
    float m = 1.0 - texColor.g;
    float y = 1.0 - texColor.b;
    float k = luma(1.0 - texColor.rgb);
    
    float cDot = step(c, halftone(v_texCoord * size, angleRad, u_dotSize));
    float mDot = step(m, halftone(v_texCoord * size, angleRad + 0.2618, u_dotSize));
    float yDot = step(y, halftone(v_texCoord * size, angleRad + 0.5236, u_dotSize));
    float kDot = step(k, halftone(v_texCoord * size, angleRad + 0.7854, u_dotSize));
    
    vec3 color = vec3(1.0 - cDot, 1.0 - mDot, 1.0 - yDot) * (1.0 - kDot);
    fragColor = vec4(color, 1.0);
  } else {
    // Simple halftone
    float gray = luma(texColor.rgb);
    float dot = step(gray, halftone(v_texCoord * size, angleRad, u_dotSize));
    
    vec3 color = u_colored == 1 
      ? texColor.rgb * dot 
      : vec3(dot);
    fragColor = vec4(color, 1.0);
  }
}
`;

/**
 * Dithering fragment shader (WebGL2)
 */
export const DITHERING_FRAGMENT_SHADER = `#version 300 es
precision highp float;

in vec2 v_texCoord;
uniform sampler2D u_texture;
uniform float u_cellSize;
uniform int u_ditherAlgorithm; // 0 = bayer, 1 = floyd-steinberg
uniform int u_colorPalette; // 0 = 1bit, 1 = gameboy, 2 = sepia
uniform int u_colored;

out vec4 fragColor;

// 4x4 Bayer matrix
const float BAYER[16] = float[16](
  0.0/16.0, 8.0/16.0, 2.0/16.0, 10.0/16.0,
  12.0/16.0, 4.0/16.0, 14.0/16.0, 6.0/16.0,
  3.0/16.0, 11.0/16.0, 1.0/16.0, 9.0/16.0,
  15.0/16.0, 7.0/16.0, 13.0/16.0, 5.0/16.0
);

float bayerThreshold(ivec2 coord) {
  int x = coord.x % 4;
  int y = coord.y % 4;
  return BAYER[y * 4 + x];
}

float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

vec3 gameboyPalette(float gray) {
  // GameBoy green palette
  if (gray < 0.25) return vec3(0.06, 0.22, 0.06);
  if (gray < 0.5) return vec3(0.19, 0.39, 0.19);
  if (gray < 0.75) return vec3(0.54, 0.58, 0.26);
  return vec3(0.61, 0.73, 0.21);
}

vec3 sepiaPalette(float gray) {
  return vec3(
    min(1.0, gray * 1.2),
    gray * 0.95,
    gray * 0.7
  );
}

void main() {
  ivec2 size = textureSize(u_texture, 0);
  ivec2 pixelCoord = ivec2(v_texCoord * vec2(size));
  
  vec4 texColor = texture(u_texture, v_texCoord);
  float gray = luma(texColor.rgb);
  
  // Apply Bayer dithering
  float threshold = bayerThreshold(pixelCoord);
  float dithered = step(threshold, gray);
  
  vec3 color;
  if (u_colorPalette == 0) {
    // 1-bit
    color = vec3(dithered);
  } else if (u_colorPalette == 1) {
    // GameBoy
    color = gameboyPalette(dithered);
  } else {
    // Sepia
    color = sepiaPalette(dithered);
  }
  
  if (u_colored == 1) {
    color = mix(color, texColor.rgb, 0.5);
  }
  
  fragColor = vec4(color, 1.0);
}
`;

/**
 * Matrix Rain fragment shader (WebGL2)
 */
export const MATRIX_RAIN_FRAGMENT_SHADER = `#version 300 es
precision highp float;

in vec2 v_texCoord;
uniform sampler2D u_texture;
uniform float u_cellSize;
uniform float u_speed;
uniform float u_trailLength;
uniform float u_glow;
uniform float u_randomization;
uniform vec4 u_fgColor;
uniform float u_time;

out vec4 fragColor;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

void main() {
  vec2 size = vec2(textureSize(u_texture, 0));
  vec2 cellCoord = floor(v_texCoord * size / u_cellSize);
  
  vec4 texColor = texture(u_texture, v_texCoord);
  float gray = luma(texColor.rgb);
  
  // Calculate falling effect
  float column = cellCoord.x;
  float row = cellCoord.y;
  float numRows = size.y / u_cellSize;
  
  // Each column has different speed and phase
  float phase = random(vec2(column, 0.0)) * 100.0;
  float speed = 0.5 + random(vec2(column, 1.0)) * u_randomization;
  
  // Calculate trail position
  float head = mod(u_time * u_speed * speed + phase, numRows + u_trailLength);
  float distance = mod(head - row + numRows + u_trailLength, numRows + u_trailLength);
  
  // Trail strength
  float trailStrength = 1.0 - distance / u_trailLength;
  trailStrength = clamp(trailStrength, 0.0, 1.0);
  
  // Mix with source brightness
  float brightness = gray * 0.3 + trailStrength * 0.7;
  
  // Apply glow
  vec3 color = u_fgColor.rgb * brightness;
  
  if (u_glow > 0.0) {
    // Add glow effect
    float glowIntensity = pow(brightness, 2.0 - u_glow);
    color = u_fgColor.rgb * glowIntensity;
  }
  
  fragColor = vec4(color, brightness);
}
`;

/**
 * Edge detection fragment shader (WebGL2)
 */
export const EDGE_DETECTION_FRAGMENT_SHADER = `#version 300 es
precision highp float;

in vec2 v_texCoord;
uniform sampler2D u_texture;
uniform float u_threshold;
uniform vec4 u_fgColor;
uniform vec4 u_bgColor;
uniform int u_colored;

out vec4 fragColor;

float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

void main() {
  ivec2 size = textureSize(u_texture, 0);
  vec2 texelSize = 1.0 / vec2(size);
  
  // Sample 3x3 neighborhood
  float tl = luma(texture(u_texture, v_texCoord + vec2(-1, -1) * texelSize).rgb);
  float t  = luma(texture(u_texture, v_texCoord + vec2( 0, -1) * texelSize).rgb);
  float tr = luma(texture(u_texture, v_texCoord + vec2( 1, -1) * texelSize).rgb);
  float l  = luma(texture(u_texture, v_texCoord + vec2(-1,  0) * texelSize).rgb);
  float r  = luma(texture(u_texture, v_texCoord + vec2( 1,  0) * texelSize).rgb);
  float bl = luma(texture(u_texture, v_texCoord + vec2(-1,  1) * texelSize).rgb);
  float b  = luma(texture(u_texture, v_texCoord + vec2( 0,  1) * texelSize).rgb);
  float br = luma(texture(u_texture, v_texCoord + vec2( 1,  1) * texelSize).rgb);
  
  // Sobel operator
  float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
  float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
  
  float edge = sqrt(gx*gx + gy*gy);
  
  if (edge > u_threshold) {
    vec3 color = u_colored == 1 
      ? texture(u_texture, v_texCoord).rgb 
      : u_fgColor.rgb;
    fragColor = vec4(color, 1.0);
  } else {
    fragColor = vec4(u_bgColor.rgb, 1.0);
  }
}
`;

/**
 * Grain/Noise fragment shader (WebGL2)
 */
export const GRAIN_FRAGMENT_SHADER = `#version 300 es
precision highp float;

in vec2 v_texCoord;
uniform sampler2D u_texture;
uniform float u_grainIntensity;
uniform float u_grainSize;
uniform float u_noiseIntensity;
uniform int u_noiseColor;
uniform float u_time;

out vec4 fragColor;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
  vec4 texColor = texture(u_texture, v_texCoord);
  
  // Film grain
  vec2 grainCoord = v_texCoord * u_grainSize + u_time * 0.1;
  float grain = (random(grainCoord) - 0.5) * u_grainIntensity;
  
  // Digital noise
  float noise = (random(v_texCoord + fract(u_time)) - 0.5) * u_noiseIntensity;
  
  vec3 color = texColor.rgb;
  
  // Apply grain
  color += grain;
  
  // Apply noise
  if (u_noiseColor == 1) {
    color += vec3(
      random(v_texCoord + u_time) - 0.5,
      random(v_texCoord + u_time + 0.1) - 0.5,
      random(v_texCoord + u_time + 0.2) - 0.5
    ) * u_noiseIntensity;
  } else {
    color += noise;
  }
  
  fragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}
`;

/**
 * All shader definitions
 */
export const SHADER_DEFINITIONS: Record<EffectType, ShaderDefinition> = {
  'ascii': {
    id: 'ascii',
    vertexShader: '', // Will use standard vertex shader
    fragmentShader: ASCII_FRAGMENT_SHADER,
    uniforms: ['u_cellSize', 'u_brightness', 'u_contrast', 'u_threshold', 'u_colored', 'u_fgColor', 'u_bgColor', 'u_bgOpacity', 'u_charsetLength'],
  },
  'dithering': {
    id: 'dithering',
    vertexShader: '',
    fragmentShader: DITHERING_FRAGMENT_SHADER,
    uniforms: ['u_cellSize', 'u_ditherAlgorithm', 'u_colorPalette', 'u_colored'],
  },
  'pixel-sorting': {
    id: 'pixel-sorting',
    vertexShader: '',
    fragmentShader: PIXEL_SORT_FRAGMENT_SHADER,
    uniforms: ['u_threshold', 'u_direction', 'u_comparator', 'u_time'],
  },
  'pixelate': {
    id: 'pixelate',
    vertexShader: '',
    fragmentShader: `#version 300 es
precision highp float;
in vec2 v_texCoord;
uniform sampler2D u_texture;
uniform float u_cellSize;
uniform int u_colored;
out vec4 fragColor;

void main() {
  vec2 size = vec2(textureSize(u_texture, 0));
  vec2 cellCoord = floor(v_texCoord * size / u_cellSize) * u_cellSize / size;
  vec4 color = texture(u_texture, cellCoord);
  fragColor = u_colored == 1 ? color : vec4(vec3(dot(color.rgb, vec3(0.299, 0.587, 0.114))), 1.0);
}`,
    uniforms: ['u_cellSize', 'u_colored'],
  },
  'mosaic': {
    id: 'mosaic',
    vertexShader: '',
    fragmentShader: `#version 300 es
precision highp float;
in vec2 v_texCoord;
uniform sampler2D u_texture;
uniform float u_cellSize;
out vec4 fragColor;

vec3 quantize(vec3 color, float levels) {
  return floor(color * levels) / levels;
}

void main() {
  vec2 size = vec2(textureSize(u_texture, 0));
  vec2 cellCoord = floor(v_texCoord * size / u_cellSize) * u_cellSize / size;
  vec4 color = texture(u_texture, cellCoord);
  fragColor = vec4(quantize(color.rgb, 5.0), 1.0);
}`,
    uniforms: ['u_cellSize'],
  },
  'pixel-grid': {
    id: 'pixel-grid',
    vertexShader: '',
    fragmentShader: `#version 300 es
precision highp float;
in vec2 v_texCoord;
uniform sampler2D u_texture;
uniform float u_cellSize;
uniform int u_colored;
out vec4 fragColor;

void main() {
  vec2 size = vec2(textureSize(u_texture, 0));
  vec2 cellCoord = floor(v_texCoord * size / u_cellSize) * u_cellSize / size;
  vec2 cellPixel = fract(v_texCoord * size / u_cellSize);
  vec4 color = texture(u_texture, cellCoord);
  
  // Add grid lines
  float grid = step(0.1, cellPixel.x) * step(0.1, cellPixel.y);
  
  vec3 finalColor = u_colored == 1 ? color.rgb : vec3(dot(color.rgb, vec3(0.299, 0.587, 0.114)));
  fragColor = vec4(finalColor * grid, 1.0);
}`,
    uniforms: ['u_cellSize', 'u_colored'],
  },
  'matrix-rain': {
    id: 'matrix-rain',
    vertexShader: '',
    fragmentShader: MATRIX_RAIN_FRAGMENT_SHADER,
    uniforms: ['u_cellSize', 'u_speed', 'u_trailLength', 'u_glow', 'u_randomization', 'u_fgColor', 'u_time'],
  },
  'matrix-dots': {
    id: 'matrix-dots',
    vertexShader: '',
    fragmentShader: `#version 300 es
precision highp float;
in vec2 v_texCoord;
uniform sampler2D u_texture;
uniform float u_cellSize;
uniform int u_colored;
uniform vec4 u_fgColor;
out vec4 fragColor;

float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

void main() {
  vec2 size = vec2(textureSize(u_texture, 0));
  vec2 cellCoord = floor(v_texCoord * size / u_cellSize);
  vec2 cellPixel = fract(v_texCoord * size / u_cellSize) * 2.0 - 1.0;
  
  vec4 texColor = texture(u_texture, (cellCoord * u_cellSize + u_cellSize * 0.5) / size);
  float gray = luma(texColor.rgb);
  
  float radius = gray * 0.45;
  float dist = length(cellPixel);
  float dot = step(dist, radius);
  
  vec3 color = u_colored == 1 ? texColor.rgb : u_fgColor.rgb;
  fragColor = vec4(color * dot, 1.0);
}`,
    uniforms: ['u_cellSize', 'u_colored', 'u_fgColor'],
  },
  'halftone': {
    id: 'halftone',
    vertexShader: '',
    fragmentShader: HALFTONE_FRAGMENT_SHADER,
    uniforms: ['u_cellSize', 'u_dotSize', 'u_dotAngle', 'u_colored', 'u_cmykSeparation'],
  },
  'halftone-cmyk': {
    id: 'halftone-cmyk',
    vertexShader: '',
    fragmentShader: HALFTONE_FRAGMENT_SHADER,
    uniforms: ['u_cellSize', 'u_dotSize', 'u_dotAngle', 'u_cmykSeparation'],
  },
  'halftone-dots': {
    id: 'halftone-dots',
    vertexShader: '',
    fragmentShader: `#version 300 es
precision highp float;
in vec2 v_texCoord;
uniform sampler2D u_texture;
uniform float u_cellSize;
uniform int u_colored;
uniform vec4 u_fgColor;
out vec4 fragColor;

float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

void main() {
  vec2 size = vec2(textureSize(u_texture, 0));
  vec2 cellCoord = floor(v_texCoord * size / u_cellSize);
  vec2 cellCenter = (cellCoord + 0.5) * u_cellSize / size;
  
  vec4 texColor = texture(u_texture, cellCenter);
  float gray = luma(texColor.rgb);
  
  // Variable dot size based on brightness
  float dotWidth = (1.0 - gray) * u_cellSize * 0.85;
  float lineHeight = u_cellSize * 0.16;
  
  vec2 pixelPos = v_texCoord * size;
  vec2 cellPixel = pixelPos - cellCoord * u_cellSize;
  
  float inDot = step(abs(cellPixel.y - u_cellSize * 0.5), lineHeight * 0.5) *
                step(abs(cellPixel.x - u_cellSize * 0.5), dotWidth * 0.5);
  
  vec3 color = u_colored == 1 ? texColor.rgb : u_fgColor.rgb;
  fragColor = vec4(color * inDot, 1.0);
}`,
    uniforms: ['u_cellSize', 'u_colored', 'u_fgColor'],
  },
  'crosses': {
    id: 'crosses',
    vertexShader: '',
    fragmentShader: `#version 300 es
precision highp float;
in vec2 v_texCoord;
uniform sampler2D u_texture;
uniform float u_cellSize;
uniform int u_colored;
uniform vec4 u_fgColor;
out vec4 fragColor;

float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

void main() {
  vec2 size = vec2(textureSize(u_texture, 0));
  vec2 cellCoord = floor(v_texCoord * size / u_cellSize);
  vec2 cellCenter = (cellCoord + 0.5) * u_cellSize / size;
  
  vec4 texColor = texture(u_texture, cellCenter);
  float gray = luma(texColor.rgb);
  
  vec2 pixelPos = v_texCoord * size;
  vec2 cellPixel = pixelPos - cellCoord * u_cellSize - u_cellSize * 0.5;
  
  float crossSize = (1.0 - gray) * u_cellSize * 0.9;
  float thickness = u_cellSize * 0.12;
  
  float inCross = step(abs(cellPixel.x), thickness * 0.5) * step(abs(cellPixel.y), crossSize * 0.5) +
                  step(abs(cellPixel.y), thickness * 0.5) * step(abs(cellPixel.x), crossSize * 0.5);
  inCross = min(inCross, 1.0);
  
  vec3 color = u_colored == 1 ? texColor.rgb : u_fgColor.rgb;
  fragColor = vec4(color * inCross, 1.0);
}`,
    uniforms: ['u_cellSize', 'u_colored', 'u_fgColor'],
  },
  'vhs-glitch': {
    id: 'vhs-glitch',
    vertexShader: '',
    fragmentShader: VHS_GLITCH_FRAGMENT_SHADER,
    uniforms: ['u_trackingNoise', 'u_trackingSpeed', 'u_colorBleed', 'u_warpIntensity', 'u_jitterAmount', 'u_time', 'u_scanlines', 'u_scanlineIntensity'],
  },
  'scanlines': {
    id: 'scanlines',
    vertexShader: '',
    fragmentShader: `#version 300 es
precision highp float;
in vec2 v_texCoord;
uniform sampler2D u_texture;
uniform float u_scanlineIntensity;
uniform float u_noiseIntensity;
out vec4 fragColor;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
  vec2 size = vec2(textureSize(u_texture, 0));
  vec4 texColor = texture(u_texture, v_texCoord);
  
  // Scanlines
  float scanline = sin(v_texCoord.y * size.y * 3.14159) * 0.5 + 0.5;
  texColor.rgb *= 1.0 - scanline * u_scanlineIntensity;
  
  // Noise
  texColor.rgb += (random(v_texCoord) - 0.5) * u_noiseIntensity;
  
  fragColor = texColor;
}`,
    uniforms: ['u_scanlineIntensity', 'u_noiseIntensity'],
  },
  'edge-detection': {
    id: 'edge-detection',
    vertexShader: '',
    fragmentShader: EDGE_DETECTION_FRAGMENT_SHADER,
    uniforms: ['u_threshold', 'u_fgColor', 'u_bgColor', 'u_colored'],
  },
  'edge-lines': {
    id: 'edge-lines',
    vertexShader: '',
    fragmentShader: `#version 300 es
precision highp float;
in vec2 v_texCoord;
uniform sampler2D u_texture;
uniform float u_threshold;
uniform vec4 u_fgColor;
out vec4 fragColor;

float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

void main() {
  ivec2 size = textureSize(u_texture, 0);
  vec2 texelSize = 1.0 / vec2(size);
  
  float tl = luma(texture(u_texture, v_texCoord + vec2(-1, -1) * texelSize).rgb);
  float t  = luma(texture(u_texture, v_texCoord + vec2( 0, -1) * texelSize).rgb);
  float tr = luma(texture(u_texture, v_texCoord + vec2( 1, -1) * texelSize).rgb);
  float l  = luma(texture(u_texture, v_texCoord + vec2(-1,  0) * texelSize).rgb);
  float r  = luma(texture(u_texture, v_texCoord + vec2( 1,  0) * texelSize).rgb);
  float bl = luma(texture(u_texture, v_texCoord + vec2(-1,  1) * texelSize).rgb);
  float b  = luma(texture(u_texture, v_texCoord + vec2( 0,  1) * texelSize).rgb);
  float br = luma(texture(u_texture, v_texCoord + vec2( 1,  1) * texelSize).rgb);
  
  float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
  float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
  
  float edge = sqrt(gx*gx + gy*gy);
  
  if (edge > u_threshold) {
    // Draw as ASCII edge lines
    float angle = atan(gy, gx);
    float absX = abs(gx);
    float absY = abs(gy);
    
    vec3 color = u_fgColor.rgb;
    fragColor = vec4(color, 1.0);
  } else {
    fragColor = vec4(0.0, 0.0, 0.0, 1.0);
  }
}`,
    uniforms: ['u_threshold', 'u_fgColor'],
  },
  'convolution': {
    id: 'convolution',
    vertexShader: '',
    fragmentShader: `#version 300 es
precision highp float;
in vec2 v_texCoord;
uniform sampler2D u_texture;
uniform int u_colored;
out vec4 fragColor;

void main() {
  ivec2 size = textureSize(u_texture, 0);
  vec2 texelSize = 1.0 / vec2(size);
  
  // Sharpen kernel
  float kernel[9] = float[9](
    0.0, -1.0, 0.0,
    -1.0, 5.0, -1.0,
    0.0, -1.0, 0.0
  );
  
  vec2 offsets[9] = vec2[9](
    vec2(-1, -1), vec2(0, -1), vec2(1, -1),
    vec2(-1,  0), vec2(0,  0), vec2(1,  0),
    vec2(-1,  1), vec2(0,  1), vec2(1,  1)
  );
  
  vec3 color = vec3(0.0);
  for (int i = 0; i < 9; i++) {
    vec4 sample = texture(u_texture, v_texCoord + offsets[i] * texelSize);
    color += sample.rgb * kernel[i];
  }
  
  if (u_colored == 0) {
    float gray = dot(color, vec3(0.299, 0.587, 0.114));
    color = vec3(gray);
  }
  
  fragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}`,
    uniforms: ['u_colored'],
  },
  'threshold': {
    id: 'threshold',
    vertexShader: '',
    fragmentShader: `#version 300 es
precision highp float;
in vec2 v_texCoord;
uniform sampler2D u_texture;
uniform float u_threshold;
uniform vec4 u_fgColor;
uniform vec4 u_bgColor;
out vec4 fragColor;

float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

void main() {
  vec4 texColor = texture(u_texture, v_texCoord);
  float gray = luma(texColor.rgb);
  
  vec3 color = gray > u_threshold ? u_fgColor.rgb : u_bgColor.rgb;
  fragColor = vec4(color, 1.0);
}`,
    uniforms: ['u_threshold', 'u_fgColor', 'u_bgColor'],
  },
  'invert': {
    id: 'invert',
    vertexShader: '',
    fragmentShader: `#version 300 es
precision highp float;
in vec2 v_texCoord;
uniform sampler2D u_texture;
out vec4 fragColor;

void main() {
  vec4 texColor = texture(u_texture, v_texCoord);
  fragColor = vec4(1.0 - texColor.rgb, 1.0);
}`,
    uniforms: [],
  },
  'led': {
    id: 'led',
    vertexShader: '',
    fragmentShader: `#version 300 es
precision highp float;
in vec2 v_texCoord;
uniform sampler2D u_texture;
uniform float u_cellSize;
uniform int u_colored;
uniform vec4 u_fgColor;
out vec4 fragColor;

float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

void main() {
  vec2 size = vec2(textureSize(u_texture, 0));
  vec2 cellCoord = floor(v_texCoord * size / u_cellSize);
  vec2 cellPixel = fract(v_texCoord * size / u_cellSize) * 2.0 - 1.0;
  
  vec4 texColor = texture(u_texture, (cellCoord * u_cellSize + u_cellSize * 0.5) / size);
  float gray = luma(texColor.rgb);
  
  // LED dot with glow
  float radius = u_cellSize * (0.2 + gray * 0.26);
  float dist = length(cellPixel) * u_cellSize * 0.5;
  
  float led = smoothstep(radius, radius * 0.5, dist);
  float glow = smoothstep(radius * 1.5, radius, dist) * 0.3;
  
  vec3 baseColor = u_colored == 1 ? texColor.rgb : u_fgColor.rgb;
  vec3 color = baseColor * (0.3 + gray * 0.7);
  
  // Add highlight
  vec2 highlightOffset = vec2(-radius * 0.25, -radius * 0.25);
  float highlight = smoothstep(radius * 0.3, radius * 0.1, length(cellPixel * u_cellSize * 0.5 + highlightOffset));
  
  color = color * (led + glow) + vec3(1.0) * highlight * led * 0.16;
  fragColor = vec4(color, 1.0);
}`,
    uniforms: ['u_cellSize', 'u_colored', 'u_fgColor'],
  },
  'grain': {
    id: 'grain',
    vertexShader: '',
    fragmentShader: GRAIN_FRAGMENT_SHADER,
    uniforms: ['u_grainIntensity', 'u_grainSize', 'u_noiseIntensity', 'u_noiseColor', 'u_time'],
  },
  'noise': {
    id: 'noise',
    vertexShader: '',
    fragmentShader: GRAIN_FRAGMENT_SHADER,
    uniforms: ['u_grainIntensity', 'u_grainSize', 'u_noiseIntensity', 'u_noiseColor', 'u_time'],
  },
  'half-tone': {
    id: 'half-tone',
    vertexShader: '',
    fragmentShader: HALFTONE_FRAGMENT_SHADER,
    uniforms: ['u_cellSize', 'u_dotSize', 'u_dotAngle', 'u_colored'],
  },
};

/**
 * Get shader definition for an effect
 */
export function getShaderDefinition(effect: EffectType): ShaderDefinition | null {
  return SHADER_DEFINITIONS[effect] || null;
}