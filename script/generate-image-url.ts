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

function generateImageImportsAndMap() {
  const files = fs.readdirSync(IMAGES_DIR).filter((file) => SUPPORTED_EXTENSIONS.test(file));

  // import 구문 생성
  const importStatements = files.map((file) => {
    const key = path.basename(file, path.extname(file)).replace(/-/g, '');
    return `import ${key} from '@/assets/images/${file}';`;
  });

  // IMAGES 객체 생성
  const imageEntries = files.map((file) => {
    const key = path.basename(file, path.extname(file));
    const varName = key.replace(/-/g, '');
    return `  '${key}': ${varName},`;
  });

  const fullContent = [
    ...importStatements,
    '',
    'export const IMAGES: Record<string, string> = {',
    ...imageEntries,
    '};',
    '',
  ].join('\n');

  fs.writeFileSync(OUTPUT_FILE, fullContent, 'utf-8');
  console.log('✅ images.ts 파일이 성공적으로 생성되었습니다!');
}

generateImageImportsAndMap();

