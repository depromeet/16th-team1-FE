import { Theme } from '@emotion/react';

import { colors } from '@/assets/styles/colors';
import { deviceWidth } from '@/assets/styles/device-width';

import { fonts } from './fonts';
import { sizeToken } from './space';

export const theme: Theme = {
  fonts,
  colors,
  sizeToken,
  deviceWidth,
};

export type ThemeType = typeof theme;
