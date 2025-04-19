import { css } from '@emotion/react';

export const barChartStyle = (color?: string) => css`
  overflow: hidden;
  width: 100%;
  height: 0.6rem;
  background-color: ${color ? color : '#353137'};
`;

export const barChartBar = (value: number, color?: string) => css`
  width: ${value}%;
  height: 100%;
  background: ${color ? color : 'linear-gradient(270deg, #aee8ff 0%, #d8aeff 100%)'};
  transition: width 2s ease-in-out;
`;
