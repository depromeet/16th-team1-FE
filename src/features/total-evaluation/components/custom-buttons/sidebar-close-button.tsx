import { ButtonHTMLAttributes, forwardRef } from 'react';
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';

import { useTheme } from '@emotion/react';

import { BaseButton } from '@/common/components/button/base-button';

import * as styles from './sidebar-control-button.styles';

const SidebarCloseButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const theme = useTheme();
    return (
      <BaseButton css={styles.controlButtonCommonStyle} {...props} ref={ref}>
        <MdOutlineKeyboardDoubleArrowLeft size={24} color={theme.colors.GRAY[700]} />
      </BaseButton>
    );
  },
);
SidebarCloseButton.displayName = 'SidebarCloseButton';

export { SidebarCloseButton };
