import { useState, useEffect } from 'react';

interface ShadowProps {
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
}

interface useShadowScrollProps {
  mainRef: HTMLElement | null;
  refs?: {
    left?: HTMLElement | null;
    right?: HTMLElement | null;
    top?: HTMLElement | null;
    bottom?: HTMLElement | null;
  };
  threshold?: number;
}

/**
 * 특정 요소(mainRef)의 스크롤이 상하좌우 끝에 도달했는지 감지하는 커스텀 훅
 * @param mainRef - 스크롤 컨테이너 요소
 * @param refs - 스크롤 감지를 위한 요소 모음 (left, right, top, bottom)
 * @param threshold - 감지 기준
 */
export default function useShadowScroll({
  mainRef,
  refs = {},
  threshold = 0.1,
}: useShadowScrollProps) {
  const { left, right, top, bottom } = refs;

  const [shadowState, setShadowState] = useState<ShadowProps>({
    left: !!left,
    right: !!right,
    top: !!top,
    bottom: !!bottom,
  });

  useEffect(() => {
    if (!mainRef) return;

    const createObserver = (ref: HTMLElement | null, key: keyof ShadowProps) => {
      if (!ref) return null;
      return new IntersectionObserver(
        ([entry]) => {
          setShadowState((prev) => ({ ...prev, [key]: !entry.isIntersecting }));
        },
        {
          root: mainRef,
          threshold,
        },
      );
    };

    const observers: IntersectionObserver[] = [];

    const refEntries = { left, right, top, bottom };
    Object.entries(refEntries).forEach(([key, ref]) => {
      if (ref) {
        const observer = createObserver(ref, key as keyof ShadowProps);
        if (observer) {
          observer.observe(ref);
          observers.push(observer);
        }
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [mainRef, left, right, top, bottom, threshold]);

  return shadowState;
}
