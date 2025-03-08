import { css } from '@emotion/react';

import { theme } from '@/assets/styles/theme';

export const container = (isLanding: boolean) => css`
  --sidebar-bg: ${isLanding ? theme.colors.GRAY[1000] : theme.colors.GRAY.bg};

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.4rem;
  padding: 1.1rem 2rem;
  background-color: var(--sidebar-bg);
`;
