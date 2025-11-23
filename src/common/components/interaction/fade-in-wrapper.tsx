import { ReactNode } from 'react';
import { IntersectionOptions, useInView } from 'react-intersection-observer';

import { SerializedStyles } from '@emotion/react';

import * as styles from './fade-in-wrapper.styles';

/** JSX에서 사용할 수 있는 HTML 태그 이름 타입 */
type Elements = keyof JSX.IntrinsicElements;

/**
 * as로 받을 수 있는 엘리먼트 타입
 * - HTML 태그 이름 (div, span 등)
 * - props를 받아 JSX 엘리먼트를 반환하는 React 컴포넌트
 */
type ElementType = Elements | React.ComponentType<unknown>;

/**
 * ElementType에 따른 props 타입
 * - E가 HTML 태그라면 JSX.IntrinsicElements[E]
 * - E가 React 컴포넌트라면 해당 컴포넌트의 props 타입
 */
type ElementProps<E extends ElementType> = E extends Elements
  ? JSX.IntrinsicElements[E]
  : E extends React.ComponentType<infer P>
    ? P
    : never;

/** FadeInWrapper가 공통으로 가지는 고유 props */
type FadeInWrapperOwnProps = {
  children: ReactNode;
  /** Emotion으로 전달할 추가 스타일 */
  additionalStyles?: SerializedStyles;
  /** 페이드 인 애니메이션 옵션 */
  transitionOptions?: styles.TransitionOptionsType;
  /** 뷰포트 진입 감지 옵션 (react-intersection-observer) */
  intersectionOptions?: IntersectionOptions;
};

/**
 * as 프로퍼티를 포함한 FadeInWrapper의 전체 props 타입
 * - as로 HTML 태그 또는 React 컴포넌트를 지정할 수 있음
 * - 지정된 as에 따라 나머지 props 타입이 자동으로 추론됨
 *
 * @template E - 엘리먼트 타입 (div가 기본값)
 */
type FadeInWrapperProps<E extends ElementType = 'div'> = FadeInWrapperOwnProps & {
  as?: E;
} & Omit<ElementProps<E>, keyof FadeInWrapperOwnProps | 'as'>;

export default function FadeInWrapper<E extends ElementType = 'div'>({
  as,
  children,
  additionalStyles,
  transitionOptions,
  intersectionOptions,
  ...props
}: FadeInWrapperProps<E>) {
  const Element = (as || 'div') as React.ElementType;
  const { ref, inView } = useInView(intersectionOptions);

  return (
    <Element
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
    </Element>
  );
}
