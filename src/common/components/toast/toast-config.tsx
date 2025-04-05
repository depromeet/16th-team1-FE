export type ToastType = 'feedbackPending' | 'feedbackError' | 'getFeedbackFailure';

import { ReactNode } from 'react';

import * as totalEvaluationStyles from '@features/total-evaluation/total-evaluation-page.styles';

import { theme } from '@/assets/styles/theme';
import { BaseButton } from '@/common/components/button/base-button';

import Icon from '../icon/icon';

import * as toastStyles from './toast.styles';

export const toastConfig: Record<
  ToastType,
  { message: string; duration?: number; icon: ReactNode; iconPosition: 'left' | 'right' }
> = {
  feedbackPending: {
    message: '피드백이 완료되면 알려드릴게요!',
    duration: Infinity,
    icon: <Icon name="spinner" customStyle={toastStyles.spinnerStyle} />,
    iconPosition: 'left',
  },

  feedbackError: {
    message: '오류가 발생했어요',
    duration: 3000,
    icon: <div css={toastStyles.errorWrapper}>다시 시도</div>,
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
