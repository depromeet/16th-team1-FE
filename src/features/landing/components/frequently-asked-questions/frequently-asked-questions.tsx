import { css } from '@emotion/react';
import * as Accordion from '@radix-ui/react-accordion';

import Icon from '@/common/components/icon/icon';
import FadeInWrapper from '@/common/components/interaction/fade-in-wrapper';

import { faqData } from '../../common/data';

import * as styles from './frequently-asked-questions.styles';

export default function FAQ() {
  return (
    <div css={styles.FAQWrapper}>
      <FadeInWrapper
        as={'p'}
        intersectionOptions={{ threshold: 0.3, triggerOnce: true }}
        additionalStyles={styles.title()}
      >
        자주 묻는 질문
      </FadeInWrapper>

      <FadeInWrapper intersectionOptions={{ threshold: 0.3, triggerOnce: true }}>
        <Accordion.Root type="multiple" css={styles.accordionRoot}>
          {faqData.map(({ question, answer }) => (
            <Accordion.Item key={question} value={question} css={styles.accordionItem}>
              <Accordion.Header css={styles.accordionHeader}>
                <Accordion.Trigger css={styles.accordionTrigger}>
                  {question}{' '}
                  <div css={styles.icon}>
                    <Icon
                      name="leftArrow"
                      customStyle={css`
                        cursor: pointer;
                      `}
                    />
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content css={styles.accordionContent}>{answer}</Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </FadeInWrapper>
    </div>
  );
}
