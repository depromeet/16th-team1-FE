import '@emotion/react';

import { ColorsTypes } from '@/assets/styles/colors';

import { FontsTypes } from './fonts';

declare module '@emotion/react' {
  export interface Theme {
    fonts: FontsTypes;
    colors: ColorsTypes;
  }
}
