import { ReactNode } from 'react';

import * as Accordion from '@radix-ui/react-accordion';

export type SingleSingleAccordionItemType = { menu: string; subMenus: string[] };

interface AccordionMenuProps {
  sidebarListData: SingleSingleAccordionItemType[];
  type: 'multiple' | 'single';
  renderTrigger?: (menu: string) => ReactNode;
  renderContent?: (submenu: string) => ReactNode;
}

function AccordionMenu({
  sidebarListData,
  type,
  renderTrigger,
  renderContent,
}: AccordionMenuProps) {
  return (
    <Accordion.Root type={type}>
      {sidebarListData.map(({ menu, subMenus }) => {
        return (
          <Accordion.Item key={menu} value={menu}>
            <Accordion.Trigger>
              {typeof renderTrigger === 'function' && renderTrigger(menu)}
              {typeof renderTrigger !== 'function' && <button>{menu}</button>}
            </Accordion.Trigger>
            {subMenus.map((submenu) => (
              <Accordion.Content key={submenu}>
                {typeof renderContent === 'function' && renderContent(submenu)}
                {typeof renderContent !== 'function' && <button>{menu}</button>}
              </Accordion.Content>
            ))}
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}
export default AccordionMenu;
