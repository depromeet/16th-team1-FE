import { Dispatch, ReactNode } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import * as styles from './left-slide-panel-toggle.styles';

interface SidebarProps {
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
}: SidebarProps) {
  return (
    <Dialog.Root modal={false} open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
      <div css={styles.container(isSidebarOpen)}>
        <div css={styles.sidebarTopSection}>
          {icon}
          <div css={styles.controlButtons}>
            {additionalButton}
            <Dialog.Trigger asChild>{closeButton}</Dialog.Trigger>
          </div>
        </div>

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
      </div>
      <div css={styles.sidebarPlaceholder(isSidebarOpen)}>{openButton}</div>
    </Dialog.Root>
  );
}

export default LeftSlidePanelToggle;
