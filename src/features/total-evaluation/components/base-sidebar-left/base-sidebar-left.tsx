import { Dispatch, ReactNode, SetStateAction } from 'react';

import { css } from '@emotion/react';
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { theme } from '@/assets/styles/theme';

import * as styles from './base-sidebar-left.styles';

/** 사이드바 전체 루트 */
interface LeftSidebarRoot {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}
function LeftSidebarRoot({ isSidebarOpen, setIsSidebarOpen, children }: LeftSidebarRoot) {
  return (
    <Dialog.Root modal={false} open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
      {children}
    </Dialog.Root>
  );
}

/** 사이드바 컨테이너. 전체 너비 및 움직임 동작 설정 */
interface LeftSidebarContainerProps {
  children: ReactNode;
  isSidebarOpen: boolean;

  /* 만약 디자인 테마가 정해져 있다면 size,animation,variant는 별도의 테마 값으로 분리해서 받는게 좋아보입니다 */
  size?: {
    width: number;
    gap: number;
    padding: number;
  };
  animation?: {
    duration: number;
    easing: string;
  };
  variant?: {
    backgroundColor: string;
  };

  ariaLabel: string;
  customCss?: ReturnType<typeof css>;
}

function LeftSidebarContainer({
  children,
  isSidebarOpen,
  size = {
    width: 26.4,
    gap: 4.8,
    padding: 1.2,
  },
  animation = {
    duration: 300,
    easing: 'ease',
  },
  variant = {
    backgroundColor: theme.colors.GRAY[1000],
  },
  ariaLabel = 'leftSidebar',
}: LeftSidebarContainerProps) {
  return (
    <aside
      css={styles.container(
        isSidebarOpen,
        size.width,
        size.gap,
        size.padding,
        animation.duration,
        animation.easing,
        variant.backgroundColor,
      )}
      aria-hidden={!isSidebarOpen}
      role="region"
      aria-label={ariaLabel}
    >
      {children}
    </aside>
  );
}

/** 사이드바 트리거 버튼 */
interface LeftSidebarTriggerProps {
  content: ReactNode;
}
function LeftSidebarTrigger({ content }: LeftSidebarTriggerProps) {
  return <Dialog.Trigger asChild>{content}</Dialog.Trigger>;
}

interface LeftSidebarContentProps {
  children: ReactNode;
}
function LeftSidebarContent({ children }: LeftSidebarContentProps) {
  return (
    <Dialog.Content
      onInteractOutside={(e) => e.preventDefault()}
      onPointerDownOutside={(e) => e.preventDefault()}
      forceMount // display: none 방지
    >
      <Dialog.Description aria-describedby={undefined} />

      <VisuallyHidden asChild>
        <Dialog.Title>leftSidebar</Dialog.Title>
      </VisuallyHidden>

      {children}
    </Dialog.Content>
  );
}

/** 사이드바 placeholder 영역 */
interface PlaceHolderContentProps {
  isSidebarOpen: boolean;

  /* 만약 디자인 테마가 정해져 있다면 size는 별도의 테마 값으로 분리해서 받는게 좋아보입니다 */
  size?: {
    width: number;
    closedWidth: number;
  };
  content: ReactNode;
}
function PlaceHolderContent({
  isSidebarOpen,
  size = {
    width: 26.4,
    closedWidth: 6,
  },
  content,
}: PlaceHolderContentProps) {
  return (
    <section
      css={styles.sidebarPlaceholder(isSidebarOpen, size.width, size.closedWidth)}
      aria-hidden={isSidebarOpen}
    >
      {!isSidebarOpen && content}
    </section>
  );
}

{
  /**
   *   사용법
   *   <LeftSidebar>
   *     <LeftSidebar.Container>
   *
   *      {Header는 외부에서 별도로 정의}
   *      <LeftSidebar.Content />
   *
   *     </LeftSidebar.Container>
   *
   *     <LeftSidebar.PlaceHolder />
   *   </LeftSidebar>s
   */
}
export const LeftSidebar = Object.assign(LeftSidebarRoot, {
  Content: LeftSidebarContent,
  Container: LeftSidebarContainer,
  Trigger: LeftSidebarTrigger,
  PlaceHolder: PlaceHolderContent,
});
