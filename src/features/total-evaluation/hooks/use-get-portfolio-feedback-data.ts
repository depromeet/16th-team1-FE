import { useParams } from 'react-router';

import { useGetPortfolioFeedback } from '@/features/feedback/services/use-get-portfolio-feedback';

export const useGetPortfolioFeedbackData = () => {
  const { feedbackId } = useParams();

  const { data } = useGetPortfolioFeedback({ feedbackId: feedbackId as string });

  // pageNumber형식에서 숫자만 추출
  const transformedPageNumberData = {
    ...data,
    result: {
      ...data.result,
      feedback: {
        ...data.result.feedback,
        projectEvaluation: data.result.feedback.projectEvaluation.map((project) => ({
          ...project,
          feedbackPerPage: project.feedbackPerPage.map((page) => ({
            ...page,
            pageNumber: page.pageNumber.split('.')[0],
          })),
        })),
      },
    },
  };

  return {
    ...transformedPageNumberData.result.feedback,
  };
};
