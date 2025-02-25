import { ReactNode } from 'react';

import { BaseButtonProps } from '@/common/components/base-button/base-button';

// TODO: 색상값 colors.ts에서 가져오기
// TODO: 폰트 사이즈 수정하기

export const ICON_TEXT_GAP = '0.4rem';

export const sizes = {
  text: {
    small: {
      padding: '0.7rem 1.6rem',
      fontSize: '1.4rem',
      borderRadius: '0.8rem',
    },
    medium: {
      padding: '1.2rem 2.4rem',
      fontSize: '1.6rem',
      borderRadius: '0.8rem',
    },
    large: {
      padding: '1.6rem 3.2rem',
      fontSize: '1.6rem',
      borderRadius: '0.8rem',
    },
  },
  icon: {
    small: {
      padding: '0.8rem',
      borderRadius: '0.8rem',
    },
    medium: {
      padding: '1.2rem',
      borderRadius: '0.8rem',
    },
    large: {
      padding: '1.4rem',
      borderRadius: '0.8rem',
    },
  },
  multi: {
    small: {
      padding: '0.7rem 1.6rem',
      fontSize: '1.4rem',
      borderRadius: '0.8rem',
      gap: '0.4rem',
    },
    medium: {
      padding: '1.2rem 2.4rem',
      fontSize: '1.6rem',
      borderRadius: '0.8rem',
      gap: '0.4rem',
    },
    large: {
      padding: '1.6rem 3.2rem',
      fontSize: '1.6rem',
      borderRadius: '0.8rem',
      gap: '0.4rem',
    },
  },
};

export const variants = {
  purlple: {
    default: {
      background: '#D7ADFE',
      color: '#2C2C36',
    },
    hover: {
      background: '#E3C6FF',
      color: '#2C2C36',
    },
    pressed: {
      background: '#E3C6FF',
      color: '#2C2C36',
    },
    disabled: {
      background: '#C194EA',
      color: '#62626D',
    },
  },
  sora: {
    default: {
      background: '#AEE8FF',
      color: '#2C2C36',
    },
    hover: {
      background: '#C8EFFF',
      color: '#2C2C36',
    },
    pressed: {
      background: '#76BAD5',
      color: '#2C2C36',
    },
    disabled: {
      background: '#76BAD5',
      color: '#62626D',
    },
  },
};

// 각 카테고리별 사이즈 키
export type Usage = keyof typeof sizes;
export type Size = keyof (typeof sizes)['text'];
export type ButtonVariant = keyof typeof variants;

// 공통 props
export type CommonProps = {
  size: Size;
  variant: ButtonVariant;
} & BaseButtonProps;

// 텍스트만 있는 경우
export type TextOnlyProps = CommonProps & {
  usage: 'text';
  children: ReactNode;
  icon?: never;
  iconPosition?: never;
};

// 텍스트와 아이콘이 모두 있는 경우
export type TextAndIconProps = CommonProps & {
  usage: 'multi';
  children: ReactNode;
  icon: ReactNode;
  iconPosition: 'left' | 'right';
};

// 아이콘만 있는 경우
export type IconOnlyProps = CommonProps & {
  usage: 'icon';
  icon: ReactNode;
  children?: never;
  iconPosition?: never;
};
