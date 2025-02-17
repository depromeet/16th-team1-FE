import { forwardRef } from 'react';

import { BaseButton, BaseButtonProps } from '../../../../common/components/base-button/base-button';

import * as styles from './menu-trigger-button.styles';

const MenuTriggerButton = forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => {
  return <BaseButton css={styles.sidebarToggleButton} ref={ref} {...props} />;
});
MenuTriggerButton.displayName = 'MenuTriggerButton';

export { MenuTriggerButton };
