import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.resolve(__dirname, '../src/assets/images');
const OUTPUT_FILE = path.resolve(__dirname, '../src/common/types/image-types.ts');

function generateImageTypes() {
  const fileNames = fs.readdirSync(IMAGES_DIR);
  const baseNames = new Set(
    fileNames
      .filter((file) => /\.(png|webp)$/.test(file))
      .map((file) => path.basename(file, path.extname(file))),
  );

  const typeDef = `export type ImageName =\n  | ${[...baseNames].map((name) => `'${name}'`).join('\n  | ')};\n`;
  fs.writeFileSync(OUTPUT_FILE, typeDef);
}

generateImageTypes();
