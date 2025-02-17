import { Dispatch, useState } from 'react';

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
