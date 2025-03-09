import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const projectEvaluationWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 22rem;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const projectName = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD2}
    color: ${theme.colors.GRAY[200]};
  `,
);

export const projectImage = css`
  width: 100%;
  height: 45.3rem;
  border-radius: 1.2rem;
`;

export const evaluationSection = (gap: string) => css`
  display: flex;
  flex-direction: column;
  gap: ${gap};
`;

export const processReviewWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const processReviewTitle = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB2_B}
    color: ${theme.colors.GRAY[200]};
  `,
);

export const processReviewContent = withTheme(
  (theme) => css`
    ${theme.fonts.BODY.BODY2_M}
    color: ${theme.colors.GRAY[300]};
  `,
);

export const projectProcessItems = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;

  &::before {
    position: absolute;
    top: 30%;
    width: 100%;
    height: 0.1rem;
    content: '';
    background-color: #25262a;
  }
`;

export const projectProcessItem = css`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: center;
  z-index: 2;
`;

export const processIcon = (color: string) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: ${color};
  border-radius: 5rem;
`;

export const processCategory = withTheme(
  (theme) => css`
    ${theme.fonts.BODY.BODY2_M}
    color: ${theme.colors.GRAY[300]};
  `,
);
