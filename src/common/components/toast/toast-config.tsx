export type ToastType =
  | 'feedbackPending'
  | 'feedbackError'
  | 'feedbackSuccess'
  | 'getFeedbackFailure';

import { ReactNode } from 'react';

import * as totalEvaluationStyles from '@features/total-evaluation/total-evaluation-page.styles';

import { theme } from '@/assets/styles/theme';
import { BaseButton } from '@/common/components/button/base-button';

import Icon from '../icon/icon';

export const toastConfig: Record<
  ToastType,
  { message: string; duration?: number; icon: ReactNode; iconPosition: 'left' | 'right' }
> = {
  feedbackPending: {
    message: 'AI 분석이 끝났어요!',
    duration: Infinity,
    icon: <Icon name="arrow-up" />,
    iconPosition: 'right',
  },

  feedbackError: {
    message: '로그인에 실패했어요',
    duration: Infinity,
    icon: <Icon name="login-fail" />,
    iconPosition: 'left',
  },
  feedbackSuccess: {
    message: '피드백 보러가기',
    duration: Infinity,
    icon: <Icon name="arrow-right-with-tail" color="#18171D" width={18} />,
    iconPosition: 'right',
  },
  getFeedbackFailure: {
    message: '피드백을 불러올 수 없어요',
    duration: Infinity,
    icon: (
      <BaseButton css={totalEvaluationStyles.getFeedbackFailureButton}>
        <Icon name="loading" width={14} color={theme.colors.RED[400]} />
      </BaseButton>
    ),
    iconPosition: 'right',
  },
};
