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
    HEAD1: generateTypography(3.6, 700, 140, 0.036),
    HEAD2: generateTypography(3.2, 700, 140, 0.032),
    HEAD3: generateTypography(2.6, 700, 140, 0.026),
    HEAD4: generateTypography(2.4, 700, 140, 0.024),
    HEAD5: generateTypography(2.2, 600, 140, 0.022),
    HEAD6: generateTypography(2, 700, 140, 0.02),
  },

  SUBTITLE: {
    SUB1_SB: generateTypography(2, 600, 140),
    SUB1_M: generateTypography(2, 500, 140),
    SUB2_B: generateTypography(1.8, 700, 140),
    SUB2_SB: generateTypography(1.8, 600, 140),
    SUB3_B: generateTypography(1.6, 700, 140),
    SUB3_SB: generateTypography(1.6, 600, 140),
    SUB4_SB: generateTypography(1.5, 600, 140),
    SUB5_SB: generateTypography(1.4, 600, 140),
    SUB5_M: generateTypography(1.4, 500, 140),
  },

  BODY: {
    BODY1_R: generateTypography(1.8, 400, 160, -0.018),
    BODY2_M: generateTypography(1.6, 500, 170, -0.016),
    BODY2_R: generateTypography(1.6, 400, 170, -0.016),
    BODY3_R: generateTypography(1.4, 400, 160, -0.014),
    BODY4_M: generateTypography(1.3, 500, 150, -0.013),
    BODY5_M: generateTypography(1.2, 500, 150, -0.012),
  },

  CAPTION: {
    CAPTION1_SB: generateTypography(1.4, 600, 150),
    CAPTION1_M: generateTypography(1.4, 500, 150),
  },
} as const;

export type FontsTypes = typeof fonts;
