import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.resolve(__dirname, '../src/assets/images');

const supportedExtensions = ['.png', '.jpg', '.jpeg'];

const convertToWebp = async (filePath: string) => {
  const parsed = path.parse(filePath);
  const outputFilePath = path.join(parsed.dir, `${parsed.name}.webp`);

  // 이미 webp 파일이 존재하면 패스
  if (fs.existsSync(outputFilePath)) return;

  const image = sharp(filePath);
  const metadata = await image.metadata();

  // 500x500 기준으로 크면 줄이고, 작으면 건드리지 않음
  // const shouldResize =
  //   metadata.width && metadata.height && (metadata.width > 500 || metadata.height > 500);
  const shouldResize = false; // 우선 그대로 사용
  const transformer = shouldResize
    ? image.resize(500, 500, { fit: 'contain' }) // 크면 줄이기
    : image; // 작으면 그대로 사용

  await transformer.withMetadata().toFormat('webp', { quality: 80 }).toFile(outputFilePath);
  fs.unlinkSync(filePath);
};

function scanAndConvert(dir: string) {
  fs.readdirSync(dir).forEach((filename) => {
    const fullPath = path.join(dir, filename);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanAndConvert(fullPath);
    } else {
      const ext = path.extname(filename).toLowerCase();
      if (supportedExtensions.includes(ext)) {
        convertToWebp(fullPath);
      }
    }
  });
}

scanAndConvert(inputDir);
