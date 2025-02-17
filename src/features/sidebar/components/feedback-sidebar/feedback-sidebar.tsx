import { Dispatch } from 'react';

import { css } from '@emotion/react';

import { Button } from '../../../../common/components/button/button';
import { sidebarList } from '../../service/data';
import { adaptToAccordionFormat } from '../../utils/adapt-accordion-format';
import AccordionMenu from '../accordion-menu/accordion-menu';
import LeftSlidePanelToggle from '../left-slide-panel-toggle/left-slide-panel-toggle';
import { MenuTriggerButton } from '../menu-buttons/menu-trigger-button';
import { SingleMenuButton } from '../menu-buttons/single-menu-button';

import * as styles from './feedback-sidebar.styles';

interface FeedbackSidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
}
function FeedbackSidebar({ isSidebarOpen, setIsSidebarOpen }: FeedbackSidebarProps) {
  // API 호출(임시 데이터)
  const { data: sidebarListData } = sidebarList;

  const adaptedSidebarListData = adaptToAccordionFormat(sidebarListData);

  return (
    <LeftSlidePanelToggle
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
      trigger={<button css={styles.sidebarTrigger}>토글버튼</button>}
      title={<h2>포트폴리오 종합 평가</h2>}
    >
      <AccordionMenu
        sidebarListData={adaptedSidebarListData}
        type="multiple"
        renderTrigger={(menu) => <MenuTriggerButton>{menu}</MenuTriggerButton>}
        renderContent={(submenu) => <SingleMenuButton>{submenu}</SingleMenuButton>}
      />
    </LeftSlidePanelToggle>
  );
}

export default FeedbackSidebar;
