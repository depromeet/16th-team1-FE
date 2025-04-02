import { colors } from '@assets/styles/colors';
import { css, Keyframes, keyframes } from '@emotion/react';

import { ToastType } from './toast-config';

interface ToastVariantType {
  background: string;
  border: string;
  textColor: string;
  padding: string;
  gap: string;
  fontSize: string;
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

const toastVariants: Record<ToastType, ToastVariantType> = {
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
  getFeedbackFailure: {
    background: 'rgba(233, 97, 80, 0.10)',
    border: `0.2rem solid rgba(233, 97, 80, 0.15)`,
    textColor: `${colors.RED[500]}`,
    padding: '1.8rem 2.4rem',
    gap: '0.6rem',
    fontSize: '1.6rem',
    isClickable: true,
    animation: {
      open: slideUp,
      close: slideDown,
      extra: 'none',
    },
    position: { bottom: '5.6rem', left: '50%', transform: 'translateX(-50%)' },
    boxShadow: '0 0 80px 0 rgb(0 0 0 / 24%)',
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
    border-radius: 69rem;
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
