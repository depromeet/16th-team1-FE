import { Dispatch, ReactNode } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import * as styles from './left-slide-panel-toggle.styles';

export interface LeftSlidePanelToggleProps {
  children: ReactNode;
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
  openButton: ReactNode;
  closeButton: ReactNode;
  additionalButton?: ReactNode;
  icon: ReactNode;
}

function LeftSlidePanelToggle({
  children,
  isSidebarOpen,
  setIsSidebarOpen,
  openButton,
  closeButton,
  additionalButton,
  icon,
}: LeftSlidePanelToggleProps) {
  return (
    <Dialog.Root modal={false} open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
      <aside css={styles.container(isSidebarOpen)} aria-hidden={!isSidebarOpen}>
        <header css={styles.sidebarTopSection}>
          {icon}
          <nav css={styles.controlButtons}>
            {additionalButton}
            <Dialog.Trigger asChild>{closeButton}</Dialog.Trigger>
          </nav>
        </header>

        <Dialog.Content
          onInteractOutside={(e) => e.preventDefault()}
          onPointerDownOutside={(e) => e.preventDefault()}
          forceMount // display: none 방지
        >
          <Dialog.Description aria-describedby={undefined} />

          <VisuallyHidden asChild>
            <Dialog.Title>피드백 사이드바</Dialog.Title>
          </VisuallyHidden>

          {children}
        </Dialog.Content>
      </aside>
      <section css={styles.sidebarPlaceholder(isSidebarOpen)} aria-hidden={isSidebarOpen}>
        {!isSidebarOpen && openButton}
      </section>
    </Dialog.Root>
  );
}

export default LeftSlidePanelToggle;
