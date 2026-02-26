import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true }, // برای تست در dev

      manifest: {
        name: 'toDoList App',
        short_name: 'toDoList',
        description: 'Modern to list to take care your  Task:) built with React & Tailwind',
        theme_color: '#0ea5e9',
        background_color: '#0ea5e9',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/7.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
                                                                                                                                                                                                                                                                                                                                              