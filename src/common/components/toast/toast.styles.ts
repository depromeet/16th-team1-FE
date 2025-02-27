import { colors } from '@assets/styles/colors';
import { css, keyframes } from '@emotion/react';

import { ToastType } from './toast';

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(10rem);
  }
`;

const toastStyles: Record<ToastType, { background: string; border: string; text: string }> = {
  aiCompleteLarge: {
    background: `linear-gradient(95deg, rgba(211, 181, 255, 0.1) 0%, rgba(179, 225, 254, 0.1) 100%) padding-box,
                 linear-gradient(to right bottom, ${colors.PURPLE[300]}, ${colors.SORA[200]}) border-box`,
    border: '0.15rem solid transparent',
    text: `linear-gradient(270deg, ${colors.SORA[200]}, ${colors.PURPLE[300]})`,
  },
  aiCompleteSmall: {
    background: `linear-gradient(to right, ${colors.BLACK}, ${colors.BLACK})`,
    border: `0.15rem solid ${colors.PURPLE[300]}`,
    text: `linear-gradient(270deg, ${colors.SORA[200]}, ${colors.PURPLE[300]})`,
  },
  loginFailure: {
    background: `${colors.BLACK}`,
    border: `0.15rem solid ${colors.RED[500]}`,
    text: `${colors.RED[500]}`,
  },
  pdfSubmit: {
    background: `${colors.BLACK}`,
    border: `0.15rem solid ${colors.GREEN[500]}`,
    text: `${colors.GREEN[500]}`,
  },
};

export const root = (name: ToastType) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${name === 'aiCompleteLarge' ? '3.2rem 4rem' : '2.2rem 3rem'};
  gap: ${name === 'aiCompleteLarge' ? '1.6rem' : '0.7rem'};
  flex-shrink: 0;
  border-radius: 69rem;
  background: ${toastStyles[name].background};
  border: ${toastStyles[name].border};
  background-origin: border-box;
  background-clip: padding-box, border-box;
  backdrop-filter: blur(10px);

  &[data-state='open'] {
    animation: ${slideUp} 300ms ease-out;
  }

  &[data-state='closed'] {
    animation: ${slideDown} 200ms ease-in;
  }
`;

export const title = (name: ToastType) => css`
  background: ${toastStyles[name].text};
  color: transparent;
  font-size: ${name === 'aiCompleteLarge' ? '2.4rem' : '1.658rem'};
  font-weight: 600;
  line-height: normal;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.0332rem;
`;

export const viewport = css`
  position: fixed;
  bottom: 10rem;
  left: 50%;
  transform: translateX(-50%);
`;
