/**
 * Export Utilities for Grainrad
 * 
 * Handles exporting processed media in various formats:
 * - Images: PNG, JPG, SVG, Text
 * - Video: MP4 (WebM with MediaRecorder), GIF
 */

import { EffectSettings, EffectType } from '../types/effects';

// ============================================================================
// Types
// ============================================================================

export type ExportFormat = 'png' | 'jpg' | 'svg' | 'text' | 'mp4' | 'webm' | 'gif';

export interface ExportOptions {
  format: ExportFormat;
  quality: number; // 0-1 for JPG/WebM
  filename: string;
  effect: EffectType;
  settings: EffectSettings;
  duration?: number; // For video recording (ms)
  fps?: number; // For video recording
  width?: number;
  height?: number;
}

export interface RecordingState {
  isRecording: boolean;
  startTime: number;
  frames: Blob[];
  mediaRecorder: MediaRecorder | null;
}

// ============================================================================
// Image Export
// ============================================================================

/**
 * Export canvas as PNG
 */
export async function exportPNG(
  canvas: HTMLCanvasElement,
  filename: string
): Promise<void> {
  const dataUrl = canvas.toDataURL('image/png');
  await downloadDataUrl(dataUrl, `${filename}.png`);
}

/**
 * Export canvas as JPG
 */
export async function exportJPG(
  canvas: HTMLCanvasElement,
  filename: string,
  quality: number = 0.92
): Promise<void> {
  const dataUrl = canvas.toDataURL('image/jpeg', quality);
  await downloadDataUrl(dataUrl, `${filename}.jpg`);
}

/**
 * Export canvas as SVG (vector representation of the current state)
 */
