import { useCallback, useMemo, useRef, useState } from 'react';

import throttle from '@/common/utils/throttle';

export default function useHorizontalScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const onDragStart = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (!ref.current) return;
      setIsDragging(true);
      setStartX(e.pageX + scrollLeft);
    },
    [scrollLeft],
  );

  const onDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const onDragMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging || !ref.current) return;
      e.preventDefault();
      e.stopPropagation();
      const { scrollWidth, clientWidth } = ref.current;
      let newScrollLeft = startX - e.pageX;
      if (newScrollLeft < 0) {
        newScrollLeft = 0;
      } else if (newScrollLeft > scrollWidth - clientWidth) {
        newScrollLeft = scrollWidth - clientWidth;
      }
      setScrollLeft(newScrollLeft);
      ref.current.scrollLeft = newScrollLeft;
    },
    [isDragging, startX],
  );

  const onThrottleDragMove = useMemo(() => {
    return throttle(onDragMove, 50);
  }, [onDragMove]);

  return {
    ref,
    isDragging,
    onDragStart,
    onThrottleDragMove,
    onDragEnd,
  };
}
