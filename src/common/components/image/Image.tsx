import { forwardRef, ImgHTMLAttributes, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { mergeRefs } from 'react-merge-refs';

import { imageMap } from '@/common/utils/get-image-url';

interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'css' | 'src'> {
  /**
   * 로컬에 보관중인 이미지 이름
   * name 지정 시 webp -> png 우선 사용
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
    externalRef, // 외부에서 넘겨준 ref
  ) => {
    const entry = name ? imageMap[name] || {} : {};
    const { png, webp } = entry;
    const [errored, setErrored] = useState(false);

    // 뷰포트 기반 이미지 로딩
    const { ref: lazyRef, inView } = useInView({
      rootMargin,
      triggerOnce: true,
      fallbackInView: priority, // priority면 무조건 inView처럼 동작
    });

    // 이미지 로딩 시점 및 경로
    const hasLocal = Boolean(webp || png);
    const preferredLocal = errored ? png : (webp ?? png);
    const srcToUse = hasLocal ? preferredLocal : fallbackSrc;
    const shouldLoad = priority || inView;

    const mergedRef = mergeRefs<HTMLImageElement>([lazyRef, externalRef]);

    return (
      <img
        ref={mergedRef}
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
