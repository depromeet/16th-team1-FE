import { useState } from 'react';
import { useNavigate } from 'react-router';

import { ToastType } from '@/common/components/toast/toast-config';
import { useFeedbackStore, ProcessState } from '@/store/feedback';

const mapProcessStateToToastType = (state: ProcessState): ToastType | null => {
  switch (state) {
    case 'PENDING':
    case 'IN_PROGRESS':
      return 'feedbackPending';
    case 'COMPLETE':
      return 'feedbackSuccess';
    case 'ERROR':
      return 'feedbackError';
    default:
      return null;
  }
};

export const useToast = () => {
  const navigate = useNavigate();

  const { state, feedbackId, changeState } = useFeedbackStore();

  const [toastOpen, setToastOpen] = useState(true);

  const navigateTotalEvaluationPage = () => {
    switch (state) {
      case 'ERROR':
        changeState('IDLE');
        navigate('/upload');
        break;

      case 'COMPLETE':
        changeState('IDLE');
        navigate(`/total-evaluation/${feedbackId}`);
        break;

      default:
        break;
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
