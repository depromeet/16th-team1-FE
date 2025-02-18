import { Dispatch, ReactNode } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import * as styles from './left-slide-panel-toggle.styles';

interface SidebarProps {
  children: ReactNode;
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
  trigger: ReactNode;
  title: ReactNode;
}

function LeftSlidePanelToggle({
  children,
  isSidebarOpen,
  setIsSidebarOpen,
  trigger,
  title,
}: SidebarProps) {
  return (
    <Dialog.Root modal={false} open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Content
        onInteractOutside={(e) => e.preventDefault()}
        onPointerDownOutside={(e) => e.preventDefault()}
        css={styles.content(isSidebarOpen)}
        forceMount // display: none 방지
      >
        <Dialog.Description aria-describedby={undefined} />
        <Dialog.Title asChild>{title}</Dialog.Title>
        {children}
      </Dialog.Content>
      <div css={styles.sidebarPlaceholder(isSidebarOpen)} />
    </Dialog.Root>
  );
}

export default LeftSlidePanelToggle;
