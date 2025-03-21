import { ButtonHTMLAttributes, forwardRef } from 'react';

import { css, useTheme } from '@emotion/react';

import { BaseButton } from '@/common/components/button/base-button';
import Icon from '@/common/components/icon/icon';

import * as styles from './sidebar-control-button.styles';

const SidebarCloseButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const theme = useTheme();
    return (
      <BaseButton css={styles.controlButtonCommonStyle} {...props} ref={ref}>
        <Icon
          name="double-arrow-left"
          color={theme.colors.GRAY[700]}
          customStyle={css`
            cursor: pointer;
          `}
        />
      </BaseButton>
    );
  },
);
SidebarCloseButton.displayName = 'SidebarCloseButton';

export { SidebarCloseButton };
