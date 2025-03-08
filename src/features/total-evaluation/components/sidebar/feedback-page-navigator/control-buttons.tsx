import { useTheme } from '@emotion/react';

import Icon from '@/common/components/icon/icon';

import AddButton from '../../custom-buttons/add-button';
import { SidebarCloseButton } from '../../custom-buttons/sidebar-close-button';
import { LeftSidebar } from '../base-sidebar-left/base-sidebar-left';

import * as styles from './control-buttons.styles';

function ControlButtons() {
  const theme = useTheme();
  return (
    <header css={styles.container}>
      <Icon name="logo-full-sidebar" color={theme.colors.SORA[200]} />
      <nav css={styles.controlButtons}>
        <AddButton />
        <LeftSidebar.Trigger content={<SidebarCloseButton />} />
      </nav>
    </header>
  );
}

export default ControlButtons;
