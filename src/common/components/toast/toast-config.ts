export type ToastType = 'aiCompleteLarge' | 'aiCompleteSmall' | 'loginFailure' | 'pdfSubmit';

export const toastConfig: Record<
  ToastType,
  { message: string; duration?: number; icon: string; iconPosition: 'left' | 'right' }
> = {
  aiCompleteLarge: {
    message: 'AI 분석이 끝났어요!',
    duration: Infinity,
    icon: 'upArrow',
    iconPosition: 'right',
  },
  aiCompleteSmall: {
    message: 'AI 분석이 끝났어요!',
    duration: 3000,
    icon: 'rightArrow',
    iconPosition: 'right',
  },
  loginFailure: {
    message: '로그인에 실패했어요',
    duration: 3000,
    icon: 'loginFail',
    iconPosition: 'left',
  },
  pdfSubmit: {
    message: 'PDF 제출이 완료됐어요',
    duration: 3000,
    icon: 'pdfSubmitSuccess',
    iconPosition: 'left',
  },
};
