import { Dispatch, ReactNode } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import * as styles from './left-slide-panel-toggle.styles';

interface SidebarProps {
  children: ReactNode;
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
  SidebarTrigger: ReactNode;
  newTaskButton?: ReactNode;
  title: ReactNode;
}

function LeftSlidePanelToggle({
  children,
  isSidebarOpen,
  setIsSidebarOpen,
  SidebarTrigger,
  newTaskButton,
  title,
}: SidebarProps) {
  return (
    <Dialog.Root modal={false} open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
      <div css={styles.container(isSidebarOpen)}>
        <div css={styles.sidebarTopSection}>
          CRITX
          <div>
            {newTaskButton}
            <Dialog.Trigger asChild>{SidebarTrigger}</Dialog.Trigger>
          </div>
        </div>

        <Dialog.Content
          onInteractOutside={(e) => e.preventDefault()}
          onPointerDownOutside={(e) => e.preventDefault()}
          forceMount // display: none 방지
        >
          <Dialog.Description aria-describedby={undefined} />
          <Dialog.Title css={styles.title} asChild>
            {title}
          </Dialog.Title>
          {children}
        </Dialog.Content>
      </div>
      <div css={styles.sidebarPlaceholder(isSidebarOpen)} />
    </Dialog.Root>
  );
}

export default LeftSlidePanelToggle;
