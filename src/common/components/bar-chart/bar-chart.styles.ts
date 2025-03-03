import { css, keyframes } from '@emotion/react';

export const barChartStyle = (color?: string) => css`
  overflow: hidden;
  width: 100%;
  height: 0.6rem;
  background-color: ${color ? color : '#353137'};
`;

export const barChartBar = (value: number, color?: string) => css`
  height: 100%;
  background: ${color ? color : 'linear-gradient(270deg, #aee8ff 0%, #d8aeff 100%)'};
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
