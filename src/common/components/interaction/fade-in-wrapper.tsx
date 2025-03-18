/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import { IntersectionOptions, useInView } from 'react-intersection-observer';

import { SerializedStyles } from '@emotion/react';

import * as styles from './fade-in-wrapper.styles';

/** JSX에서 사용할 수 있는 HTML 엘리먼트의 타입 */
type Elements = keyof JSX.IntrinsicElements;

/**
 * 1. HTML 엘리먼트 이름을 타입으로 받는 타입 (`div`, `span` 등)
 * 2. props를 받아서 JSX 엘리먼트를 반환하는 함수형 컴포넌트를 타입으로 받는 타입
 *
 * @template P - props 타입
 */
type ElementType<P = any> =
  | { [K in Elements]: P extends JSX.IntrinsicElements[K] ? K : never }[Elements]
  | ((props: P) => JSX.Element);

/**
 * ElementType에 따른 동적 타입
 * - `E`가 HTML 엘리먼트라면 해당 엘리먼트의 props 타입 반환
 * - 그렇지 않으면 해당 컴포넌트의 props를 추론
 *
 * @template E - 엘리먼트 타입
 */
type ElementProps<E extends ElementType> = E extends Elements
  ? JSX.IntrinsicElements[E]
  : React.ComponentProps<E>;

/**
 * `as` 프로퍼티를 포함하여 `ElementProps`를 합친 타입
 * `as`를 통해 다른 HTML 엘리먼트나 컴포넌트를 지정
 *
 * @template E - 엘리먼트 타입
 */
type FadeInWrapperProps<E extends ElementType> = {
  as?: E; // `as` 프로퍼티는 HTML 엘리먼트나 컴포넌트를 동적으로 지정 가능
  children: ReactNode;
  additionalStyles?: SerializedStyles; // 추가적인 Emotion 스타일
  transitionOptions?: styles.TransitionOptionsType; // 애니메이션 관련 CSS 옵션
  intersectionOptions?: IntersectionOptions; // 뷰포트 진입 감지를 위한 옵션 (react-intersection-observer)
} & Omit<ElementProps<E>, 'as'>;

export default function FadeInWrapper<E extends ElementType>({
  as,
  children,
  additionalStyles,
  transitionOptions,
  intersectionOptions,
  ...props
}: FadeInWrapperProps<E>) {
  const $Element = as || 'div';
  const { ref, inView } = useInView(intersectionOptions);

  return (
    <$Element
      ref={ref}
      css={[
        styles.fadeInWrapper({
          inView,
          ...transitionOptions,
        }),
        additionalStyles,
      ]}
      {...props}
    >
      {children}
    </$Element>
  );
}
