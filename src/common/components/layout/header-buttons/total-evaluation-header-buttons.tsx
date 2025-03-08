import { useContext } from 'react';

import { SidebarContext } from '@/features/total-evaluation/components/context/sidebar/sidebar-context';
import { SidebarOpenButton } from '@/features/total-evaluation/components/custom-buttons/sidebar-open-button';

import Icon from '../../icon/icon';

import * as styles from './total-evaluation-header-buttons.styles';

function TotalEvalutationHeaderButtons() {
  const { setIsSidebarOpen } = useContext(SidebarContext);
  return (
    <div css={styles.container}>
      <SidebarOpenButton onClick={() => setIsSidebarOpen((prev) => !prev)} />
      <Icon name="logo-full-header-navigation" />,
    </div>
  );
}

export default TotalEvalutationHeaderButtons;
