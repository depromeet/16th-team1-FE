import { colors } from '@assets/styles/colors';
import { css, Keyframes, keyframes } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

import { ToastType } from './toast-config';

interface ToastVariantType {
  background: string;
  border: string;
  textColor: string;
  padding: string;
  gap: string;
  isClickable: boolean;
  animation: {
    open: Keyframes;
    close: Keyframes;
    extra: Keyframes | 'none';
  };
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    transform?: string;
  };
  boxShadow?: string;
  backdropFilter?: string;
}

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

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const toastVariants: Record<ToastType, ToastVariantType> = {
  feedbackPending: {
    background: `rgba(24, 23, 29, 0.20)`,
    border: `0.2rem solid rgba(255, 255, 255, 0.30)`,
    textColor: `${colors.GRAY[200]}`,
    padding: '2.4rem 3.2rem',
    gap: '0.6rem',
    isClickable: false,
    animation: {
      open: slideUp,
      close: slideDown,
      extra: 'none',
    },
    position: { bottom: '10rem', left: '50%', transform: 'translateX(-50%)' },
    boxShadow: `0 0 8rem 0 rgba(0, 0, 0, 0.40)`,
    backdropFilter: `blur(1.2rem)`,
  },
  feedbackError: {
    border: `0.2rem solid rgba(255, 89, 89, 0.30)`,
    background: `rgba(227, 45, 45, 0.20)`,
    textColor: `${colors.GRAY[100]}`,
    padding: '2.1rem 2.4rem',
    gap: '0.8rem',
    isClickable: true,
    animation: {
      open: slideUp,
      close: slideDown,
      extra: 'none',
    },
    position: { bottom: '10rem', left: '50%', transform: 'translateX(-50%)' },
    boxShadow: `0 0 8rem 0 rgba(0, 0, 0, 0.40)`,
    backdropFilter: `blur(1.2rem)`,
  },
  getFeedbackFailure: {
    background: 'rgba(233, 97, 80, 0.10)',
    border: `0.2rem solid rgba(233, 97, 80, 0.15)`,
    textColor: `${colors.RED[500]}`,
    padding: '1.8rem 2.4rem',
    gap: '0.6rem',
    isClickable: true,
    animation: {
      open: slideUp,
      close: slideDown,
      extra: 'none',
    },
    position: { bottom: '5.6rem', left: '50%', transform: 'translateX(-50%)' },
    boxShadow: '0 0 8rem 0 rgb(0 0 0 / 24%)',
    backdropFilter: 'blur(1.2rem)',
  },
};

export const root = (name: ToastType) => {
  const { background, border, padding, gap, animation, isClickable, boxShadow, backdropFilter } =
    toastVariants[name];

  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${padding};
    background: ${background};
    border: ${border};
    gap: ${gap};
    flex-shrink: 0;
    border-radius: 100rem;
    background-origin: border-box;
    background-clip: padding-box, border-box;
    box-shadow: ${boxShadow || 'none'};
    backdrop-filter: ${backdropFilter || 'none'};
    cursor: ${isClickable ? 'pointer' : 'default'};

    &[data-state='open'] {
      animation:
        ${animation.open} 300ms cubic-bezier(0.4, 0, 0.6, 1) forwards,
        ${animation.extra} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 300ms;
    }

    &[data-state='closed'] {
      animation: ${animation.close} 200ms ease-in;
    }
  `;
};

export const title = (name: ToastType) => {
  const { textColor } = toastVariants[name];

  return css`
    flex-shrink: 0;
    background: ${textColor};
    color: transparent;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  `;
};

export const viewport = (name: ToastType) => {
  const { position } = toastVariants[name];

  return css`
    position: fixed;
    z-index: 100;
    ${Object.entries(position)
      .map(([key, value]) => `${key}: ${value};`)
      .join('')}
  `;
};

export const spinnerStyle = css`
  display: inline-block;
  animation: ${spin} 2s linear infinite;
  flex-shrink: 0;
`;

export const errorWrapper = withTheme(
  (theme) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4rem 0.8rem;
    border-radius: 10rem;
    background: rgb(150 84 84 / 46%);
    ${theme.fonts.SUBTITLE.SUB5_SB};
    color: ${theme.colors.GRAY[50]};
  `,
);
