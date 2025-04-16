import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 경로 정의
const IMAGES_DIR = path.resolve(__dirname, '../src/assets/images');
const OUTPUT_FILE = path.resolve(__dirname, '../src/common/constants/images.ts');

// 지원할 이미지 확장자
const SUPPORTED_EXTENSIONS = /\.(png|jpe?g|webp|svg)$/;

function generateImageUrl() {
  const files = fs.readdirSync(IMAGES_DIR).filter((file) => SUPPORTED_EXTENSIONS.test(file));

  const imageEntries = files.map((file) => {
    const key = path.basename(file, path.extname(file));
    return `  '${key}': '../../../src/assets/images/${file}',`;
  });

  const typeFile = ['export const IMAGES: Record<string, string> = {', ...imageEntries, '};'].join(
    '\n',
  );

  fs.writeFileSync(OUTPUT_FILE, typeFile, 'utf-8');
}

generateImageUrl();
