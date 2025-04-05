import HeaderLogo from '@/common/components/layout/header-buttons/header-logo';

import AddButton from '../../custom-buttons/add-button';
import { SidebarCloseButton } from '../../custom-buttons/sidebar-close-button';
import { LeftSidebar } from '../base-sidebar-left/base-sidebar-left';

import * as styles from './control-buttons.styles';

function ControlButtons() {
  return (
    <header css={styles.container}>
      <HeaderLogo />
      <nav css={styles.controlButtons}>
        <AddButton />
        <LeftSidebar.Trigger content={<SidebarCloseButton />} />
      </nav>
    </header>
  );
}

export default ControlButtons;
