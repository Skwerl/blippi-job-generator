import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  // depending on your application, base can also be "/"
  base: '/',
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        api: 'modern'
      },
    },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    viteTsconfigPaths()
  ],
  server: {
    open: true,
    port: 3001,
  },
})