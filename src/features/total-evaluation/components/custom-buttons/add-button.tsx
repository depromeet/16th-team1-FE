import { css, useTheme } from '@emotion/react';

import { BaseButton } from '@/common/components/button/base-button';
import Icon from '@/common/components/icon/icon';

import * as styles from './sidebar-control-button.styles';

function AddButton() {
  const theme = useTheme();
  return (
    <BaseButton css={styles.controlButtonCommonStyle}>
      <Icon
        name="ico_plus"
        color={theme.colors.GRAY[700]}
        customStyle={css`
          cursor: pointer;
        `}
      />
    </BaseButton>
  );
}

export default AddButton;
