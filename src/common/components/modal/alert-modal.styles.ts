import { css, CSSObject } from '@emotion/react';

interface ModalContentProps {
  width?: string;
  height?: string;
  padding?: string;
  backgroundColor?: string;
  gap?: string;
}

export const modalOverlay = css`
  position: fixed;
  background: rgb(0 0 0 / 80%);
  inset: 0;
`;

export const modalContent = ({
  width,
  height,
  padding,
  backgroundColor,
  gap,
}: ModalContentProps): CSSObject => ({
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
  ...(width && { width }),
  ...(height && { height }),
  ...(padding && { padding }),
  ...(backgroundColor && { backgroundColor }),
  ...(gap && { gap }),
});
