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
  return dataList.map(({ projectName, feedbackPerPage }) => (
    <Accordion.Item key={projectName} value={projectName} css={styles.container}>
      <Accordion.Header>
        <Accordion.Trigger asChild>{renderTriggerButton(projectName)}</Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content css={styles.defaultAnimation}>
        <ul css={styles.wrapper} aria-label={`${projectName} 피드백 페이지 목록`}>
          {feedbackPerPage.map(({ pageNumber }, index) => (
            <li key={pageNumber} role="listitem">
              {renderContentButton(pageNumber, index)}
            </li>
          ))}
        </ul>
      </Accordion.Content>
    </Accordion.Item>
  ));
}

export default FeedbackContents;
