/** 1. 기존 코드(LCP를 위한 랜딩 페이지 외의 이미지들)를 위해 유지 */
import { IMAGES } from '@/common/constants/images';

export const getImageUrl = (name: string) => {
  return new URL(IMAGES[name], import.meta.url).href;
};

/**
 * 2. <Image /> 컴포넌트에 사용할 이미지들에 사용
 * 동적으로 @/assets/images에 존재하는 이미지들을 매핑
 */
type ImageEntry = { png?: string; webp?: string };

const pngModules = import.meta.glob('@/assets/images/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const webpModules = import.meta.glob('@/assets/images/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

export const imageMap: Record<string, ImageEntry> = {};

Object.entries(pngModules).forEach(([path, url]) => {
  const name = path.split('/').pop()!.replace('.png', '');
  imageMap[name] = imageMap[name] ?? {};
  imageMap[name].png = url;
});

Object.entries(webpModules).forEach(([path, url]) => {
  const name = path.split('/').pop()!.replace('.webp', '');
  imageMap[name] = imageMap[name] ?? {};
  imageMap[name].webp = url;
});
