// TODO : lazy 로딩(loading 속성? react?), decoding 속성, 반응형 srcset size

interface ImageProps {
  src: string; // 이미지 경로
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fetchPriority?: 'high' | 'low' | 'auto';
  decoding?: 'async' | 'auto' | 'sync';
}

function Image({
  src,
  alt,
  width,
  height,
  className,
  fetchPriority = 'auto',
  decoding = 'async',
}: ImageProps) {
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/, '.webp');

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        fetchPriority={fetchPriority}
        decoding={decoding}
        onError={(e) => {
          e.currentTarget.src = webpSrc;
        }}
      />
    </picture>
  );
}

export default Image;
