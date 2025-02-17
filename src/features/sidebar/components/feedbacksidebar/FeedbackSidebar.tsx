import { Dispatch } from 'react';

import { sidebarList } from '../../service/data';
import { adaptToAccordionFormat } from '../../utils/adapt-accordion-format';
import AccordionMenu from '../AccordionMenu/AccordionMenu';
import LeftSlidePanelToggle from '../LeftSlidePanelToggle/LeftSlidePanelToggle';

import * as styles from './FeedbackSidebar.styles';

interface FeedbackSidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
}
function FeedbackSidebar({ isSidebarOpen, setIsSidebarOpen }: FeedbackSidebarProps) {
  // API 호출(임시 데이터)
  const { data: sidebarListData } = sidebarList;

  const adaptedSidebarListData = adaptToAccordionFormat(sidebarListData);

  return (
    <div>
      <LeftSlidePanelToggle
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        trigger={<button css={styles.trigger}>메뉴 토글</button>}
        title={<h2>포트폴리오 종합 평가</h2>}
      >
        <AccordionMenu
          sidebarListData={adaptedSidebarListData}
          type="multiple"
          renderTrigger={(menu) => <button>{menu}</button>}
          renderContent={(submenu) => <button>{submenu}</button>}
        />
      </LeftSlidePanelToggle>
    </div>
  );
}

export default FeedbackSidebar;
