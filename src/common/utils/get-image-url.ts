import { IMAGES } from '@/common/constants/images';

export const getImageUrl = (name: string) => {
  return new URL(IMAGES[name], import.meta.url).href;
};
