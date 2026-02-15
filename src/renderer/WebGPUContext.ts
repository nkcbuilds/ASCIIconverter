// ============================================================================
// Grainrad - WebGPU Context
// ============================================================================

/**
 * WebGPU capability detection and initialization
 */
export interface WebGPUCapabilities {
  isSupported: boolean;
  hasAdapter: boolean;
  hasDevice: boolean;
  preferredFormat: GPUTextureFormat | null;
  features: string[];
  limits: Record<string, number>;
  error: string | null;
}

/**
 * WebGPU context state
 */
export interface WebGPUContextState {
  adapter: GPUAdapter | null;
  device: GPUDevice | null;
  context: GPUCanvasContext | null;
  format: GPUTextureFormat;
  capabilities: WebGPUCapabilities;
}

/**
 * Check WebGPU support without full initialization
 */
export async function checkWebGPUSupport(): Promise<WebGPUCapabilities> {
  const caps: WebGPUCapabilities = {
    isSupported: false,
    hasAdapter: false,
    hasDevice: false,
    preferredFormat: null,
    features: [],
    limits: {},
    error: null,
  };

  if (!navigator.gpu) {
    caps.error = 'WebGPU not supported in this browser';
    return caps;
  }

  try {
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) {
      caps.error = 'No GPU adapter found';
      return caps;
    }
    caps.hasAdapter = true;

    // Get adapter features and limits
    caps.features = Array.from(adapter.features);
    
    const device = await adapter.requestDevice();
    caps.hasDevice = true;
    caps.isSupported = true;
    caps.preferredFormat = navigator.gpu.getPreferredCanvasFormat();
    
    // Get device limits
    for (const [key, value] of Object.entries(device.limits)) {
      caps.limits[key] = value;
    }
  } catch (err) {
    caps.error = err instanceof Error ? err.message : 'Failed to initialize WebGPU';
  }

  return caps;
}

/**
 * Initialize WebGPU context for a canvas
 */
export async function initWebGPUContext(
  canvas: HTMLCanvasElement
): Promise<WebGPUContextState | null> {
  const capabilities = await checkWebGPUSupport();
  
  if (!capabilities.isSupported) {
    return {
      adapter: null,
      device: null,
      context: null,
      format: 'bgra8unorm',
      capabilities,
    };
  }

  try {
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) return null;

    const device = await adapter.requestDevice();
    const context = canvas.getContext('webgpu');
    
    if (!context) {
      return {
        adapter,
        device,
        context: null,
        format: capabilities.preferredFormat || 'bgra8unorm',
        capabilities: {
          ...capabilities,
          error: 'Failed to get WebGPU canvas context',
        },
      };
    }

    const format = capabilities.preferredFormat || 'bgra8unorm';
    
    context.configure({
      device,
      format,
      alphaMode: 'premultiplied',
    });

    return {
      adapter,
      device,
      context,
      format,
      capabilities,
    };
  } catch (err) {
    return {
      adapter: null,
      device: null,
      context: null,
      format: 'bgra8unorm',
      capabilities: {
        ...capabilities,
        error: err instanceof Error ? err.message : 'Failed to initialize WebGPU context',
      },
    };
  }
}

/**
 * Create a GPU texture from an ImageBitmap or HTMLCanvasElement
 */
export function createTextureFromImage(
  device: GPUDevice,
  image: ImageBitmap | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement
): GPUTexture {
  const width = image instanceof HTMLVideoElement ? image.videoWidth : image.width;
  const height = image instanceof HTMLVideoElement ? image.videoHeight : image.height;

  const texture = device.createTexture({
    size: [width, height],
    format: 'rgba8unorm',
    usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
  });

  return texture;
}

/**
 * Copy image data to a GPU texture
 */
export function copyImageToTexture(
  device: GPUDevice,
  texture: GPUTexture,
  image: ImageBitmap | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement
): void {
  const width = image instanceof HTMLVideoElement ? image.videoWidth : image.width;
  const height = image instanceof HTMLVideoElement ? image.videoHeight : image.height;

  // Use type assertion for WebGPU API compatibility
  const source = image as GPUImageCopyExternalImageSource;
  device.queue.copyExternalImageToTexture(
    { source, flipY: true },
    { texture },
    [width, height]
  );
}

/**
 * Create a uniform buffer for effect parameters
 */
export function createUniformBuffer(
  device: GPUDevice,
  size: number,
  label?: string
): GPUBuffer {
  return device.createBuffer({
    size,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    label,
  });
}

/**
 * Create a bind group layout for effect shaders
 */
export function createBindGroupLayout(
  device: GPUDevice,
  entries: GPUBindGroupLayoutEntry[],
  label?: string
): GPUBindGroupLayout {
  return device.createBindGroupLayout({
    entries,
    label,
  });
}

/**
 * Create a render pipeline
 */
export function createRenderPipeline(
  device: GPUDevice,
  vertexShader: string,
  fragmentShader: string,
  bindGroupLayouts: GPUBindGroupLayout[],
  format: GPUTextureFormat,
  label?: string
): GPURenderPipeline {
  return device.createRenderPipeline({
    label,
    layout: device.createPipelineLayout({ bindGroupLayouts }),
    vertex: {
      module: device.createShaderModule({ code: vertexShader }),
      entryPoint: 'main',
    },
    fragment: {
      module: device.createShaderModule({ code: fragmentShader }),
      entryPoint: 'main',
      targets: [{ format }],
    },
    primitive: {
      topology: 'triangle-list',
    },
  });
}

/**
 * Create a compute pipeline
 */
export function createComputePipeline(
  device: GPUDevice,
  shader: string,
  bindGroupLayouts: GPUBindGroupLayout[],
  label?: string
): GPUComputePipeline {
  return device.createComputePipeline({
    label,
    layout: device.createPipelineLayout({ bindGroupLayouts }),
    compute: {
      module: device.createShaderModule({ code: shader }),
      entryPoint: 'main',
    },
  });
}