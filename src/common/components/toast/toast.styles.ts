import { colors } from '@assets/styles/colors';
import { css, keyframes } from '@emotion/react';

import { ToastType } from './toast-config';

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

const floating = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(10rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideRight = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(10rem);
  }
`;

const toastVariants = {
  aiCompleteLarge: {
    background: `linear-gradient(to right, ${colors.GRAY[1000]}, ${colors.GRAY[1000]}) padding-box,
                   linear-gradient(to right bottom, ${colors.PURPLE[300]}, ${colors.SORA[200]}) border-box`,
    border: '0.15rem solid transparent',
    textColor: `linear-gradient(270deg, ${colors.SORA[200]}, ${colors.PURPLE[300]})`,
    padding: '3.2rem 4rem',
    gap: '1.6rem',
    fontSize: '2.4rem',
    isClickable: true,
    animation: {
      open: slideUp,
      close: slideDown,
      extra: floating,
    },
    position: { bottom: '10rem', left: '50%', transform: 'translateX(-50%)' },
  },
  aiCompleteSmall: {
    background: `linear-gradient(to right, ${colors.GRAY[1000]}, ${colors.GRAY[1000]}) padding-box,
                   linear-gradient(to right bottom, ${colors.PURPLE[300]}, ${colors.SORA[200]}) border-box`,
    border: '0.15rem solid transparent',
    textColor: `linear-gradient(270deg, ${colors.SORA[200]}, ${colors.PURPLE[300]})`,
    padding: '2.2rem 3rem',
    gap: '0.7rem',
    fontSize: '1.658rem',
    isClickable: false,
    animation: {
      open: slideUp,
      close: slideDown,
      extra: 'none',
    },
    position: { bottom: '10rem', left: '50%', transform: 'translateX(-50%)' },
  },
  loginFailure: {
    background: `${colors.GRAY[1000]}`,
    border: `0.15rem solid ${colors.RED[500]}`,
    textColor: `${colors.RED[500]}`,
    padding: '2.2rem 3rem',
    gap: '0.7rem',
    fontSize: '1.658rem',
    isClickable: false,
    animation: {
      open: slideLeft,
      close: slideRight,
      extra: 'none',
    },
    position: { top: '2rem', right: '2rem' },
  },
  pdfSubmit: {
    background: `${colors.GRAY[1000]}`,
    border: `0.15rem solid ${colors.GREEN[500]}`,
    textColor: `${colors.GREEN[500]}`,
    padding: '2.2rem 3rem',
    gap: '0.7rem',
    fontSize: '1.658rem',
    isClickable: false,
    animation: {
      open: slideUp,
      close: slideDown,
      extra: 'none',
    },
    position: { bottom: '10rem', left: '50%', transform: 'translateX(-50%)' },
  },
};

export const root = (name: ToastType) => {
  const { background, border, padding, gap, animation, isClickable } = toastVariants[name];

  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${padding};
    gap: ${gap};
    flex-shrink: 0;
    border-radius: 69rem;
    background: ${background};
    border: ${border};
    background-origin: border-box;
    background-clip: padding-box, border-box;
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
  const { textColor, fontSize } = toastVariants[name];

  return css`
    background: ${textColor};
    color: transparent;
    font-size: ${fontSize};
    font-weight: 600;
    line-height: normal;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.0332rem;
  `;
};

export const viewport = (name: ToastType) => {
  const { position } = toastVariants[name];

  return css`
    position: fixed;
    ${Object.entries(position)
      .map(([key, value]) => `${key}: ${value};`)
      .join('')}
  `;
};
