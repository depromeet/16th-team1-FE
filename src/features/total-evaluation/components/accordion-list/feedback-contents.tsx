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
      <Accordion.Item
        key="포트폴리오 종합 평가"
        value="포트폴리오 종합 평가"
        css={styles.container}
      >
        <Accordion.Header>
          <Accordion.Trigger asChild>
            {renderTriggerButton('포트폴리오 종합 평가')}
          </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Content css={styles.defaultAnimation}>
          <ul css={styles.wrapper} aria-label="포트폴리오 종합 평가">
            <li role="listitem">{renderContentButton('overallEvaluation', '종합 평가 요약', 0)}</li>
          </ul>
        </Accordion.Content>
      </Accordion.Item>

      {dataList.map(({ projectName, feedbackPerPage }) => (
        <Accordion.Item key={projectName} value={projectName} css={styles.container}>
          <Accordion.Header>
            <Accordion.Trigger asChild>{renderTriggerButton(projectName)}</Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content css={styles.defaultAnimation}>
            <ul css={styles.wrapper} aria-label={`${projectName} 피드백 페이지 목록`}>
              <li role="listitem">
                {renderContentButton('processEvaluation', `${projectName}-프로세스 평가`, 0)}
              </li>
              {feedbackPerPage.map(({ pageNumber: locationInfo }, index) => (
                <li key={locationInfo} role="listitem">
                  {renderContentButton('singlePage', locationInfo, index + 1)}
                </li>
              ))}
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </>
  );
}

export default FeedbackContents;
