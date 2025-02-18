import { ReactNode } from 'react';

import * as Accordion from '@radix-ui/react-accordion';

import SingleAccordionItem from './single-accordion-item';

import * as styles from './accordion-list.styles';

export type SingleSingleAccordionItemType = { menu: string; subMenus: string[] };

interface AccordionListProps {
  currentOpenedTrigger: string[];
  sidebarListData: SingleSingleAccordionItemType[];
  type: 'multiple' | 'single';
  renderTrigger?: (menu: string) => ReactNode;
  renderContent?: (submenu: string) => ReactNode;
}

function AccordionList({
  currentOpenedTrigger,
  sidebarListData,
  type,
  renderTrigger,
  renderContent,
}: AccordionListProps) {
  return (
    <div css={styles.container}>
      <Accordion.Root type={type}>
        {sidebarListData.map(({ menu, subMenus }) => {
          return (
            <SingleAccordionItem
              key={menu}
              menu={menu}
              subMenus={subMenus}
              renderContent={renderContent}
              renderTrigger={renderTrigger}
              currentOpenedTrigger={currentOpenedTrigger}
            />
          );
        })}
      </Accordion.Root>
    </div>
  );
}
export default AccordionList;
