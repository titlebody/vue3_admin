import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  css:{
    preprocessorOptions:{
      less:{
        modifyVars: {
          // 'promary-6':"red",
        },
        additionalData:'@import "@/assets/var.less";',
        javascriptEnabled:true,
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
