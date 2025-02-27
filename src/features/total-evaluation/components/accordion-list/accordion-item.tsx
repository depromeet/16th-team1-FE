import * as Accordion from '@radix-ui/react-accordion';

import {
  RenderAccordionContentButtonType,
  RenderAccordionTriggerButtonType,
} from '../../types/sidebar-Info-types';

import * as styles from './accordion-item.styles';

interface AccordionItemProps {
  accordionTrigger: string;
  accordionContents: string[];
  renderTriggerButton?: RenderAccordionTriggerButtonType;
  renderContentButton?: RenderAccordionContentButtonType;
}

function AccordionItem({
  accordionTrigger,
  accordionContents,
  renderContentButton,
  renderTriggerButton,
}: AccordionItemProps) {
  return (
    <Accordion.Item key={accordionTrigger} value={accordionTrigger} css={styles.container}>
      <Accordion.Header>
        <Accordion.Trigger asChild>
          {typeof renderTriggerButton === 'function' && renderTriggerButton(accordionTrigger)}
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content css={styles.accordionContent}>
        <div css={styles.wrapper}>
          {accordionContents.map(
            (currentContent, buttonIndex) =>
              typeof renderContentButton === 'function' &&
              renderContentButton(currentContent, buttonIndex),
          )}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export default AccordionItem;
