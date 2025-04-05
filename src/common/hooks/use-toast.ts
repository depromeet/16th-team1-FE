import { useState } from 'react';
import { useNavigate } from 'react-router';

import { ToastType } from '@/common/components/toast/toast-config';
import { useFeedbackStore, ProcessState } from '@/store/feedback';

const mapProcessStateToToastType = (state: ProcessState): ToastType | null => {
  switch (state) {
    case 'PENDING':
    case 'IN_PROGRESS':
      return 'feedbackPending';
    case 'ERROR':
      return 'feedbackError';
    default:
      return null;
  }
};

export const useToast = () => {
  const navigate = useNavigate();

  const { state, changeState } = useFeedbackStore();

  const [toastOpen, setToastOpen] = useState(true);

  const navigateTotalEvaluationPage = () => {
    if (state === 'ERROR') {
      changeState('IDLE');
      navigate('/upload');
    }
  };

  const toastType = mapProcessStateToToastType(state);

  return {
    toastType,
    toastOpen,
    setToastOpen,
    navigateTotalEvaluationPage,
  };
};
