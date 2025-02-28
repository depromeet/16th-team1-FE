import { forwardRef } from 'react';

import { css } from '@emotion/react';

import { BaseButton, BaseButtonProps } from '@/common/components/button/base-button';
import Icon from '@/common/components/icon/icon';

import * as styles from './accordion-trigger-button.styles';

interface AccordionTriggerButtonProps extends BaseButtonProps {
  isCurrentTriggerSelected: boolean;
}

const AccordionTriggerButton = forwardRef<HTMLButtonElement, AccordionTriggerButtonProps>(
  ({ isCurrentTriggerSelected, ...props }, ref) => {
    return (
      <div css={styles.container}>
        <Icon
          name="sidebar-menu-icon"
          customStyle={css`
            opacity: ${isCurrentTriggerSelected ? 1 : 0};
            width: 0;
            width: ${isCurrentTriggerSelected && '14px'};
            transition:
              opacity 0.3s ease-in-out,
              width 0.3s ease-in-out;

            path {
              fill: ${isCurrentTriggerSelected && '#D7ADFE'};
            }
          `}
        />
        <BaseButton
          css={styles.accordionTriggerButton(isCurrentTriggerSelected)}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
AccordionTriggerButton.displayName = 'AccordionTriggerButton';

export { AccordionTriggerButton };
