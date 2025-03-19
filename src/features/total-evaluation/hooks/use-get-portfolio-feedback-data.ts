import { useParams } from 'react-router';

import { useGetPortfolioFeedback } from '@/features/total-evaluation/services/use-get-portfolio-feedback';

export const useGetPortfolioFeedbackData = () => {
  const { feedbackId } = useParams();

  const { data } = useGetPortfolioFeedback({ feedbackId: feedbackId as string });

  return {
    ...data.result,
  };
};
