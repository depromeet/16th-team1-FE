import { ReactNode } from 'react';

import * as Accordion from '@radix-ui/react-accordion';

import SingleAccordionItem from '@/features/total-evaluation/components/accordion-list/single-accordion-item';

export type SingleSingleAccordionItemType = {
  accordionTrigger: string;
  accordionContents: string[];
};

interface AccordionListProps {
  isSidebarOpen: boolean;
  currentOpenedTrigger: string[];
  currentSelectedContent: string | null;
  sidebarListData: SingleSingleAccordionItemType[];
  type: 'multiple' | 'single';
  renderTrigger?: (accordionTrigger: string) => ReactNode;
  renderContent?: (submenu: string) => ReactNode;
}

function AccordionList({
  isSidebarOpen,
  currentOpenedTrigger,
  currentSelectedContent,
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
              isSidebarOpen={isSidebarOpen}
              accordionTrigger={accordionTrigger}
              accordionContents={accordionContents}
              renderContent={renderContent}
              renderTrigger={renderTrigger}
              currentOpenedTrigger={currentOpenedTrigger}
              currentSelectedContent={currentSelectedContent}
            />
          );
        })}
      </Accordion.Root>
    </div>
  );
}
export default AccordionList;
