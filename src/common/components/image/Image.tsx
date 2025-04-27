import React, { forwardRef, ImgHTMLAttributes, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'css'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  rootMargin?: string;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, width, height, priority = false, rootMargin = '0px', ...props }, ref) => {
    const [errored, setErrored] = useState(false);
    const { ref: inViewRef, inView } = useInView({
      rootMargin,
      triggerOnce: true,
      ...(priority && { fallbackInView: true }),
    });

    const cleanSrc = src.split('?')[0];
    const webpSrc = cleanSrc.replace(/\.(png|jpe?g)$/, '.webp');
    const imageSrc = errored ? src : webpSrc;
    const shouldLoad = priority || inView;

    const setRefs = (node: HTMLImageElement | null) => {
      inViewRef(node);
      if (ref) {
        if (typeof ref === 'function') ref(node);
        else (ref as React.MutableRefObject<HTMLImageElement | null>).current = node;
      }
    };

    return (
      <picture>
        <source srcSet={imageSrc} type="image/webp" />
        <img
          ref={setRefs}
          src={shouldLoad ? imageSrc : undefined}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          // eslint-disable-next-line react/no-unknown-property
          fetchpriority={priority ? 'high' : 'auto'}
          onError={() => setErrored(true)}
          {...props}
        />
      </picture>
    );
  },
);

Image.displayName = 'Image';
export default Image;
