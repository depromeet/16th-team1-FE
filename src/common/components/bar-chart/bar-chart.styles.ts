import { css, keyframes } from '@emotion/react';

export const barChartStyle = css`
  overflow: hidden;
  width: 100%;
  height: 6px;
  background-color: #ebeef2;
`;

export const barChartBar = (value: number) => css`
  height: 100%;
  background-color: #4a5468;
  animation: ${widthAnimation(value)} 2s ease-in-out forwards;
`;

const widthAnimation = (value: number) => keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: ${value}%;
  }
`;
