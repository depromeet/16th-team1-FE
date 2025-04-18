import { useEffect, useState } from 'react';
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
    case 'ONLY_DESIGNER_PORTFOLIO':
      return 'onlyDesignerPortfolioAllowed';
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

  useEffect(() => {
    if (toastType) {
      setToastOpen(true);
    } else {
      setToastOpen(false);
    }
  }, [toastType]);

  return {
    toastType,
    toastOpen,
    setToastOpen,
    navigateTotalEvaluationPage,
  };
};
