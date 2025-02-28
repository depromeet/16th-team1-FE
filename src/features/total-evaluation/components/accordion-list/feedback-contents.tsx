import { Fragment } from 'react';

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

      <Accordion.Content css={[styles.content, styles.layout, styles.defaultAnimation]}>
        {feedbackPages.map((page, buttonIndex) => (
          <Fragment key={page}>
            {typeof renderContentButton === 'function' && renderContentButton(page, buttonIndex)}
          </Fragment>
        ))}
      </Accordion.Content>
    </Accordion.Item>
  ));
}

export default FeedbackContents;
