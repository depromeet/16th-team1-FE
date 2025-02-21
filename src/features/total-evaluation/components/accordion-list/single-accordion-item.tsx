import { ReactNode } from 'react';

import * as Accordion from '@radix-ui/react-accordion';

import * as styles from './single-accordion-item.styles';

interface SingleAccordionItemProps {
  accordionTrigger: string;
  accordionContents: string[];
  currentOpenedTrigger: string[];
  currentSelectedContent: string | null;
  renderTrigger?: (accordionTrigger: string) => ReactNode;
  renderContent?: (submenu: string) => ReactNode;
}

function SingleAccordionItem({
  accordionTrigger,
  accordionContents,
  renderContent,
  renderTrigger,
  currentOpenedTrigger,
  currentSelectedContent,
}: SingleAccordionItemProps) {
  const isCurrentTriggerSelected = currentOpenedTrigger.includes(accordionTrigger);

  return (
    <Accordion.Item key={accordionTrigger} value={accordionTrigger} css={styles.container}>
      <Accordion.Header>
        <Accordion.Trigger css={styles.basicSelectedEffect(isCurrentTriggerSelected)} asChild>
          {typeof renderTrigger === 'function' && renderTrigger(accordionTrigger)}
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content css={styles.accordionContent}>
        {accordionContents.map(
          (content, index) =>
            typeof renderContent === 'function' && (
              <div
                css={styles.basicContentEffect(index, currentSelectedContent === content)}
                key={content}
              >
                {renderContent(content)}
              </div>
            ),
        )}
      </Accordion.Content>
    </Accordion.Item>
  );
}

export default SingleAccordionItem;
