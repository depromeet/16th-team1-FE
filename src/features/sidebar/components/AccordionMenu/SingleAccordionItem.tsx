import { forwardRef } from 'react';

import * as Accordion from '@radix-ui/react-accordion';

import { SingleSingleAccordionItemType } from './AccordionMenu';

const SingleAccordionItem = forwardRef<HTMLDivElement, SingleSingleAccordionItemType>(
  ({ menu, subMenus }, ref) => {
    return (
      <Accordion.Item value={menu} ref={ref}>
        <Accordion.Trigger>{menu}</Accordion.Trigger>
        {subMenus.map((submenu) => (
          <Accordion.Content key={submenu}>{submenu}</Accordion.Content>
        ))}
      </Accordion.Item>
    );
  },
);

SingleAccordionItem.displayName = 'SingleAccordionItem';

export { SingleAccordionItem };
