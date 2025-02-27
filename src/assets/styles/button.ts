import { ReactNode } from 'react';

import { BaseButtonProps } from '@/common/components/button/base-button';

import { colors } from './colors';
import { sizeToken } from './space';

export const BUTTON_SIZE = {
  text: {
    small: {
      padding: `${sizeToken.padding['xs_2']} ${sizeToken.padding['sm_2']}`,
      fontSize: `${sizeToken.fontSize['xs_1']}`,
      lineHeight: `${sizeToken.lineHeight['xs_1']}`,
      borderRadius: `${sizeToken.borderRadius['xs_1']}`,
    },
    medium: {
      padding: `${sizeToken.padding['s_2']} ${sizeToken.padding['md_2']}`,
      fontSize: `${sizeToken.fontSize['s_1']}`,
      lineHeight: `${sizeToken.lineHeight['xs_1']}`,
      borderRadius: `${sizeToken.borderRadius['xs_1']}`,
    },
    large: {
      padding: `${sizeToken.padding['sm_2']} ${sizeToken.padding['lg_1']}`,
      fontSize: `${sizeToken.fontSize['s_1']}`,
      lineHeight: `${sizeToken.lineHeight['xs_1']}`,
      borderRadius: `${sizeToken.borderRadius['xs_1']}`,
    },
  },
  icon: {
    small: {
      padding: `${sizeToken.padding['s_1']}`,
      borderRadius: `${sizeToken.borderRadius['xs_1']}`,
    },
    medium: {
      padding: `${sizeToken.padding['s_2']}`,
      borderRadius: `${sizeToken.borderRadius['xs_1']}`,
    },
    large: {
      padding: `${sizeToken.padding['sm_1']}`,
      borderRadius: `${sizeToken.borderRadius['xs_1']}`,
    },
  },
  multi: {
    small: {
      padding: `${sizeToken.padding['xs_2']} ${sizeToken.padding['sm_2']} ${sizeToken.padding['xs_2']} ${sizeToken.padding['s_2']}`,
      fontSize: `${sizeToken.fontSize['xs_1']}`,
      borderRadius: `${sizeToken.borderRadius['xs_1']}`,
      lineHeight: `${sizeToken.lineHeight['xs_1']}`,
      gap: `${sizeToken.gap['xs_1']}`,
    },
    medium: {
      padding: `${sizeToken.padding['s_2']} ${sizeToken.padding['md_2']} ${sizeToken.padding['s_2']} ${sizeToken.padding['md_1']}`,
      fontSize: `${sizeToken.fontSize['s_1']}`,
      borderRadius: `${sizeToken.borderRadius['xs_1']}`,
      lineHeight: `${sizeToken.lineHeight['xs_1']}`,
      gap: `${sizeToken.gap['xs_1']}`,
    },
    large: {
      padding: `${sizeToken.padding['sm_2']} ${sizeToken.padding['lg_1']} ${sizeToken.padding['sm_2']} ${sizeToken.padding['md_2']}`,
      fontSize: `${sizeToken.fontSize['s_1']}`,
      borderRadius: `${sizeToken.borderRadius['xs_1']}`,
      lineHeight: `${sizeToken.lineHeight['xs_1']}`,
      gap: `${sizeToken.gap['xs_1']}`,
    },
  },
};

export const BUTTON_VARIANTS = {
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
export type Usage = keyof typeof BUTTON_SIZE;
export type Size = keyof (typeof BUTTON_SIZE)['text'];
export type ButtonVariant = keyof typeof BUTTON_VARIANTS;

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
