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

function FeedbackSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentOpenedTrigger, setCurrentOpenedTrigger] = useState<string[]>([]);

  // 현재 선택된 세부 페이지값 >> 피드백 결과 페이지를 위해 Context로 써야 할 수도 있음
  const [selectedContent, setSelectedContent] = useState<string | null>(null);

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
    setSelectedContent(content);
  };

  return (
    <LeftSlidePanelToggle
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
      additionalButton={<FaPlus />}
      triggerSidebar={(isSidebarOpen) => {
        return isSidebarOpen ? <SidebarOpenButton /> : <SidebarCloseButton />;
      }}
    >
      <AccordionList
        sidebarListData={adaptedSidebarListData}
        type="multiple"
        /** 각 메뉴 트리거 버튼 */
        renderTrigger={(accordionTrigger) => (
          <AccordionTriggerButton
            isCurrentTriggerSelected={currentOpenedTrigger.includes(accordionTrigger)}
            onClick={() => handleTriggerButton(accordionTrigger)}
          >
            {accordionTrigger}
          </AccordionTriggerButton>
        )}
        /** 각 메뉴가 트리거되면 나타나는 세부 컨텐츠 */
        renderContent={(currentContent, buttonIndex) => (
          <SingleContentButton
            isSidebarOpen={isSidebarOpen}
            isSelected={selectedContent === currentContent}
            buttonIndex={buttonIndex}
            onClick={() => handleContentButton(currentContent)}
          >
            {currentContent}
          </SingleContentButton>
        )}
      />
    </LeftSlidePanelToggle>
  );
}

export default FeedbackSidebar;
