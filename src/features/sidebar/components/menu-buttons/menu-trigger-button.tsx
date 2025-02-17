import { forwardRef } from 'react';

import { BaseButton, BaseButtonProps } from '../../../../common/components/base-button/base-button';

import * as styles from './menu-trigger-button.styles';

/** 고정된 스타일과 로직 사용 */
const MenuTriggerButton = forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => {
  return <BaseButton onClick={() => {}} css={styles.sidebarToggleButton} ref={ref} {...props} />;
});
MenuTriggerButton.displayName = 'MenuTriggerButton';

export { MenuTriggerButton };
