import { ReactNode, useContext } from 'react';

import FeedbackSidebarHeader from './feedback-sidebar-header';
import { LeftSidebar } from '../base-sidebar-left/base-sidebar-left';
import { SidebarContext } from '../context/sidebar/sidebar-context';
import { SidebarOpenButton } from '../custom-buttons/sidebar-open-button';

export interface LeftSlidePanelToggleProps {
  children: ReactNode;
}

/**
 * - Sidebar는 재사용 대상.
 * - LeftSlidePanelToggle은 도메인 별로 Sidebar를 호출해서 소비하는 컴포넌트
 */
function LeftSlidePanelToggle({ children }: LeftSlidePanelToggleProps) {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

  return (
    <LeftSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}>
      <LeftSidebar.Container isSidebarOpen={isSidebarOpen} ariaLabel="sidebar">
        {/* Header */}
        <FeedbackSidebarHeader />

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

export default LeftSlidePanelToggle;
