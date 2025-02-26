import { ReactNode } from 'react';

import { BaseButtonProps } from '@/common/components/button/base-button';

import { colors } from './colors';

export const SIZE = {
  text: {
    small: {
      padding: '0.7rem 1.6rem',
      fontSize: '1.4rem',
      lineHeight: '127%',
      borderRadius: '0.8rem',
    },
    medium: {
      padding: '1.2rem 2.4rem',
      fontSize: '1.6rem',
      lineHeight: '127%',
      borderRadius: '0.8rem',
    },
    large: {
      padding: '1.6rem 3.2rem',
      fontSize: '1.6rem',
      lineHeight: '127%',
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
      padding: '0.7rem 1.6rem 0.7rem 1.2rem',
      fontSize: '1.4rem',
      borderRadius: '0.8rem',
      lineHeight: '127%',
      gap: '0.4rem',
    },
    medium: {
      padding: '1.2rem 2.4rem 1.2rem 2rem',
      fontSize: '1.6rem',
      borderRadius: '0.8rem',
      lineHeight: '127%',
      gap: '0.4rem',
    },
    large: {
      padding: '1.6rem 3.2rem 1.6rem 2.4rem',
      fontSize: '1.6rem',
      borderRadius: '0.8rem',
      lineHeight: '127%',
      gap: '0.4rem',
    },
  },
};

export const VARIANTS = {
  purlple: {
    default: {
      background: colors.PURPLE[300],
      color: colors.GRAY[950],
    },
    hover: {
      background: colors.PURPLE[200],
      color: colors.GRAY[950],
    },
    pressed: {
      background: colors.PURPLE[400],
      color: colors.GRAY[950],
    },
    disabled: {
      background: colors.PURPLE[400],
      color: colors.GRAY[700],
    },
  },
  sora: {
    default: {
      background: colors.SORA[200],
      color: colors.GRAY[950],
    },
    hover: {
      background: colors.SORA[100],
      color: colors.GRAY[950],
    },
    pressed: {
      background: colors.SORA[400],
      color: colors.GRAY[950],
    },
    disabled: {
      background: colors.SORA[400],
      color: colors.GRAY[700],
    },
  },
};

// 각 카테고리별 사이즈 키
export type Usage = keyof typeof SIZE;
export type Size = keyof (typeof SIZE)['text'];
export type ButtonVariant = keyof typeof VARIANTS;

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
