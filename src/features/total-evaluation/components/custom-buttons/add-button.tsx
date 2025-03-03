import { FaPlus } from 'react-icons/fa6';

import { useTheme } from '@emotion/react';

import { BaseButton } from '@/common/components/button/base-button';

import * as styles from './sidebar-control-button.styles';

function AddButton() {
  const theme = useTheme();
  return (
    <BaseButton css={styles.controlButtonCommonStyle}>
      <FaPlus size={24} color={theme.colors.GRAY[700]} />
    </BaseButton>
  );
}

export default AddButton;
