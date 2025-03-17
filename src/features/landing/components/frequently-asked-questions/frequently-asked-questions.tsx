import { useInView } from 'react-intersection-observer';

import { css } from '@emotion/react';
import * as Accordion from '@radix-ui/react-accordion';

import Icon from '@/common/components/icon/icon';

import { faqData } from '../../common/data';

import * as styles from './frequently-asked-questions.styles';

export default function FAQ() {
  const { ref: FAQTitleRef, inView: FAQTitleInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: FAQRef, inView: FAQInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    delay: FAQTitleInView ? 0.2 : 9999,
  });

  return (
    <div css={styles.FAQWrapper}>
      <p ref={FAQTitleRef} css={styles.title(FAQTitleInView)}>
        자주 묻는 질문
      </p>
      <Accordion.Root type="multiple" ref={FAQRef} css={styles.accordionRoot(FAQInView)}>
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
    </div>
  );
}
