import { css, keyframes } from '@emotion/react';

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-1rem);
  }
`;

export const container = css`
  margin-top: 2rem;
`;

export const contents = css`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
  padding-left: 0.5rem;
  border-left: 0.2rem solid lightgray;
`;

export const trigger = (isSelected: boolean) => css`
  margin: 1rem 0;
  font-weight: ${isSelected && 'bolder'};
`;

// Accordion.Content 에 적용할 애니메이션 스타일
export const accordionContent = css`
  padding: 0.5rem 0;
  border-left: 0.2rem solid lightgray;

  &[data-state='open'] {
    animation: ${slideDown} 300ms ease-out forwards;
  }

  &[data-state='closed'] {
    animation: ${slideUp} 300ms ease-out forwards;
  }
`;

export const itemWithSidebar = css`
  position: relative;

  &[data-state='open']::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -0.5rem; /* 적절한 위치 조절 */
    width: 0.2rem;
    content: '';
    background-color: lightgray;
  }
`;
