import { useContext, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

import { css, useTheme } from '@emotion/react';

import Icon from '@/common/components/icon/icon';
import AccordionList from '@/features/total-evaluation/components/accordion-list/accordion-list';
import { AccordionTriggerButton } from '@/features/total-evaluation/components/custom-buttons/accordion-trigger-button';
import LeftSlidePanelToggle from '@/features/total-evaluation/components/left-slide-panel-toggle/left-slide-panel-toggle';
import { sidebarList } from '@/features/total-evaluation/service/data';

import FeedbackContents from '../accordion-list/feedback-contents';
import { SelectedPageContext } from '../context/selected-page/selected-page-context';
import { SidebarContext } from '../context/sidebar/sidebar-context';
import { AccordionContentButton } from '../custom-buttons/accordion-content-button';
import { SidebarCloseButton } from '../custom-buttons/sidebar-close-button';
import { SidebarOpenButton } from '../custom-buttons/sidebar-open-button';

function FeedbackSidebar() {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  const { selectedPage, setSelectedPage } = useContext(SelectedPageContext);
  const [currentOpenedTrigger, setCurrentOpenedTrigger] = useState<string[]>([]);
  const theme = useTheme();
  // API 호출(임시 데이터)
  const { data: sidebarListData } = sidebarList;

  const handleTriggerButton = (triggerTitle: string) => {
    setCurrentOpenedTrigger((prev) =>
      prev.includes(triggerTitle)
        ? prev.filter((title) => title !== triggerTitle)
        : [...prev, triggerTitle],
    );
  };

  const handleContentButton = (page: string) => {
    setSelectedPage(page);
  };

  return (
    <LeftSlidePanelToggle
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
      additionalButton={<FaPlus />}
      icon={
        <Icon
          name="logo-full"
          customStyle={css`
            path {
              fill: ${theme.colors.SORA[200]};
            }
          `}
        />
      }
      triggerSidebar={(isSidebarOpen) => {
        return isSidebarOpen ? <SidebarCloseButton /> : <SidebarOpenButton />;
      }}
    >
      <AccordionList type="multiple" orientation="vertical">
        <FeedbackContents
          dataList={sidebarListData}
          /** 각 메뉴 트리거 버튼 */
          renderTriggerButton={(accordionTrigger) => (
            <AccordionTriggerButton
              isCurrentTriggerSelected={currentOpenedTrigger.includes(accordionTrigger)}
              onClick={() => handleTriggerButton(accordionTrigger)}
            >
              {accordionTrigger}
            </AccordionTriggerButton>
          )}
          /** 각 메뉴가 트리거되면 나타나는 세부 컨텐츠 */
          renderContentButton={(page, buttonIndex) => (
            <AccordionContentButton
              isSidebarOpen={isSidebarOpen}
              isSelected={selectedPage === page}
              buttonIndex={buttonIndex}
              onClick={() => handleContentButton(page)}
            >
              {page}
            </AccordionContentButton>
          )}
        />
      </AccordionList>
    </LeftSlidePanelToggle>
  );
}

export default FeedbackSidebar;
