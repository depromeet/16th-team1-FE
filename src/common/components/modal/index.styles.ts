import { css, CSSObject } from '@emotion/react';

import { ModalContentStyleProps } from './modal-types';

export const modalOverlay = (zIndex: number) => css`
  position: fixed;
  z-index: ${zIndex};
  background: rgb(0 0 0 / 80%);
  inset: 0;
`;

export const modalContent = ({
  width,
  height,
  padding,
  backgroundColor,
  gap,
  zIndex,
}: ModalContentStyleProps): CSSObject => ({
  display: 'flex',
  alignItems: 'flex-start',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  flexDirection: 'column',
  borderRadius: '1.6rem',
  boxShadow: '0 0.4rem 1.05rem 0 rgb(0 0 0 / 82%)',
  outline: 'none',
  zIndex: zIndex + 1,
  ...(width && { width }),
  ...(height && { height }),
  ...(padding && { padding }),
  ...(backgroundColor && { backgroundColor }),
  ...(gap && { gap }),
});
