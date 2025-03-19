import { useSuspenseQuery } from '@tanstack/react-query';

import { axiosInstance } from '@/common/services/service-config';

export type FeedbackContentType =
  | 'TRANSLATION_OR_AWKWARD'
  | 'LENGTH_OR_READABILITY'
  | 'READABILITY_IMPROVEMENT'
  | 'LOGICAL_LEAP'
  | 'REDUNDANCY_OR_CLARITY';

export type ProjectProcessType = 'GOOD' | 'SOSO' | 'BAD';

interface OverallContentType {
  score: number;
  review: string;
}

interface ListContentType {
  title: string;
  content: string[];
}

export interface OverallEvaluationType {
  summary: string;
  jobFit: OverallContentType;
  logicalThinking: OverallContentType;
  writingClarity: OverallContentType;
  layoutReadability: OverallContentType;
  strengths: ListContentType[];
  improvements: ListContentType[];
}

export interface FeedbackPerPageType {
  pageNumber: string;
  contents: [
    {
      type: FeedbackContentType;
      title: string;
      feedbackContentDetailList: [
        {
          afterEdit: string;
          beforeEdit: string;
        },
      ];
    },
  ];
  imageUrl: string;
}

export interface ProjectEvaluationType {
  projectName: string;
  process: ProjectProcessType[];
  processReview: string;
  imageUrl: string;
  positiveFeedback: ListContentType[];
  negativeFeedback: ListContentType[];
  feedbackPerPage: FeedbackPerPageType[];
  projectSummary: string;
}

interface AdditionalChatType {
  mine: boolean;
  content: string;
}

interface UseGetPortfolioFeedbackResponse {
  result: {
    createdAt: null;
    updatedAt: null;
    deletedAt: null;
    id: string;
    userId: string;
    portfolioId: string;
    overallEvaluation: OverallEvaluationType;
    additionalChat: AdditionalChatType[];
    projectEvaluation: ProjectEvaluationType[];
  };
}

interface UseGetPortfolioFeedbackParams {
  feedbackId: string;
}

export const useGetPortfolioFeedback = ({ feedbackId }: UseGetPortfolioFeedbackParams) => {
  const endPoint = '/api/v1/feedback';
  const queryFn = () =>
    axiosInstance.get(endPoint, { params: { feedbackId } }).then((res) => res.data);

  return useSuspenseQuery<UseGetPortfolioFeedbackResponse>({
    queryKey: [endPoint, feedbackId],
    queryFn,
  });
};
