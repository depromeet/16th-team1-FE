import { ReactNode } from 'react';

import * as Accordion from '@radix-ui/react-accordion';

import * as styles from './single-accordion-item.styles';

interface SingleAccordionItemProps {
  isSidebarOpen: boolean;
  accordionTrigger: string;
  accordionContents: string[];
  currentSelectedContent: string | null;
  renderTrigger?: (accordionTrigger: string) => ReactNode;
  renderContent?: (submenu: string) => ReactNode;
}

function SingleAccordionItem({
  isSidebarOpen,
  accordionTrigger,
  accordionContents,
  renderContent,
  renderTrigger,
  currentSelectedContent,
}: SingleAccordionItemProps) {
  return (
    <Accordion.Item key={accordionTrigger} value={accordionTrigger} css={styles.container}>
      <Accordion.Header>
        <Accordion.Trigger asChild>
          {typeof renderTrigger === 'function' && renderTrigger(accordionTrigger)}
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content css={styles.accordionContent}>
        <div css={styles.wrapper}>
          {accordionContents.map(
            (content, index) =>
              typeof renderContent === 'function' && (
                <div
                  css={styles.basicContentEffect(
                    index,
                    currentSelectedContent === content,
                    isSidebarOpen,
                  )}
                  key={content}
                >
                  {renderContent(content)}
                </div>
              ),
          )}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export default SingleAccordionItem;
