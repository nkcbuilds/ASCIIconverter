import { motion } from 'framer-motion';

const FEATURES = [
    {
        icon: '⚡',
        title: 'WebGPU Powered',
        description: 'Leverages modern GPU capabilities for real-time 60fps rendering on compatible browsers.',
    },
    {
        icon: '🔒',
        title: 'Privacy First',
        description: 'All processing happens locally in your browser. No data is ever sent to servers.',
    },
    {
        icon: '🎨',
        title: 'Multiple Effects',
        description: 'ASCII art, dithering, pixelation, edge detection, halftone, and more effects available.',
    },
    {
        icon: '📱',
        title: 'Cross Platform',
        description: 'Works on desktop and mobile devices with WebGPU support. PWA ready for offline use.',
    },
    {
        icon: '🎬',
        title: 'Live Sources',
        description: 'Apply effects to webcam feed, uploaded images, or video files in real-time.',
    },
    {
        icon: '💾',
        title: 'Export Ready',
        description: 'Save your creations as images or record video with effects applied.',
    },
];

export function About() {
    return (
        <section id="about" className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl font-medium text-term-text-bright mb-4">
                        About Grainrad
                    </h2>
                    <p className="text-term-text text-sm max-w-2xl mx-auto leading-relaxed">
                        Grainrad is a free, open-source tool for applying retro and artistic effects to images and video in real-time.
                        Built with modern web technologies including WebGPU, React, and TypeScript.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {FEATURES.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-term-border p-6 hover:border-term-text-dim transition-colors group"
                        >
                            <div className="text-2xl mb-3 grayscale group-hover:grayscale-0 transition-all">
                                {feature.icon}
                            </div>
                            <h3 className="text-term-text-bright text-sm font-medium mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-term-text-dim text-xs leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border border-term-border p-8 bg-term-panel"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-term-text-bright text-sm font-medium uppercase tracking-wide mb-4">
                                Technical Details
                            </h3>
                            <div className="space-y-3 font-mono text-xs">
                                <div className="flex items-start gap-2">
                                    <span className="text-term-text-dim shrink-0">&gt;</span>
                                    <span className="text-term-text">
                                        WebGPU shaders process pixels in parallel on the GPU
                                    </span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-term-text-dim shrink-0">&gt;</span>
                                    <span className="text-term-text">
                                        WGSL (WebGPU Shading Language) for compute operations
                                    </span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-term-text-dim shrink-0">&gt;</span>
                                    <span className="text-term-text">
                                        React 18+ with concurrent features for smooth UI
                                    </span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-term-text-dim shrink-0">&gt;</span>
                                    <span className="text-term-text">
                                        Vite for fast development and optimized builds
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-term-text-bright text-sm font-medium uppercase tracking-wide mb-4">
                                Browser Support
                            </h3>
                            <div className="space-y-3">
                                <BrowserSupport name="Chrome" version="113+" supported />
                                <BrowserSupport name="Edge" version="113+" supported />
                                <BrowserSupport name="Firefox" version="Nightly" partial />
                                <BrowserSupport name="Safari" version="Soon" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-term-text-dim text-sm mb-6">
                        Want to contribute or report an issue?
                    </p>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-term-border text-term-text hover:border-term-text hover:text-term-text-bright transition-colors text-sm uppercase tracking-wide"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                        View on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

function BrowserSupport({ name, version, supported, partial }: { name: string; version: string; supported?: boolean; partial?: boolean }) {
    return (
        <div className="flex items-center justify-between text-xs">
            <span className="text-term-text">{name}</span>
            <div className="flex items-center gap-2">
                <span className="text-term-text-dim">{version}</span>
                <span className={`w-2 h-2 rounded-full ${supported ? 'bg-green-500' :
                        partial ? 'bg-yellow-500' :
                            'bg-term-text-dim'
                    }`} />
            </div>
        </div>
    );
}
