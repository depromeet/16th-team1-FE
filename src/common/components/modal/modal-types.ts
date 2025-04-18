import { ReactNode } from 'react';

/**
 * 모달 기본 props
 */
export interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}

/**
 * 모달 컨텐츠 props
 */
export interface ModalContentProps extends ModalContentStyleProps {
  children: ReactNode;
}

/**
 * 모달 내부 스타일 관련 props
 */
export interface ModalContentStyleProps {
  width?: string;
  height?: string;
  padding?: string;
  backgroundColor?: string;
  gap?: string;
  zIndex: number;
}
