import { execSync } from 'child_process';

// 다른 스크립트(이미지 리사이징 진행) 가능
// execSync('npx tsx script/optimize-images.ts');

const IMG_PATH = 'src/assets/images';

// 2. 변경된 파일 확인
const result = execSync(`git status --porcelain ${IMG_PATH}`).toString();
console.log(result);

if (result) {
  console.log('최적화 이미지 파일 자동 커밋 실행');
  execSync(`git add ${IMG_PATH}`);
  execSync('git commit -m "chore: optimize images" --no-verify');
} else {
  console.log('이미지 변경 사항 없음');
}
