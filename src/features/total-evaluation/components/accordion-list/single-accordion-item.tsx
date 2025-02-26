import * as Accordion from '@radix-ui/react-accordion';

import { RenderContentType, RenderTriggerType } from '../../types/sidebar-Info-types';

import * as styles from './single-accordion-item.styles';

interface SingleAccordionItemProps {
  accordionTrigger: string;
  accordionContents: string[];
  renderTrigger?: RenderTriggerType;
  renderContent?: RenderContentType;
}

function SingleAccordionItem({
  accordionTrigger,
  accordionContents,
  renderContent,
  renderTrigger,
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
            (currentContent, buttonIndex) =>
              typeof renderContent === 'function' && renderContent(currentContent, buttonIndex),
          )}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export default SingleAccordionItem;
