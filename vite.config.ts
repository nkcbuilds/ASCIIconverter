import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'Grainrad',
                short_name: 'Grainrad',
                description: 'Free WebGPU-powered ASCII, dithering, and retro effects at 60fps',
                start_url: '/',
                display: 'standalone',
                background_color: '#0a0a0a',
                theme_color: '#0a0a0a',
                icons: [
                    {
                        src: '/icon-192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: '/icon-512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        })
    ],
})
