import { ButtonHTMLAttributes, forwardRef } from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

import { useTheme } from '@emotion/react';

import { BaseButton } from '@/common/components/button/base-button';

import * as styles from './sidebar-control-button.styles';

const SidebarOpenButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const theme = useTheme();
    return (
      <BaseButton
        css={styles.controlButtonCommonStyle}
        style={{ backgroundColor: 'transparent' }}
        {...props}
        ref={ref}
      >
        <MdOutlineKeyboardDoubleArrowRight size={24} color={theme.colors.GRAY[700]} />
      </BaseButton>
    );
  },
);
SidebarOpenButton.displayName = 'SidebarOpenButton';

export { SidebarOpenButton };
