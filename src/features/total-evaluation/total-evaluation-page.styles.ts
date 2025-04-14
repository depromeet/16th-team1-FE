import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const container = css`
  background-color: #18171d;
  min-width: 100dvw;
  display: flex;
`;

export const totalEvaluationSection = css`
  display: flex;
  width: 82rem;
  margin: auto;
  flex-direction: column;
  gap: 20rem;
  padding: 4.8rem 0 10rem;
`;

export const evaluationSection = (gap: string) => css`
  display: flex;
  flex-direction: column;
  gap: ${gap};
`;

export const hr = css`
  height: 0.1rem;
  margin: 5rem 0;
  background-color: #2f2f2f;
  border: none;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const fallbackWrapper = css`
  display: flex;
  width: 82rem;
  align-self: flex-start;
  margin: 0 auto;
  padding-top: 3.6rem;
`;

export const getFeedbackFailureButton = css`
  padding: 0.6rem;
  border-radius: 10rem;
  background-color: rgb(233 97 80 / 15%);
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const modalIcon = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD4}
  `,
);

export const modalTitle = withTheme(
  (theme) => css`
    ${theme.fonts.SUBTITLE.SUB3_B}
    color:#fff;
  `,
);

export const modalText = withTheme(
  (theme) => css`
    ${theme.fonts.CAPTION.CAPTION1_SB}
    color: ${theme.colors.GRAY[400]};
    text-align: center;
  `,
);
