import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Plugin to resolve figma:asset/ imports to actual files in src/assets
function figmaAssetPlugin() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const assetPath = id.replace('figma:asset/', '')
        return resolve(__dirname, './src/assets', assetPath)
      }
      return null
    }
  }
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    figmaAssetPlugin(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
