import { useContext } from 'react';

import Icon from '@/common/components/icon/icon';
import { SidebarContext } from '@/features/total-evaluation/components/context/sidebar/sidebar-context';
import { SidebarOpenButton } from '@/features/total-evaluation/components/custom-buttons/sidebar-open-button';

import * as styles from './total-evaluation-left-buttons.styles';

function TotalEvalutationLeftButtons() {
  const { setIsSidebarOpen } = useContext(SidebarContext);
  return (
    <div css={styles.container}>
      <SidebarOpenButton onClick={() => setIsSidebarOpen((prev) => !prev)} />
      <Icon name="logo-full-header-navigation" />,
    </div>
  );
}

export default TotalEvalutationLeftButtons;
