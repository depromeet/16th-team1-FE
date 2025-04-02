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
    HEAD1: generateTypography(3.6, 625, 140, 0.036),
    HEAD2: generateTypography(3.2, 625, 140, 0.032),
    HEAD3: generateTypography(2.6, 625, 140, 0.026),
    HEAD4: generateTypography(2.4, 625, 140, 0.024),
    HEAD5: generateTypography(2.2, 525, 140, 0.022),
    HEAD6: generateTypography(2, 625, 140, 0.02),
  },

  SUBTITLE: {
    SUB1_SB: generateTypography(2, 525, 140),
    SUB1_M: generateTypography(2, 425, 140),
    SUB2_B: generateTypography(1.8, 625, 140),
    SUB2_SB: generateTypography(1.8, 525, 140),
    SUB3_B: generateTypography(1.6, 625, 140),
    SUB3_SB: generateTypography(1.6, 525, 140),
    SUB4_SB: generateTypography(1.5, 525, 140),
    SUB5_SB: generateTypography(1.4, 525, 140),
    SUB5_M: generateTypography(1.4, 425, 140),
  },

  BODY: {
    BODY1_R: generateTypography(1.8, 325, 160, -0.018),
    BODY2_M: generateTypography(1.6, 425, 170, -0.016),
    BODY2_R: generateTypography(1.6, 325, 170, -0.016),
    BODY3_R: generateTypography(1.4, 325, 160, -0.014),
    BODY4_M: generateTypography(1.3, 425, 150, -0.013),
    BODY5_M: generateTypography(1.2, 425, 150, -0.012),
  },

  CAPTION: {
    CAPTION1_SB: generateTypography(1.4, 525, 150),
    CAPTION1_M: generateTypography(1.4, 425, 150),
  },
} as const;

export type FontsTypes = typeof fonts;
