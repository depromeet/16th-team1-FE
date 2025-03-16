import { css } from '@emotion/react';

export const fadeInDiv = (inView: boolean, delay: number) => css`
  opacity: ${inView ? 1 : 0};
  transform: translateY(${inView ? '0' : '2rem'});
  transition:
    opacity 0.6s ease-out ${delay}s,
    transform 0.6s ease-out ${delay}s;
`;
