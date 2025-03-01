import { forwardRef } from 'react';

import { BaseButton, BaseButtonProps } from '../../../../common/components/button/base-button';

import * as styles from './page-location-button.styles';

interface PageLocationButtonProps extends BaseButtonProps {
  buttonIndex: number;
  isSidebarOpen: boolean;
  isSelected: boolean;
}

const PageLocationButton = forwardRef<HTMLButtonElement, PageLocationButtonProps>(
  ({ buttonIndex, isSelected, isSidebarOpen, ...props }, ref) => {
    return (
      <BaseButton
        css={styles.pageLocationButton(buttonIndex, isSelected, isSidebarOpen)}
        ref={ref}
        {...props}
      />
    );
  },
);
PageLocationButton.displayName = 'PageLocationButton';

export { PageLocationButton };
