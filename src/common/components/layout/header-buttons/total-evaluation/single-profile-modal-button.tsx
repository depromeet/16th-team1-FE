import { forwardRef } from 'react';

import { BaseButton } from '@/common/components/button/base-button';

import * as styles from './single-profile-modal-button.styles';

interface SingleProfileModalButtonProps {
  label: string;
  handleClick?: () => void;
  disabled?: boolean;
}

const SingleProfileModalButton = forwardRef<HTMLButtonElement, SingleProfileModalButtonProps>(
  ({ label, handleClick, disabled = false }, ref) => {
    return (
      <BaseButton css={styles.SingleButton} onClick={handleClick} ref={ref} disabled={disabled}>
        <p css={styles.ButtonLabel(disabled)}>{label}</p>
      </BaseButton>
    );
  },
);

SingleProfileModalButton.displayName = 'SingleProfileModalButton';

export default SingleProfileModalButton;
