import { css } from '@emotion/react';

export const nestedList = css`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const nestedListItem = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const orderListText = css`
  color: #4a5468;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 145%;
  list-style: decimal;
  list-style-position: inside;
`;

export const unorderListText = css`
  color: #74767d;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
  list-style: disc;
  list-style-position: inside;
  margin-left: 0.4rem;
`;
