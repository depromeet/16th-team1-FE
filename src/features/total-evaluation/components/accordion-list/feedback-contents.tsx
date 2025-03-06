import * as Accordion from '@radix-ui/react-accordion';

import {
  RenderAccordionContentButtonType,
  RenderAccordionTriggerButtonType,
} from '../../types/sidebar-Info-types';

import * as styles from './feedback-contents.styles';

type EvalutationDataType = {
  projectTitle: string;
  feedbackPages: string[];
};

interface AccordionItemProps {
  dataList: EvalutationDataType[];
  renderTriggerButton: RenderAccordionTriggerButtonType;
  renderContentButton: RenderAccordionContentButtonType;
}

function FeedbackContents({
  dataList,
  renderContentButton,
  renderTriggerButton,
}: AccordionItemProps) {
  return dataList.map(({ projectTitle, feedbackPages }) => (
    <Accordion.Item key={projectTitle} value={projectTitle} css={styles.container}>
      <Accordion.Header>
        <Accordion.Trigger asChild>{renderTriggerButton(projectTitle)}</Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content css={styles.defaultAnimation}>
        <ul css={styles.wrapper} aria-label={`${projectTitle} 피드백 페이지 목록`}>
          {feedbackPages.map((page, buttonIndex) => (
            <li key={page} role="listitem">
              {renderContentButton(page, buttonIndex)}
            </li>
          ))}
        </ul>
      </Accordion.Content>
    </Accordion.Item>
  ));
}

export default FeedbackContents;
