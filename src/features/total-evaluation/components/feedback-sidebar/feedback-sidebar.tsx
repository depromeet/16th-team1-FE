import { useState } from 'react';

import { sidebarList } from '../../service/data';
import { adaptToAccordionFormat } from '../../utils/adapt-accordion-format';
import AccordionList from '../accordion-list/accordion-list';
import { AccordionTriggerButton } from '../custom-buttons/accordion-trigger-button';
import { SingleContentButton } from '../custom-buttons/single-content-button';
import LeftSlidePanelToggle from '../left-slide-panel-toggle/left-slide-panel-toggle';

import * as styles from './feedback-sidebar.styles';

function FeedbackSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentOpenedTrigger, setCurrentOpenedTrigger] = useState<string[]>([]);

  // API 호출(임시 데이터)
  const { data: sidebarListData } = sidebarList;
  const adaptedSidebarListData = adaptToAccordionFormat(sidebarListData);

  const handleTriggerButton = (triggerTitle: string) => {
    const shallow = [...currentOpenedTrigger];
    if (shallow.includes(triggerTitle)) {
      shallow.splice(shallow.indexOf(triggerTitle), 1);
    } else {
      shallow.push(triggerTitle);
    }

    setCurrentOpenedTrigger(shallow);
  };

  return (
    <LeftSlidePanelToggle
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
      SidebarTrigger={<button css={styles.sidebarTrigger}>토글버튼</button>}
      title={<h2>포트폴리오 종합 평가</h2>}
    >
      <AccordionList
        currentOpenedTrigger={currentOpenedTrigger}
        sidebarListData={adaptedSidebarListData}
        type="multiple"
        renderTrigger={(triggerTitle) => (
          <AccordionTriggerButton onClick={() => handleTriggerButton(triggerTitle)}>
            {triggerTitle}
          </AccordionTriggerButton>
        )}
        renderContent={(content) => <SingleContentButton>{content}</SingleContentButton>}
      />
    </LeftSlidePanelToggle>
  );
}

export default FeedbackSidebar;
