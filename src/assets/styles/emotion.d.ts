import '@emotion/react';

import { FontsTypes } from './fonts';

declare module '@emotion/react' {
  export interface Theme {
    fonts: FontsTypes;
  }
}
