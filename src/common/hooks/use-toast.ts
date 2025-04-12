import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { ToastType } from '@/common/components/toast/toast-config';
import { useFeedbackStore, ProcessState } from '@/store/feedback';
import { useAuthStore } from '@/store/user-auth';

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
  const { isLogin } = useAuthStore();

  const toastType = mapProcessStateToToastType(state);
  const [toastOpen, setToastOpen] = useState(true);

  useEffect(() => {
    if (!isLogin) {
      changeState('IDLE');
    }
  }, [isLogin, changeState]);

  const navigateTotalEvaluationPage = () => {
    if (state === 'ERROR') {
      changeState('IDLE');
      navigate('/upload');
    }
  };

  return {
    toastType,
    toastOpen,
    setToastOpen,
    navigateTotalEvaluationPage,
  };
};
