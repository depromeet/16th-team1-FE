import * as Accordion from '@radix-ui/react-accordion';

import { ProjectEvaluationType } from '../../services/use-get-portfolio-feedback';
import {
  RenderAccordionContentButtonType,
  RenderAccordionTriggerButtonType,
} from '../../types/sidebar-Info-types';

import * as styles from './feedback-contents.styles';

interface AccordionItemProps {
  dataList: ProjectEvaluationType[];
  renderTriggerButton: RenderAccordionTriggerButtonType;
  renderContentButton: RenderAccordionContentButtonType;
}

function FeedbackContents({
  dataList,
  renderContentButton,
  renderTriggerButton,
}: AccordionItemProps) {
  return (
    <>
      {dataList.map(({ projectName, feedbackPerPage }) => (
        <Accordion.Item key={projectName} value={projectName} css={styles.container}>
          <Accordion.Header>
            <Accordion.Trigger asChild>{renderTriggerButton(projectName)}</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content css={styles.defaultAnimation}>
            <ul css={styles.wrapper} aria-label={`${projectName} 피드백 페이지 목록`}>
              {renderFeedbackList(projectName, feedbackPerPage, renderContentButton)}
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </>
  );
}

export default FeedbackContents;

function renderFeedbackList(
  projectName: string,
  feedbackPerPage: ProjectEvaluationType['feedbackPerPage'],
  renderContentButton: RenderAccordionContentButtonType,
) {
  if (projectName === '포트폴리오 종합 평가') {
    return <li role="listitem">{renderContentButton('종합 평가 요약', 0)}</li>;
  }

  return (
    <>
      <li role="listitem">{renderContentButton('프로세스 평가', 0)}</li>
      {feedbackPerPage.map(({ pageNumber }, index) => (
        <li key={pageNumber} role="listitem">
          {renderContentButton(`${pageNumber}P`, index + 1)}
        </li>
      ))}
    </>
  );
}
