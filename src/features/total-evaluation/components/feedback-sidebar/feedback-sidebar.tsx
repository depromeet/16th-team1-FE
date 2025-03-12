import { useContext, useState } from 'react';

import { scrollToSection } from '@/common/utils/scroll-to-section';
import AccordionList from '@/features/total-evaluation/components/accordion-list/accordion-list';

import { ProjectEvaluationType } from '../../services/use-get-portfolio-feedback';
import { LocationButtonType } from '../../types/sidebar-Info-types';
import FeedbackContents from '../accordion-list/feedback-contents';
import { SelectedPageContext } from '../context/selected-page/selected-page-context';
import { SidebarContext } from '../context/sidebar/sidebar-context';
import { PageLocationButton } from '../custom-buttons/page-location-button';
import { ProjectTitleButton } from '../custom-buttons/project-title-button';
import FeedbackPageNavigator from '../sidebar/feedback-page-navigator/feedback-page-navigator';

interface FeedbackSidebarProps {
  projectEvaluation: ProjectEvaluationType[];
}

function FeedbackSidebar({ projectEvaluation }: FeedbackSidebarProps) {
  const { isSidebarOpen } = useContext(SidebarContext);
  const { selectedPage, setSelectedPage } = useContext(SelectedPageContext);
  const [currentOpenedTrigger, setCurrentOpenedTrigger] = useState<string[]>([]);

  const handleTriggerButton = (triggerTitle: string) => {
    setCurrentOpenedTrigger((prev) =>
      prev.includes(triggerTitle)
        ? prev.filter((title) => title !== triggerTitle)
        : [...prev, triggerTitle],
    );
  };

  const handleContentButton = (page: string) => {
    setSelectedPage(page);
    scrollToSection(`feedback-${page}`);
  };

  return (
    <FeedbackPageNavigator>
      <AccordionList type="multiple" orientation="vertical">
        <FeedbackContents
          dataList={projectEvaluation}
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
          renderContentButton={(type, value, buttonIndex) => (
            <PageLocationButton
              isSidebarOpen={isSidebarOpen}
              isSelected={selectedPage === value}
              buttonIndex={buttonIndex}
              onClick={() => handleContentButton(value)}
            >
              {buttonFormatByButtonType(type, value)}
            </PageLocationButton>
          )}
        />
      </AccordionList>
    </FeedbackPageNavigator>
  );
}

export default FeedbackSidebar;

const buttonFormatByButtonType = (type: LocationButtonType, value: string) => {
  if (type === 'overallEvaluation') {
    return value;
  }
  if (type === 'projectEvaluation') {
    return `프로젝트 평가`;
  }
  if (type === 'singlePage') {
    return `${value}P`;
  }
};
