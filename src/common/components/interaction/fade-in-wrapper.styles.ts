import { css } from '@emotion/react';

interface FadeInWrapperProps extends TransitionOptionsType {
  inView: boolean;
}

export interface TransitionOptionsType {
  delay?: number;
  transform?: string;
  direction?: 'X' | 'Y' | 'Z';
  distance?: `${number}px` | `${number}rem` | `${number}%`;
  duration?: number;
  easing?: string;
  scale?: number; // 기본값 1
  rotate?: `${number}deg`; // 기본값 0deg
  blur?: `${number}px`; // 흐림 효과 (기본값 없음)
  opacityStart?: number; // 초기에 얼마나 투명할지 (기본값 0)
  customTransform?: string; // 완전 사용자 지정 transform
}

export const fadeInWrapper = ({
  inView,
  delay = 0,
  transform,
  customTransform,
  direction = 'Y',
  distance = '2rem',
  duration = 0.6,
  easing = 'ease-out',
  scale = 1,
  rotate = '0deg',
  blur,
  opacityStart = 0,
}: FadeInWrapperProps) => css`
  opacity: ${inView ? 1 : opacityStart};
  transform: ${customTransform ||
  transform ||
  `translate${direction}(${inView ? '0' : distance}) scale(${scale}) rotate(${rotate})`};
  filter: ${blur ? `blur(${inView ? '0px' : blur})` : 'none'};
  transition:
    opacity ${duration}s ${easing} ${delay}s,
    transform ${duration}s ${easing} ${delay}s,
    filter ${duration}s ${easing} ${delay}s;
`;
