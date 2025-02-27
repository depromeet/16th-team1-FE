import '@emotion/react';

import { ColorsTypes } from '@/assets/styles/colors';

import { FontsTypes } from './fonts';
import { SizeTypes } from './space';

declare module '@emotion/react' {
  export interface Theme {
    fonts: FontsTypes;
    colors: ColorsTypes;
    sizeToken: SizeTypes;
  }
}
