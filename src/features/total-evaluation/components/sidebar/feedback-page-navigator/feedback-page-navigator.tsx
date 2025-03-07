import { ReactNode, useContext } from 'react';

import ControlButtons from './control-buttons';
import { SidebarContext } from '../../context/sidebar/sidebar-context';
import { SidebarOpenButton } from '../../custom-buttons/sidebar-open-button';
import { LeftSidebar } from '../base-sidebar-left/base-sidebar-left';

export interface LeftSlidePanelToggleProps {
  children: ReactNode;
}

/**
 * - LeftSidebar는 왼쪽에 발생하는 사이드바에 대한 재사용 대상.
 * - FeedbackPageNavigator은 도메인 별로 Sidebar를 호출해서 소비하는 컴포넌트
 */
function FeedbackPageNavigator({ children }: LeftSlidePanelToggleProps) {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

  return (
    <LeftSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}>
      <LeftSidebar.Container isSidebarOpen={isSidebarOpen} ariaLabel="sidebar">
        {/* Header */}
        <ControlButtons />

        {/* Contents */}
        <LeftSidebar.Content>{children}</LeftSidebar.Content>
      </LeftSidebar.Container>

      {/* PlaceHolder */}
      <LeftSidebar.PlaceHolder
        isSidebarOpen={isSidebarOpen}
        content={<SidebarOpenButton onClick={() => setIsSidebarOpen((prev) => !prev)} />}
      />
    </LeftSidebar>
  );
}

export default FeedbackPageNavigator;
