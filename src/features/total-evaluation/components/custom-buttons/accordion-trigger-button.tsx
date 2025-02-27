import { forwardRef } from 'react';

import { BaseButton, BaseButtonProps } from '@/common/components/button/base-button';

import * as styles from './accordion-trigger-button.styles';

const AccordionTriggerButton = forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => {
  return <BaseButton css={styles.accordionTriggerButton} ref={ref} {...props} />;
});
AccordionTriggerButton.displayName = 'AccordionTriggerButton';

export { AccordionTriggerButton };
