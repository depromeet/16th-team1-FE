import { forwardRef } from 'react';

import { BaseButton, BaseButtonProps } from '../../../../common/components/button/base-button';

import * as styles from './single-content-button.styles';

interface SingleContentButtonProps extends BaseButtonProps {
  buttonIndex: number;
  isSidebarOpen: boolean;
  isSelected: boolean;
}

const SingleContentButton = forwardRef<HTMLButtonElement, SingleContentButtonProps>(
  ({ buttonIndex, isSelected, isSidebarOpen, ...props }, ref) => {
    return (
      <BaseButton
        css={styles.singleContentButton(buttonIndex, isSelected, isSidebarOpen)}
        ref={ref}
        {...props}
      />
    );
  },
);
SingleContentButton.displayName = 'SingleContentButton';

export { SingleContentButton };
