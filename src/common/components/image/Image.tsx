import { forwardRef, ImgHTMLAttributes, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { imageMap } from '@/common/utils/get-image-url';

interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'css' | 'src'> {
  /**
   * 로컬 이미지 키
   * name 지정 시 webp/png 우선 사용
   */
  name?: string;
  /**
   * 외부 URL 또는 기본 src
   * name이 없거나 imageMap[name] 결과가 없으면 이 값을 사용
   */
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  rootMargin?: string;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    { name, src: fallbackSrc, alt, width, height, priority = false, rootMargin = '0px', ...props },
    ref,
  ) => {
    const entry = name ? imageMap[name] || {} : {};
    const { png, webp } = entry;
    const [errored, setErrored] = useState(false);
    const { ref: inViewRef, inView } = useInView({
      rootMargin,
      triggerOnce: true,
      ...(priority && { fallbackInView: true }),
    });

    // imageMap에 webp/png가 없으면 fallbackSrc 사용
    const hasLocal = Boolean(webp || png);
    const preferredLocal = errored ? png : (webp ?? png);
    const srcToUse = hasLocal ? preferredLocal : fallbackSrc;

    const shouldLoad = priority || inView;

    const setRefs = (node: HTMLImageElement | null) => {
      inViewRef(node);
      if (!ref) return;
      if (typeof ref === 'function') ref(node);
      else ref.current = node;
    };

    return (
      <img
        ref={setRefs}
        src={shouldLoad ? srcToUse : undefined}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        // eslint-disable-next-line react/no-unknown-property
        fetchpriority={priority ? 'high' : 'auto'}
        onError={() => setErrored(true)}
        {...props}
      />
    );
  },
);

Image.displayName = 'Image';
export default Image;
