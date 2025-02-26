import * as Accordion from '@radix-ui/react-accordion';

import SingleAccordionItem from '@/features/total-evaluation/components/accordion-list/single-accordion-item';

import { RenderContentType, RenderTriggerType } from '../../types/sidebar-Info-types';

export type SingleSingleAccordionItemType = {
  accordionTrigger: string;
  accordionContents: string[];
};

interface AccordionListProps {
  sidebarListData: SingleSingleAccordionItemType[];
  type: 'multiple' | 'single';
  renderTrigger?: RenderTriggerType;
  renderContent?: RenderContentType;
}

function AccordionList({
  sidebarListData,
  type,
  renderTrigger,
  renderContent,
}: AccordionListProps) {
  return (
    <div>
      <Accordion.Root type={type}>
        {sidebarListData.map(({ accordionTrigger, accordionContents }) => {
          return (
            <SingleAccordionItem
              key={accordionTrigger}
              accordionTrigger={accordionTrigger}
              accordionContents={accordionContents}
              renderContent={renderContent}
              renderTrigger={renderTrigger}
            />
          );
        })}
      </Accordion.Root>
    </div>
  );
}
export default AccordionList;
