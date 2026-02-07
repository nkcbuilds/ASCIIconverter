import { motion } from 'framer-motion';

// Sample gallery items showcasing different effects
const GALLERY_ITEMS = [
    {
        id: 1,
        title: 'ASCII Portrait',
        effect: 'ASCII',
        description: 'Complex character mapping for detailed portraits',
    },
    {
        id: 2,
        title: 'Dithered Landscape',
        effect: 'Dither',
        description: 'Bayer matrix dithering for vintage print look',
    },
    {
        id: 3,
        title: 'Pixel Art Scene',
        effect: 'Pixel',
        description: '8-bit style pixelation effect',
    },
    {
        id: 4,
        title: 'Edge Detection',
        effect: 'Edge',
        description: 'Sobel operator for edge highlighting',
    },
    {
        id: 5,
        title: 'Halftone Print',
        effect: 'Halftone',
        description: 'Classic newspaper dot pattern',
    },
    {
        id: 6,
        title: 'Combined Effects',
        effect: 'Mixed',
        description: 'Layered effects for unique results',
    },
];

export function Gallery() {
    return (
        <section id="gallery" className="py-16 px-4 bg-term-panel">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl font-medium text-term-text-bright mb-4">
                        Effect Gallery
                    </h2>
                    <p className="text-term-text text-sm max-w-xl mx-auto">
                        Explore different effects and see what you can create.
                        All examples were generated using Grainrad.
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {GALLERY_ITEMS.map((item, index) => (
                        <GalleryCard key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function GalleryCard({ item, index }: { item: typeof GALLERY_ITEMS[0]; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group border border-term-border bg-term-bg hover:border-term-text-dim transition-colors overflow-hidden"
        >
            {/* Image Placeholder */}
            <div className="aspect-video bg-term-panel relative overflow-hidden">
                {/* ASCII Art Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center font-mono text-term-text-dim text-[8px] leading-none overflow-hidden opacity-30 group-hover:opacity-50 transition-opacity">
                    <pre className="text-center">
                        {`
  ░░░░░░░░░░░░░░░░░
  ░░▒▒▒▒▒▒▒▒▒▒▒▒░░░
  ░░▒▓▓▓▓▓▓▓▓▓▓▒░░░
  ░░▒▓██████████▓▒░░
  ░░▒▓██▀▀▀▀██▓▒░░░
  ░░▒▓██    ██▓▒░░░
  ░░▒▓██████▓▓▒░░░░
  ░░▒▒▒▒▒▒▒▒▒▒▒░░░░
  ░░░░░░░░░░░░░░░░░
`}
                    </pre>
                </div>

                {/* Effect Badge */}
                <div className="absolute top-3 left-3 px-2 py-1 border border-term-border bg-term-bg/80 text-term-text-dim text-[10px] uppercase tracking-wide">
                    {item.effect}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-term-bg/0 group-hover:bg-term-bg/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="btn-terminal">
                        View Details
                    </button>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-4 space-y-2">
                <h3 className="text-term-text-bright text-sm font-medium">
                    {item.title}
                </h3>
                <p className="text-term-text-dim text-xs leading-relaxed">
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
}
