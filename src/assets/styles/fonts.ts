import { css } from '@emotion/react';

const generateTypography = (
  size: number,
  weight: number,
  lineHeight: number,
  letterSpacing?: number,
) => css`
  font-style: normal;
  color: #000;
  font-size: ${size}rem;
  font-weight: ${weight};
  line-height: ${lineHeight}%;
  ${letterSpacing && `letter-spacing: ${letterSpacing}rem;`}
`;

export const fonts = {
  HEADLINE: {
    HEAD1: generateTypography(3.2, 700, 140, 0.032),
    HEAD2: generateTypography(2.6, 700, 150, 0.026),
    HEAD3: generateTypography(2.4, 700, 150, 0.024),
    HEAD4: generateTypography(2.2, 600, 150, 0.022),
    HEAD5: generateTypography(2, 700, 140, 0.02),
  },

  BODY: {
    BODY1_B: generateTypography(1.8, 700, 145, -0.018),
    BODY1_SB: generateTypography(1.8, 600, 145, -0.018),
    BODY2_SB: generateTypography(1.6, 500, 170, 0.016),
    BODY2_M: generateTypography(1.6, 500, 170, 0.016),
    BODY2_R: generateTypography(1.6, 400, 150, 0.016),
    BODY3_SB: generateTypography(1.5, 500, 170, 0.015),
  },

  CAPTION: {
    CAPTION1_SB: generateTypography(1.4, 600, 150),
    CAPTION1_M: generateTypography(1.4, 500, 150, -0.014),
  },
} as const;

export type FontsTypes = typeof fonts;
