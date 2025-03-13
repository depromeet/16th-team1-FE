import { css } from '@emotion/react';

import { PageLabelKey } from '@/common/constants/path';

export const container = (pageLabel: PageLabelKey) => css`
  display: flex;
  align-items: center;
  min-height: 5.4rem;
  padding: 1.1rem 2rem;
  background-color: transparent;
`;

export const leftSection = css`
  display: flex;
  justify-content: flex-start;
`;

export const middleSection = css`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const rightSection = css`
  display: flex;
  justify-content: flex-end;
`;
