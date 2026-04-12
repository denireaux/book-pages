import { defineConfig } from 'vite'

export default defineConfig({
  base: '/book-pages/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        dynamicLayout: 'dynamic-layout.html',
        pageTwo: 'pages/two/two.html',
      },
    },
  },
})
