export type ToastType =
  | 'aiCompleteLarge'
  | 'aiCompleteSmall'
  | 'loginFailure'
  | 'pdfSubmit'
  | 'getFeedbackFailure';

import { ReactNode } from 'react';

import Icon from '../icon/icon';

export const toastConfig: Record<
  ToastType,
  { message: string; duration?: number; icon: ReactNode; iconPosition: 'left' | 'right' }
> = {
  aiCompleteLarge: {
    message: 'AI 분석이 끝났어요!',
    duration: Infinity,
    icon: <Icon name="arrow-up" />,
    iconPosition: 'right',
  },
  aiCompleteSmall: {
    message: 'AI 분석이 끝났어요!',
    duration: 3000,
    icon: <Icon name="arrow-right-with-tail" />,
    iconPosition: 'right',
  },
  loginFailure: {
    message: '로그인에 실패했어요',
    duration: 3000,
    icon: <Icon name="login-fail" />,
    iconPosition: 'left',
  },
  pdfSubmit: {
    message: 'PDF 제출이 완료됐어요',
    duration: 3000,
    icon: <Icon name="pdf-submit-success" />,
    iconPosition: 'left',
  },
  getFeedbackFailure: {
    message: '피드백을 불러올 수 없어요',
    duration: Infinity,
    icon: <Icon name="loading" />,
    iconPosition: 'right',
  },
};
