import { forwardRef } from 'react';

import { BaseButton, BaseButtonProps } from '../../../../common/components/button/base-button';

import * as styles from './accordion-content-button.styles';

interface AccordionContentButtonProps extends BaseButtonProps {
  buttonIndex: number;
  isSidebarOpen: boolean;
  isSelected: boolean;
}

const AccordionContentButton = forwardRef<HTMLButtonElement, AccordionContentButtonProps>(
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
AccordionContentButton.displayName = 'AccordionContentButton';

export { AccordionContentButton };
