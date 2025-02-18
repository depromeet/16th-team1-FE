import { ReactNode } from 'react';

import * as Accordion from '@radix-ui/react-accordion';

import SingleAccordionItem from './single-accordion-item';

import * as styles from './accordion-list.styles';

export type SingleSingleAccordionItemType = {
  accordionTrigger: string;
  accordionContents: string[];
};

interface AccordionListProps {
  currentOpenedTrigger: string[];
  currentSelectedContent: string | null;
  sidebarListData: SingleSingleAccordionItemType[];
  type: 'multiple' | 'single';
  renderTrigger?: (accordionTrigger: string) => ReactNode;
  renderContent?: (submenu: string) => ReactNode;
}

function AccordionList({
  currentOpenedTrigger,
  currentSelectedContent,
  sidebarListData,
  type,
  renderTrigger,
  renderContent,
}: AccordionListProps) {
  return (
    <div css={styles.container}>
      <Accordion.Root type={type}>
        {sidebarListData.map(({ accordionTrigger, accordionContents }) => {
          return (
            <SingleAccordionItem
              key={accordionTrigger}
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
