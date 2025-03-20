import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICONS_DIR = path.resolve(__dirname, '../src/assets/icons');
const OUTPUT_FILE = path.resolve(__dirname, '../src/common/types/icon-types.ts');

function generateIconTypes() {
  const iconTypes = fs
    .readdirSync(ICONS_DIR)
    .filter((file) => file.endsWith('.svg'))
    .map((file) => file.replace('.svg', ''));

  const typeFile = `export type iconTypes =\n  | ${iconTypes.map((name) => `'${name}'`).join('\n  | ')};\n`;

  fs.writeFileSync(OUTPUT_FILE, typeFile);
}

generateIconTypes();
