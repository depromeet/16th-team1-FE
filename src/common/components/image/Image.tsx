// TODO : lazy 로딩(loading 속성? react?), decoding 속성, 반응형 srcset size, fetchPriority

import { forwardRef, ImgHTMLAttributes, useState } from 'react';

interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'css'> {
  src: string; // 이미지 경로
  alt: string;
  width?: number;
  height?: number;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, width, height, ...props }, ref) => {
    const [errored, setErrored] = useState(false);

    const cleanSrc = src.split('?')[0];
    const webpSrc = cleanSrc.replace(/\.(png|jpg|jpeg)$/, '.webp');

    return (
      <img
        ref={ref}
        src={!errored ? webpSrc : src}
        alt={alt}
        width={width}
        height={height}
        onError={() => setErrored(true)}
        {...props}
      />
    );
  },
);
Image.displayName = 'Image';

export default Image;
