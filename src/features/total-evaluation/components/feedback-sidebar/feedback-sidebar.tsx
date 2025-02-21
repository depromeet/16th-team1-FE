import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

import AccordionList from '@/features/total-evaluation/components/accordion-list/accordion-list';
import { AccordionTriggerButton } from '@/features/total-evaluation/components/custom-buttons/accordion-trigger-button';
import { SingleContentButton } from '@/features/total-evaluation/components/custom-buttons/single-content-button';
import LeftSlidePanelToggle from '@/features/total-evaluation/components/left-slide-panel-toggle/left-slide-panel-toggle';
import { sidebarList } from '@/features/total-evaluation/service/data';
import { adaptToAccordionFormat } from '@/features/total-evaluation/utils/adapt-accordion-format';

import { SidebarCloseButton } from '../custom-buttons/sidebar-close-button';
import { SidebarOpenButton } from '../custom-buttons/sidebar-open-button';

import * as styles from './feedback-sidebar.styles';

function FeedbackSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentOpenedTrigger, setCurrentOpenedTrigger] = useState<string[]>([]);

  // 현재 선택된 세부 페이지값 >> 피드백 결과 페이지를 위해 Context로 써야 할 수도 있음
  const [currentSelectedContent, setCurrentSelectedContent] = useState<string | null>(null);

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

  const handleContentButton = (content: string) => {
    setCurrentSelectedContent(content);
  };

  return (
    <LeftSlidePanelToggle
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
      additionalButton={<FaPlus />}
      triggerSidebar={(isSidebarOpen) => {
        return isSidebarOpen ? <SidebarOpenButton /> : <SidebarCloseButton />;
      }}
      title={<p css={styles.sidebarTitle}>포트폴리오 종합 평가</p>}
    >
      <AccordionList
        isSidebarOpen={isSidebarOpen}
        currentOpenedTrigger={currentOpenedTrigger}
        currentSelectedContent={currentSelectedContent}
        sidebarListData={adaptedSidebarListData}
        type="multiple"
        renderTrigger={(triggerTitle) => (
          <AccordionTriggerButton onClick={() => handleTriggerButton(triggerTitle)}>
            {triggerTitle}
          </AccordionTriggerButton>
        )}
        renderContent={(content) => (
          <SingleContentButton onClick={() => handleContentButton(content)}>
            {content}
          </SingleContentButton>
        )}
      />
    </LeftSlidePanelToggle>
  );
}

export default FeedbackSidebar;
