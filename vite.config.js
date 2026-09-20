import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Allow JSX in .js files (all components use .js extension)
      include: '**/*.{jsx,js}',
    }),
  ],
})
