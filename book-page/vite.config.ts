import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        dynamicLayout: 'dynamic-layout.html',
      },
    },
  },
})
