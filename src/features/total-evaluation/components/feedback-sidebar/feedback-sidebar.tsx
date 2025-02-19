import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

import { sidebarList } from '../../service/data';
import { adaptToAccordionFormat } from '../../utils/adapt-accordion-format';
import AccordionList from '../accordion-list/accordion-list';
import { AccordionTriggerButton } from '../custom-buttons/accordion-trigger-button';
import { SingleContentButton } from '../custom-buttons/single-content-button';
import LeftSlidePanelToggle from '../left-slide-panel-toggle/left-slide-panel-toggle';

function FeedbackSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentOpenedTrigger, setCurrentOpenedTrigger] = useState<string[]>([]);

  // 현재 선택된 세부 페이지값 >> 피드백 결과 페이지에서도 써야하니까 결국은 Context로 써야 할수도?
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
      newTaskButton={<FaPlus />}
      triggerSidebar={(isSidebarOpen) => {
        return isSidebarOpen ? (
          <MdOutlineKeyboardDoubleArrowLeft size={24} />
        ) : (
          <MdOutlineKeyboardDoubleArrowRight size={24} />
        );
      }}
      title={<p>포트폴리오 종합 평가</p>}
    >
      <AccordionList
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
