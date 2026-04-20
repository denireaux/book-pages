import { defineConfig } from 'vite'

export default defineConfig({
  base: '/book-pages/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        letterOne: 'letter-one.html',
        iPhoneMessages: 'pages/iphone-messages/iphone-messages.html',
        susan: 'pages/table-of-contents/index.html',
        valentinesDay: 'pages/valentines-day/index.html',
      },
    },
  },
})