export async function exportSVG(
  canvas: HTMLCanvasElement,
  filename: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _settings: EffectSettings
): Promise<void> {
  // Create SVG with embedded image
  const dataUrl = canvas.toDataURL('image/png');
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" 
     xmlns:xlink="http://www.w3.org/1999/xlink"
     width="${canvas.width}" 
     height="${canvas.height}"
     viewBox="0 0 ${canvas.width} ${canvas.height}">
  <image xlink:href="${dataUrl}" 
         width="${canvas.width}" 
         height="${canvas.height}"/>
</svg>`;
  
  const blob = new Blob([svg], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  await downloadUrl(url, `${filename}.svg`);
  URL.revokeObjectURL(url);
}

/**
 * Export canvas as ASCII text
 */
export async function exportText(
  canvas: HTMLCanvasElement,
  filename: string,
  settings: EffectSettings
): Promise<void> {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const chars = getCharacterArray(settings);
  const cellSize = Math.max(1, settings.cellSize);
  
  const cols = Math.floor(canvas.width / cellSize);
  const rows = Math.floor(canvas.height / cellSize);
  
  let text = '';
  
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const px = x * cellSize;
      const py = y * cellSize;
      const i = (py * canvas.width + px) * 4;
      
      const r = imageData.data[i];
      const g = imageData.data[i + 1];
      const b = imageData.data[i + 2];
      const luma = (r + g + b) / (3 * 255);
      
      const charIndex = Math.floor(luma * (chars.length - 1));
      text += chars[charIndex] ?? ' ';
    }
    text += '\n';
  }
  
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  await downloadUrl(url, `${filename}.txt`);
  URL.revokeObjectURL(url);
}

/**
 * Export image in specified format
 */
export async function exportImage(
  canvas: HTMLCanvasElement,
  options: ExportOptions
): Promise<void> {
  switch (options.format) {
    case 'png':
      await exportPNG(canvas, options.filename);
      break;
    case 'jpg':
      await exportJPG(canvas, options.filename, options.quality);
      break;
    case 'svg':
      await exportSVG(canvas, options.filename, options.settings);
      break;
    case 'text':
      await exportText(canvas, options.filename, options.settings);
      break;
    default:
      throw new Error(`Unsupported export format: ${options.format}`);
  }
}

// ============================================================================
// Video Recording
// ============================================================================

/**
 * Check if video recording is supported
 */
export function isRecordingSupported(): boolean {
  return typeof MediaRecorder !== 'undefined' && 
         MediaRecorder.isTypeSupported('video/webm');
}

/**
 * Get supported video MIME types
 */
export function getSupportedVideoFormats(): string[] {
  const formats = [
    'video/webm;codecs=vp9',
    'video/webm;codecs=vp8',
    'video/webm',
    'video/mp4',
  ];
  
  return formats.filter(format => 
    MediaRecorder.isTypeSupported(format)
  );
}

/**
 * Create a MediaRecorder for canvas recording
 */
export function createCanvasRecorder(
  canvas: HTMLCanvasElement,
  options: Partial<ExportOptions> = {}
): { recorder: MediaRecorder; stop: () => Promise<Blob> } | null {
  if (!isRecordingSupported()) {
    console.error('Video recording is not supported in this browser');
    return null;
  }

  const stream = canvas.captureStream(options.fps || 30);
  const mimeType = getSupportedVideoFormats()[0] || 'video/webm';
  
  const recorder = new MediaRecorder(stream, {
    mimeType,
    videoBitsPerSecond: 5000000, // 5 Mbps
  });

  const chunks: Blob[] = [];

  recorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      chunks.push(event.data);
    }
  };

  let resolveBlob: (blob: Blob) => void;
  const blobPromise = new Promise<Blob>((resolve) => {
    resolveBlob = resolve;
  });

  recorder.onstop = () => {
    const blob = new Blob(chunks, { type: mimeType });
    resolveBlob(blob);
  };

  return {
    recorder,
    stop: async () => {
      recorder.stop();
      stream.getTracks().forEach(track => track.stop());
      return blobPromise;
    },
  };
}

/**
 * Start recording canvas
 */
export function startRecording(
  canvas: HTMLCanvasElement,
  options: Partial<ExportOptions> = {}
): RecordingState | null {
  const recorderInfo = createCanvasRecorder(canvas, options);
  if (!recorderInfo) return null;

  recorderInfo.recorder.start(100); // Collect data every 100ms

  return {
    isRecording: true,
    startTime: performance.now(),
    frames: [],
    mediaRecorder: recorderInfo.recorder,
  };
}

/**
 * Stop recording and get video blob
 */
export async function stopRecording(
  state: RecordingState
): Promise<Blob | null> {
  const recorder = state.mediaRecorder;
  if (!recorder || !state.isRecording) {
    return null;
  }

  return new Promise((resolve) => {
    const chunks: Blob[] = [];
    
    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    };

    recorder.onstop = () => {
      const mimeType = recorder.mimeType || 'video/webm';
      const blob = new Blob(chunks, { type: mimeType });
      state.isRecording = false;
      resolve(blob);
    };

    recorder.stop();
  });
}

/**
 * Download recorded video
 */
export async function downloadVideo(
  blob: Blob,
  filename: string
): Promise<void> {
  const url = URL.createObjectURL(blob);
  const extension = blob.type.includes('webm') ? 'webm' : 'mp4';
  await downloadUrl(url, `${filename}.${extension}`);
  URL.revokeObjectURL(url);
}

// ============================================================================
// GIF Export
// ============================================================================

/**
 * Check if GIF export is available (requires gif.js library)
 */
export function isGifExportAvailable(): boolean {
  return typeof window !== 'undefined' && 'GIF' in window;
}

/**
 * Create GIF from canvas frames
 * Note: This requires the gif.js library to be loaded
 */
export async function createGif(
  frames: HTMLCanvasElement[],
  options: {
    width: number;
    height: number;
    delay: number; // ms between frames
    quality: number; // 1-20, lower is better
  }
): Promise<Blob> {
  // Dynamic import check for gif.js
  if (!isGifExportAvailable()) {
    throw new Error('GIF export requires the gif.js library. Please include it in your project.');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const GIF = (window as any).GIF;
  
  return new Promise((resolve, reject) => {
    const gif = new GIF({
      workers: 2,
      quality: options.quality,
      width: options.width,
      height: options.height,
      workerScript: 'gif.worker.js',
    });

    frames.forEach(frame => {
      gif.addFrame(frame, { delay: options.delay });
    });

    gif.on('finished', (blob: Blob) => {
      resolve(blob);
    });

    gif.on('error', (error: Error) => {
      reject(error);
    });

    gif.render();
  });
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Download a data URL as a file
 */
async function downloadDataUrl(dataUrl: string, filename: string): Promise<void> {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Download a URL as a file
 */
async function downloadUrl(url: string, filename: string): Promise<void> {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Get character array from settings
 */
function getCharacterArray(settings: EffectSettings): string[] {
  const charset = settings.characterSet;
  const custom = settings.customCharacters;
  
  const standard = ' .:-=+*#%@';
  const extended = " .':,;clodxkO0KXNWM";
  const blocks = ' .:-=+*#%@';
  
  let chars: string;
  switch (charset) {
    case 'extended':
      chars = extended;
      break;
    case 'blocks':
      chars = blocks;
      break;
    case 'custom':
      chars = custom || standard;
      break;
    default:
      chars = standard;
  }
  
  return chars.split('');
}

/**
 * Generate timestamp for filename
 */
export function generateFilename(): string {
  const now = new Date();
  const timestamp = now.toISOString()
    .replace(/[:.]/g, '-')
    .slice(0, 19);
  return `grainrad-${timestamp}`;
}

/**
 * Get file extension from format
 */
export function getFileExtension(format: ExportFormat): string {
  return format === 'text' ? 'txt' : format;
}

/**
 * Estimate file size for export
 */
export function estimateFileSize(
  canvas: HTMLCanvasElement,
  format: ExportFormat,
  quality: number = 0.92
): number {
  const pixels = canvas.width * canvas.height;
  
  switch (format) {
    case 'png':
      // PNG is lossless, roughly 3 bytes per pixel + overhead
      return pixels * 3 * 1.1;
    case 'jpg':
      // JPG compression varies, estimate based on quality
      return pixels * 3 * quality * 0.5;
    case 'svg':
      // SVG with embedded image is similar to PNG
      return pixels * 3 * 1.2;
    case 'text': {
      // Text is 1 char per cell
      const cells = Math.ceil(pixels / 100); // Assume cellSize ~10
      return cells * 1.1; // 1 byte per char + newlines
    }
    case 'webm':
    case 'mp4':
      // Video: estimate 5 Mbps for 1 second
      return 5000000 / 8;
    case 'gif':
      // GIF: 256 colors, estimate 1 byte per pixel
      return pixels;
    default:
      return 0;
  }
}

export default {
  exportPNG,
  exportJPG,
  exportSVG,
  exportText,
  exportImage,
  isRecordingSupported,
  getSupportedVideoFormats,
  createCanvasRecorder,
  startRecording,
  stopRecording,
  downloadVideo,
  isGifExportAvailable,
  createGif,
  generateFilename,
  getFileExtension,
  estimateFileSize,
};