/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
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
  ],
  server: {
    port: 3000,
  },
  test: {
    coverage: {
      provider: 'v8',
    },
  },
});
