import { useSidebarContext } from '@/features/total-evaluation/components/context/sidebar/use-sidebar-context';
import { SidebarOpenButton } from '@/features/total-evaluation/components/custom-buttons/sidebar-open-button';

import HeaderLogo from '../header-logo';

import * as styles from './total-evaluation-sidebar-buttons.styles';

function TotalEvalutationSidebarButtons() {
  const { setIsSidebarOpen } = useSidebarContext();
  return (
    <div css={styles.container}>
      <SidebarOpenButton onClick={() => setIsSidebarOpen((prev) => !prev)} />
      <HeaderLogo />
    </div>
  );
}

export default TotalEvalutationSidebarButtons;
