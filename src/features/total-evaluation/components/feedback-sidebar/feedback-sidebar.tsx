import { useContext, useMemo, useState } from 'react';

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

/** 포트폴리오 종합 평가 섹션을 사이드바에서도 동일한 포멧으로 사용하기 위해 사용되는 더미 데이터 */
const OVERALL_EVALUATION: ProjectEvaluationType = {
  projectName: '포트폴리오 종합 평가',
  process: ['GOOD'], // 임시 값
  projectSummary: '',
  imageUrl: '',
  positiveFeedback: [{ title: '', content: [''] }],
  negativeFeedback: [{ title: '', content: [''] }],
  feedbackPerPage: [
    {
      pageNumber: '종합 평가 요약',
      contents: [
        {
          type: 'TRANSLATION_OR_AWKWARD', // 임시 값
          beforeEdit: '',
          afterEdit: '',
        },
      ],
      imageUrl: '',
    },
  ],
  processReview: '',
};

interface FeedbackSidebarProps {
  projectEvaluation: ProjectEvaluationType[];
}

function FeedbackSidebar({ projectEvaluation }: FeedbackSidebarProps) {
  const { isSidebarOpen } = useContext(SidebarContext);
  const { selectedPage, setSelectedPage } = useContext(SelectedPageContext);
  const [currentOpenedTrigger, setCurrentOpenedTrigger] = useState<string[]>([]);

  const combinedProjectEvaluation = useMemo(() => {
    return [OVERALL_EVALUATION, ...projectEvaluation];
  }, [projectEvaluation]);

  const handleTriggerButton = (triggerTitle: string) => {
    setCurrentOpenedTrigger((prev) =>
      prev.includes(triggerTitle)
        ? prev.filter((title) => title !== triggerTitle)
        : [...prev, triggerTitle],
    );
  };

  console.log(selectedPage);

  const handleContentButton = (page: string) => {
    setSelectedPage(page);
    scrollToSection(`feedback-${page}`);
  };

  return (
    <FeedbackPageNavigator>
      <AccordionList type="multiple" orientation="vertical">
        <FeedbackContents
          dataList={combinedProjectEvaluation}
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
              {loactionButtonFormat(type, value)}
            </PageLocationButton>
          )}
        />
      </AccordionList>
    </FeedbackPageNavigator>
  );
}

export default FeedbackSidebar;

const loactionButtonFormat = (type: LocationButtonType, value: string) => {
  if (type === 'overallEvaluation') {
    return value;
  }
  if (type === 'processEvaluation') {
    return `프로세스 평가`;
  }
  if (type === 'singlePage') {
    return `${value}P`;
  }
};
