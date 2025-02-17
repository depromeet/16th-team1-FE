import { ReactNode } from 'react';

import * as Accordion from '@radix-ui/react-accordion';

import * as styles from './accordion-menu.styles';

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
    <div css={styles.container}>
      <Accordion.Root type={type}>
        {sidebarListData.map(({ menu, subMenus }) => {
          return (
            <Accordion.Item key={menu} value={menu}>
              <Accordion.Trigger css={styles.trigger} asChild>
                {typeof renderTrigger === 'function' && renderTrigger(menu)}
              </Accordion.Trigger>

              {subMenus.map((submenu) => (
                <Accordion.Content key={submenu} css={styles.accordionContent}>
                  {typeof renderContent === 'function' && renderContent(submenu)}
                </Accordion.Content>
              ))}
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </div>
  );
}
export default AccordionMenu;
