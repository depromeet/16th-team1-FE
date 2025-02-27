import { Theme } from '@emotion/react';

import { colors } from '@/assets/styles/colors';

import { fonts } from './fonts';
import { sizeToken } from './space';

export const theme: Theme = {
  fonts,
  colors,
  sizeToken,
};

export type ThemeType = typeof theme;
