// TODO : lazy 로딩(loading 속성? react?), decoding 속성, 반응형 srcset size, fetchPriority

import { forwardRef, ImgHTMLAttributes, useState } from 'react';

interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'css'> {
  src: string; // 이미지 경로
  alt: string;
  width?: number;
  height?: number;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, width, height, loading, fetchPriority, ...props }, ref) => {
    const [errored, setErrored] = useState(false);

    const cleanSrc = src.split('?')[0];
    const webpSrc = cleanSrc.replace(/\.(png|jpg|jpeg)$/, '.webp');

    return (
      <img
        ref={ref}
        loading={loading}
        src={!errored ? webpSrc : src}
        alt={alt}
        width={width}
        height={height}
        // eslint-disable-next-line react/no-unknown-property
        fetchpriority={fetchPriority}
        onError={() => setErrored(true)}
        {...props}
      />
    );
  },
);
Image.displayName = 'Image';

export default Image;
