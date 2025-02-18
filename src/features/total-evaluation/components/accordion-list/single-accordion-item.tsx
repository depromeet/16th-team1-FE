import { ReactNode } from 'react';

import * as Accordion from '@radix-ui/react-accordion';

import * as styles from './single-accordion-item.styles';

interface SingleAccordionItemProps {
  menu: string;
  subMenus: string[];
  currentOpenedTrigger: string[];
  renderTrigger?: (menu: string) => ReactNode;
  renderContent?: (submenu: string) => ReactNode;
}

function SingleAccordionItem({
  menu,
  subMenus,
  renderContent,
  renderTrigger,
  currentOpenedTrigger,
}: SingleAccordionItemProps) {
  const isCurrentTriggerSelected = currentOpenedTrigger.includes(menu);

  return (
    <Accordion.Item key={menu} value={menu}>
      <Accordion.Header>
        <Accordion.Trigger css={styles.selectedEffect(isCurrentTriggerSelected)} asChild>
          {typeof renderTrigger === 'function' && renderTrigger(menu)}
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content css={styles.accordionContent}>
        {subMenus.map(
          (submenu, index) =>
            typeof renderContent === 'function' && (
              <div css={styles.contentAnimation(index)} key={submenu}>
                {renderContent(submenu)}
              </div>
            ),
        )}
      </Accordion.Content>
    </Accordion.Item>
  );
}

export default SingleAccordionItem;
