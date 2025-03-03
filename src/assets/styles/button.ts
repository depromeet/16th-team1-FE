import { ReactNode } from 'react';

import { BaseButtonProps } from '@/common/components/button/base-button';

import { colors } from './colors';
import { sizeToken } from './space';

export const BUTTON_SIZE = {
  text: {
    small: {
      padding: `${sizeToken.padding['xs_3']} ${sizeToken.padding['sm_2']}`,
      fontSize: `${sizeToken.fontSize['xs_1']}`,
      fontWeight: `${sizeToken.fontWeight['xs_1']}`,
      lineHeight: `${sizeToken.lineHeight['xs_2']}`,
      borderRadius: `${sizeToken.borderRadius['xs_2']}`,
    },
    medium: {
      padding: `${sizeToken.padding['sm_2']} ${sizeToken.padding['md_3']}`,
      fontSize: `${sizeToken.fontSize['s_1']}`,
      fontWeight: `${sizeToken.fontWeight['xs_1']}`,
      lineHeight: `${sizeToken.lineHeight['xs_2']}`,
      borderRadius: `${sizeToken.borderRadius['xs_1']}`,
    },
    large: {
      padding: `${sizeToken.padding['sm_2']} ${sizeToken.padding['lg_2']}`,
      fontSize: `${sizeToken.fontSize['s_2']}`,
      fontWeight: `${sizeToken.fontWeight['xs_1']}`,
      lineHeight: `${sizeToken.lineHeight['s_1']}`,
      borderRadius: `${sizeToken.borderRadius['xs_2']}`,
    },
    xxLarge: {
      padding: `${sizeToken.padding['md_2']} ${sizeToken.padding['lg_1']}`,
      fontSize: `${sizeToken.fontSize['sm_1']}`,
      fontWeight: `${sizeToken.fontWeight['xs_1']}`,
      lineHeight: `${sizeToken.lineHeight['xs_2']}`,
      borderRadius: `${sizeToken.borderRadius['lg_1']}`,
    },
  },
  multi: {
    small: {
      padding: `${sizeToken.padding['xs_3']} ${sizeToken.padding['s_2']} ${sizeToken.padding['xs_3']} ${sizeToken.padding['sm_2']}`,
      fontSize: `${sizeToken.fontSize['xs_1']}`,
      fontWeight: `${sizeToken.fontWeight['xs_1']}`,
      borderRadius: `${sizeToken.borderRadius['xs_1']}`,
      lineHeight: `${sizeToken.lineHeight['xs_1']}`,
      gap: `${sizeToken.gap['xs_1']}`,
    },
    medium: {
      padding: `${sizeToken.padding['s_2']} ${sizeToken.padding['md_1']} ${sizeToken.padding['s_2']} ${sizeToken.padding['md_3']}`,
      fontSize: `${sizeToken.fontSize['s_1']}`,
      fontWeight: `${sizeToken.fontWeight['xs_1']}`,
      borderRadius: `${sizeToken.borderRadius['xs_2']}`,
      lineHeight: `${sizeToken.lineHeight['xs_1']}`,
      gap: `${sizeToken.gap['xs_1']}`,
    },
    large: {
      padding: `${sizeToken.padding['sm_1']} ${sizeToken.padding['md_3']} ${sizeToken.padding['sm_1']} ${sizeToken.padding['lg_2']}`,
      fontSize: `${sizeToken.fontSize['s_2']}`,
      fontWeight: `${sizeToken.fontWeight['xs_1']}`,
      borderRadius: `${sizeToken.borderRadius['xs_2']}`,
      lineHeight: `${sizeToken.lineHeight['xs_1']}`,
      gap: `${sizeToken.gap['xs_1']}`,
    },
  },
  icon: {
    small: {
      padding: `${sizeToken.padding['xs_1']}`,
      borderRadius: `${sizeToken.borderRadius['xs_1']}`,
    },
    medium: {
      padding: `${sizeToken.padding['xs_2']}`,
      borderRadius: `${sizeToken.borderRadius['xs_2']}`,
    },
    large: {
      padding: `${sizeToken.padding['s_1']}`,
      borderRadius: `${sizeToken.borderRadius['s_1']}`,
    },
  },
} as const;

export const BUTTON_VARIANTS = {
  primary: {
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
      background: colors.SORA[800],
      color: colors.GRAY[990],
    },
  },
  secondary: {
    default: {
      background: colors.PURPLE[300],
      color: colors.GRAY[950],
    },
    hover: {
      background: colors.PURPLE[100],
      color: colors.GRAY[950],
    },
    pressed: {
      background: colors.PURPLE[600],
      color: colors.GRAY[990],
    },
    disabled: {
      background: colors.PURPLE[900],
      color: colors.GRAY[990],
    },
  },
  text: {
    default: {
      background: 'transparent',
      color: '#D5D5D5',
    },
    hover: {
      background: colors.GRAY[990],
      color: colors.GRAY[100],
    },
    pressed: {
      background: '#111117',
      color: colors.GRAY[300],
    },
    disabled: {
      background: 'transparent',
      color: '#2E2E3B',
    },
  },
  icon: {
    default: {
      background: 'transparent',
      color: '#D5D5D5',
    },
    hover: {
      background: colors.GRAY[990],
      color: colors.GRAY[100],
    },
    pressed: {
      background: '#111117',
      color: colors.GRAY[300],
    },
    disabled: {
      background: 'transparent',
      color: '#2E2E3B',
    },
  },
} as const;

/* 각 카테고리별 사이즈 키 */
export type Usage = keyof typeof BUTTON_SIZE;

// 사이즈
export type Size = keyof (typeof BUTTON_SIZE)['text'];
export type TextSize = Size;
export type RestSize = Exclude<Size, 'xxLarge'>;

// 색상 테마
export type Variant = keyof typeof BUTTON_VARIANTS;
export type TextVariant = Exclude<Variant, 'icon'>;
export type IconVariant = Extract<Variant, 'icon'>;
export type RestVariant = Exclude<Variant, 'icon' | 'text'>;

/** 각 버튼의 경우 대한 타입 강제. Usage 타입에 따라 개별 타입 적용 */
// 1. 텍스트만 있는 경우
export type TextProps = BaseButtonProps & {
  usage: 'text';
  size: TextSize;
  children: ReactNode;
  icon?: never;
  iconPosition?: never;
  variant: TextVariant;
};

// 2. 텍스트와 아이콘이 모두 있는 경우
export type MultiProps = BaseButtonProps & {
  usage: 'multi';
  size: RestSize;
  children: ReactNode;
  icon: ReactNode;
  iconPosition: 'left' | 'right';
  variant: RestVariant;
};

// 3. 아이콘만 있는 경우
export type IconProps = BaseButtonProps & {
  usage: 'icon';
  size: RestSize;
  icon: ReactNode;
  children?: never;
  iconPosition?: never;
  variant: IconVariant;
};
