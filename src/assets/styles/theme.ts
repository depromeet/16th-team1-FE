import { Theme } from '@emotion/react';

import { colors } from '@/assets/styles/colors';

import { fonts } from './fonts';

export const theme: Theme = {
  fonts,
  colors,
};

export type ThemeType = typeof theme;
