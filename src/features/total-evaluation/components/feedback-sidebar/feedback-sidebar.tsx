import { useContext, useState } from 'react';

import { useTheme } from '@emotion/react';

import Icon from '@/common/components/icon/icon';
import AccordionList from '@/features/total-evaluation/components/accordion-list/accordion-list';
import LeftSlidePanelToggle from '@/features/total-evaluation/components/left-slide-panel-toggle/left-slide-panel-toggle';
import { sidebarList } from '@/features/total-evaluation/service/data';

import FeedbackContents from '../accordion-list/feedback-contents';
import { SelectedPageContext } from '../context/selected-page/selected-page-context';
import { SidebarContext } from '../context/sidebar/sidebar-context';
import AddButton from '../custom-buttons/add-button';
import { PageLocationButton } from '../custom-buttons/page-location-button';
import { ProjectTitleButton } from '../custom-buttons/project-title-button';
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
      additionalButton={<AddButton />}
      icon={<Icon name="logo-full" color={theme.colors.SORA[200]} width={99.429} />}
      openButton={<SidebarOpenButton onClick={() => setIsSidebarOpen((prev) => !prev)} />}
      closeButton={<SidebarCloseButton />}
    >
      <AccordionList type="multiple" orientation="vertical">
        <FeedbackContents
          dataList={sidebarListData}
          /** 각 메뉴 트리거 버튼 */
          renderTriggerButton={(accordionTrigger) => (
            <ProjectTitleButton
              isCurrentTriggerSelected={currentOpenedTrigger.includes(accordionTrigger)}
              onClick={() => handleTriggerButton(accordionTrigger)}
            >
              {accordionTrigger}
            </ProjectTitleButton>
          )}
          /** 각 메뉴가 트리거되면 나타나는 세부 컨텐츠 */
          renderContentButton={(page, buttonIndex) => (
            <PageLocationButton
              isSidebarOpen={isSidebarOpen}
              isSelected={selectedPage === page}
              buttonIndex={buttonIndex}
              onClick={() => handleContentButton(page)}
            >
              {page}
            </PageLocationButton>
          )}
        />
      </AccordionList>
    </LeftSlidePanelToggle>
  );
}

export default FeedbackSidebar;
