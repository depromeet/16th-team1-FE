/// <reference types="vitest" />
import path from 'path';

// import mkcert from 'vite-plugin-mkcert';

import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, type PluginOption } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          swiper: ['swiper'],
          gsap: ['gsap'],
          zod: ['zod'],
        },
      },
    },
  },
  plugins: [
    visualizer({
      filename: 'dist/stats.html',
      open: false,
    }) as PluginOption,
    svgr(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: '프로젝트명', // 설치 배너에 표시되는 이름
        short_name: '프로젝트명', // 아이콘 아래에 표시될 이름
        description: '프로젝트 설명',
        theme_color: '#ffffff',
        lang: 'ko',
      },
    }),
    // createHtmlPlugin({ inject: { tags: injectFontsToHead } }),
    // mkcert(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@common', replacement: path.resolve(__dirname, 'src/common') },
      { find: '@features', replacement: path.resolve(__dirname, 'src/features') },
    ],
  },

  server: {
    port: 3000,
    // host: 'critix.kr',
  },
  test: {
    coverage: {
      provider: 'v8',
    },
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
});
