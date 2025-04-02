import { forwardRef } from 'react';

import { BaseButton } from '@/common/components/button/base-button';

import * as styles from './single-profile-modal-button.styles';

interface SingleProfileModalButtonProps {
  label: string;
  handleClick?: () => void;
}

const SingleProfileModalButton = forwardRef<HTMLButtonElement, SingleProfileModalButtonProps>(
  ({ label, handleClick }, ref) => {
    return (
      <BaseButton css={styles.SingleButton} onClick={handleClick} ref={ref}>
        <p css={styles.ButtonLabel}>{label}</p>
      </BaseButton>
    );
  },
);

SingleProfileModalButton.displayName = 'SingleProfileModalButton';

export default SingleProfileModalButton;
