import { ReactNode } from 'react';

import * as Accordion from '@radix-ui/react-accordion';

export type AccordionItemsType = {
  accordionTrigger: string;
  accordionContents: string[];
};

interface AccordionListProps {
  type: 'multiple' | 'single';
  orientation: 'vertical' | 'horizontal';
  children: ReactNode;
}

function AccordionList({ type, orientation, children }: AccordionListProps) {
  return (
    <Accordion.Root type={type} orientation={orientation}>
      {children}
    </Accordion.Root>
  );
}
export default AccordionList;
