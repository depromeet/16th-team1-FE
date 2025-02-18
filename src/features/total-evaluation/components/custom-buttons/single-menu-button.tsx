import { forwardRef } from 'react';

import { BaseButton, BaseButtonProps } from '../../../../common/components/base-button/base-button';

import * as styles from './single-menu-button.styles';

/** 고정된 스타일과 로직 사용 */
const SingleMenuButton = forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => {
  return <BaseButton css={styles.singleMenuButton} ref={ref} {...props} />;
});
SingleMenuButton.displayName = 'SingleMenuButton';

export { SingleMenuButton };
