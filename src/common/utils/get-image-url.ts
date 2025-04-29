import { IMAGES } from '@/common/constants/images';

export const getImageUrl = (name: string) => {
  return new URL(IMAGES[name], import.meta.url).href;
};

/** 동적으로 @/assets/images에 존재하는 이미지들을 매핑 */
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
