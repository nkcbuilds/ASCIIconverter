import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(var(--term-text-dim) 1px, transparent 1px),
              linear-gradient(90deg, var(--term-text-dim) 1px, transparent 1px)
            `,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 text-center max-w-3xl mx-auto"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-3 py-1 border border-term-border text-term-text-dim text-xs uppercase tracking-wide mb-6"
                >
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_2px_rgba(34,197,94,0.6)]" />
                    WebGPU Powered • 60fps
                </motion.div>

                {/* Main Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-term-text-bright mb-6 tracking-tight">
                    <span className="text-term-accent">grain</span>rad
                </h1>

                {/* Subtitle */}
                <p className="text-term-text text-lg sm:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
                    Free, real-time <span className="text-term-text-bright">ASCII</span>, <span className="text-term-text-bright">dithering</span>, and <span className="text-term-text-bright">retro effects</span> powered by modern WebGPU technology.
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    <FeaturePill>ASCII Art</FeaturePill>
                    <FeaturePill>Dithering</FeaturePill>
                    <FeaturePill>Pixelation</FeaturePill>
                    <FeaturePill>Edge Detection</FeaturePill>
                    <FeaturePill>Halftone</FeaturePill>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.a
                        href="#effects"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-3 bg-term-text-bright text-term-bg font-medium text-sm uppercase tracking-wide hover:bg-term-accent transition-colors"
                    >
                        Try Effects
                    </motion.a>
                    <motion.a
                        href="#gallery"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-3 border border-term-border text-term-text hover:border-term-text hover:text-term-text-bright transition-colors text-sm uppercase tracking-wide"
                    >
                        View Gallery
                    </motion.a>
                </div>
            </motion.div>

            {/* Decorative ASCII Art */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute bottom-0 left-0 right-0 text-center font-mono text-term-text-dim text-xs whitespace-pre overflow-hidden"
            >
                {`
    ██████╗ ██████╗  █████╗ ██╗███╗   ██╗██████╗  █████╗ ██████╗ 
   ██╔════╝ ██╔══██╗██╔══██╗██║████╗  ██║██╔══██╗██╔══██╗██╔══██╗
   ██║  ███╗██████╔╝███████║██║██╔██╗ ██║██████╔╝███████║██║  ██║
   ██║   ██║██╔══██╗██╔══██║██║██║╚██╗██║██╔══██╗██╔══██║██║  ██║
   ╚██████╔╝██║  ██║██║  ██║██║██║ ╚████║██║  ██║██║  ██║██████╔╝
    ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ 
`}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="flex flex-col items-center gap-2 text-term-text-dim"
                >
                    <span className="text-xs uppercase tracking-wide">Scroll</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}

function FeaturePill({ children }: { children: React.ReactNode }) {
    return (
        <span className="px-3 py-1 text-xs uppercase tracking-wide border border-term-border text-term-text-dim hover:border-term-text hover:text-term-text transition-colors cursor-default">
            {children}
        </span>
    );
}
