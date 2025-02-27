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
  renderTriggerButton?: RenderAccordionTriggerButtonType;
  renderContentButton?: RenderAccordionContentButtonType;
}

function AccordionList({
  dataList,
  type,
  renderTriggerButton,
  renderContentButton,
}: AccordionListProps) {
  return (
    <div>
      <Accordion.Root type={type}>
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
    </div>
  );
}
export default AccordionList;
