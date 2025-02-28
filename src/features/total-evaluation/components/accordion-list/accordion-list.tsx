import * as Accordion from '@radix-ui/react-accordion';

import AccordionItem from './accordion-item';
import {
  RenderAccordionContentButtonType,
  RenderAccordionTriggerButtonType,
} from '../../types/sidebar-Info-types';

export type AccordionItemsType = {
  accordionTrigger: string;
  accordionContents: string[];
};

interface AccordionListProps {
  dataList: AccordionItemsType[];
  type: 'multiple' | 'single';
  orientation: 'vertical' | 'horizontal';
  renderTriggerButton?: RenderAccordionTriggerButtonType;
  renderContentButton?: RenderAccordionContentButtonType;
}

function AccordionList({
  dataList,
  type,
  renderTriggerButton,
  renderContentButton,
  orientation,
}: AccordionListProps) {
  return (
    <Accordion.Root type={type} orientation={orientation}>
      {dataList.map(({ accordionTrigger, accordionContents }) => {
        return (
          <AccordionItem
            key={accordionTrigger}
            accordionTrigger={accordionTrigger}
            accordionContents={accordionContents}
            renderContentButton={renderContentButton}
            renderTriggerButton={renderTriggerButton}
          />
        );
      })}
    </Accordion.Root>
  );
}
export default AccordionList;
