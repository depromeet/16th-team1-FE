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
  renderTriggerButton?: RenderAccordionTriggerButtonType;
  renderContentButton?: RenderAccordionContentButtonType;
}

function FeedbackContents({
  dataList,
  renderContentButton,
  renderTriggerButton,
}: AccordionItemProps) {
  return dataList.map(({ projectTitle, feedbackPages }) => (
    <Accordion.Item key={projectTitle} value={projectTitle} css={styles.container}>
      <Accordion.Header>
        <Accordion.Trigger asChild>
          {typeof renderTriggerButton === 'function' && renderTriggerButton(projectTitle)}
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content css={[styles.content, styles.defaultAnimation]}>
        <div css={styles.wrapper}>
          {feedbackPages.map((page, buttonIndex) => (
            <div key={page}>
              {typeof renderContentButton === 'function' && renderContentButton(page, buttonIndex)}
            </div>
          ))}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  ));
}

export default FeedbackContents;
