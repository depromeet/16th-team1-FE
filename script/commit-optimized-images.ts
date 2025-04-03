import { execSync } from 'child_process';

try {
  console.log('🔧 Optimizing images...');
  execSync('pnpm optimize:images', { stdio: 'inherit' });

  // 변경된 .webp 파일이 있는지 확인
  const changed = execSync('git status --porcelain', { encoding: 'utf8' })
    .split('\n')
    .filter((line) => line.match(/^\s?[AM]\s.*\.webp$/));

  if (changed.length > 0) {
    console.log(`📸 ${changed.length} optimized images detected.`);

    // 변경된 .webp 파일 스테이징
    execSync('git add src/assets/images/**/*.webp');

    // 커밋
    execSync('git commit -m "chore: optimize images" --no-verify', {
      stdio: 'inherit',
    });

    console.log('✅ Optimized images committed.');
  } else {
    console.log('✅ No new optimized images to commit.');
  }
} catch (error) {
  console.error('❌ Failed during image optimization or commit:', error);
  process.exit(1);
}
