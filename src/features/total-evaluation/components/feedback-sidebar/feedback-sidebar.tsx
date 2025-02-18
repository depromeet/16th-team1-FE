import { useState } from 'react';

import { sidebarList } from '../../service/data';
import { adaptToAccordionFormat } from '../../utils/adapt-accordion-format';
import AccordionMenu from '../accordion-menu/accordion-menu';
import { MenuTriggerButton } from '../custom-buttons/menu-trigger-button';
import { SingleMenuButton } from '../custom-buttons/single-menu-button';
import LeftSlidePanelToggle from '../left-slide-panel-toggle/left-slide-panel-toggle';

import * as styles from './feedback-sidebar.styles';

function FeedbackSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // API 호출(임시 데이터)
  const { data: sidebarListData } = sidebarList;
  const adaptedSidebarListData = adaptToAccordionFormat(sidebarListData);

  const [clickedTrigger, setClickedTrigger] = useState<string[]>([]);

  const handleTriggerButton = (menu: string) => {
    const shallow = [...clickedTrigger];
    if (shallow.includes(menu)) {
      shallow.splice(shallow.indexOf(menu), 1);
    } else {
      shallow.push(menu);
    }

    setClickedTrigger(shallow);
  };

  return (
    <LeftSlidePanelToggle
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
      trigger={<button css={styles.sidebarTrigger}>토글버튼</button>}
      title={<h2>포트폴리오 종합 평가</h2>}
    >
      <AccordionMenu
        clickedTrigger={clickedTrigger}
        sidebarListData={adaptedSidebarListData}
        type="multiple"
        renderTrigger={(menu) => (
          <MenuTriggerButton onClick={() => handleTriggerButton(menu)}>{menu}</MenuTriggerButton>
        )}
        renderContent={(submenu) => <SingleMenuButton>{submenu}</SingleMenuButton>}
      />
    </LeftSlidePanelToggle>
  );
}

export default FeedbackSidebar;
