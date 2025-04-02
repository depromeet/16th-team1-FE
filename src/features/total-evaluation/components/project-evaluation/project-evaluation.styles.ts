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

export const feedbackPerPageWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const feedbackPerPageItems = css`
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;

export const feedbackPerPageItem = css`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const feedbackPageImageContainer = withTheme(
  (theme) => css`
    display: flex;
    justify-content: center;
    position: relative;
    padding: 2.4rem 0;
    border-radius: 1.2rem;
    background-color: ${theme.colors.GRAY[700]};
  `,
);

export const pageNumber = withTheme(
  (theme) => css`
    position: absolute;
    left: 2.7rem;
    ${theme.fonts.CAPTION.CAPTION1_M};
    color: ${theme.colors.GRAY[50]};
  `,
);

export const feedbackPageImage = withTheme(
  (theme) => css`
    width: 56.5rem;
    height: 31.8rem;
    border: 0.1rem solid ${theme.colors.GRAY[200]};
    border-radius: 1.5rem;
    flex-shrink: 0;
    aspect-ratio: 565/318;
  `,
);

export const feedbackPerPageContentWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

export const feedbackPerPageContent = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const improvementSection = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6rem;
`;

export const oneLineSummaryWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;
`;

export const oneLineSummaryTitle = withTheme(
  (theme) => css`
    align-self: stretch;
    ${theme.fonts.SUBTITLE.SUB2_B};
    color: ${theme.colors.GRAY[200]};
  `,
);

export const oneLineSummaryDescription = withTheme(
  (theme) => css`
    align-self: stretch;
    ${theme.fonts.HEADLINE.HEAD4};
    color: ${theme.colors.GRAY[200]};
  `,
);
