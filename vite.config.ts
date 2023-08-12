import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import vue from '@vitejs/plugin-vue'
import commonjs from 'vite-plugin-commonjs'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    vue(),
    commonjs(),
  ],

  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],

    alias: {
      '@finance': fileURLToPath(new URL('./app/frontend/finance', import.meta.url)),
    }
  }
})
