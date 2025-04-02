import { css } from '@emotion/react';

import { withTheme } from '@/common/utils/with-theme';

export const evaluationSummary = withTheme(
  (theme) => css`
    ${theme.fonts.HEADLINE.HEAD4}
    color:${theme.colors.SORA[200]};
  `,
);
