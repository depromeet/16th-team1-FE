import { forwardRef } from 'react';

import { BaseButton, BaseButtonProps } from '../../../../common/components/base-button/base-button';

import * as styles from './single-content-button.styles';

/** 고정된 스타일과 로직 사용 */
const SingleContentButton = forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => {
  return <BaseButton css={styles.singleContentButton} ref={ref} {...props} />;
});
SingleContentButton.displayName = 'SingleContentButton';

export { SingleContentButton };
