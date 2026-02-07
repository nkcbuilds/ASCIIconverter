import type { Config } from 'tailwindcss'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'term-bg': 'var(--term-bg)',
                'term-panel': 'var(--term-panel)',
                'term-border': 'var(--term-border)',
                'term-accent': 'var(--term-accent)',
                'term-accent-dim': 'var(--term-accent-dim)',
                'term-text': 'var(--term-text)',
                'term-text-dim': 'var(--term-text-dim)',
                'term-text-bright': 'var(--term-text-bright)',
                'term-green': 'var(--term-green)',
                'term-yellow': 'var(--term-yellow)',
            },
            fontFamily: {
                mono: ['IBM Plex Mono', 'JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
            },
            animation: {
                'slide-up': 'slide-up 0.3s ease-out',
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
            },
            keyframes: {
                'slide-up': {
                    '0%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                'glow-pulse': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                },
            },
        },
    },
    plugins: [],
} satisfies Config
