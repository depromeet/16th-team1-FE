import { useState, useEffect } from 'react';

interface ShadowProps {
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
}

/**
 * 특정 요소(mainRef)의 스크롤이 상하좌우 끝에 도달했는지 감지하는 커스텀 훅
 * @param mainRef - 스크롤 컨테이너 요소
 * @param leftRef - 왼쪽 감지 요소
 * @param rightRef - 오른쪽 감지 요소
 * @param topRef - 상단 감지 요소
 * @param bottomRef - 하단 감지 요소
 * @param threshold - 감지 기준
 */
export default function useShadowScroll(
  mainRef: HTMLElement | null,
  leftRef?: HTMLElement | null,
  rightRef?: HTMLElement | null,
  topRef?: HTMLElement | null,
  bottomRef?: HTMLElement | null,
  threshold: number = 0.1,
) {
  const [shadowState, setShadowState] = useState<ShadowProps>({
    left: !!leftRef,
    right: !!rightRef,
    top: !!topRef,
    bottom: !!bottomRef,
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

    const refEntries = { left: leftRef, right: rightRef, top: topRef, bottom: bottomRef };
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
  }, [mainRef, leftRef, rightRef, topRef, bottomRef, threshold]);

  return shadowState;
}
