import path from 'path';

import { defineConfig, loadEnv } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      svgr(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
        manifest: {
          name: '프로젝트명',
          short_name: '프로젝트명',
          description: '프로젝트 설명',
          theme_color: '#ffffff',
          lang: 'ko',
        },
      }),
      mkcert(),
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
      host: 'critix.kr',
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    test: {
      coverage: {
        provider: 'v8',
      },
      environment: 'jsdom',
      setupFiles: ['./vitest.setup.ts'],
    },
  };
});
