import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

import { axiosInstance } from '@/common/services/service-config';
import type { Response } from '@/common/types/response';

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
      editPairs: [
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

type Status = 'COMPLETE' | 'IN_PROGRESS' | 'PENDING' | 'ERROR';

interface UseGetPortfolioFeedbackResponse {
  createdAt: null;
  updatedAt: null;
  deletedAt: null;
  id: string;
  userId: string;
  fileId: string;
  title: string;
  overallStatus: Status;
  projectStatus: Status;
  overallEvaluation: OverallEvaluationType;
  additionalChat: AdditionalChatType[];
  projectEvaluation: ProjectEvaluationType[];
}

interface UseGetPortfolioFeedbackParams {
  feedbackId: string;
}

export const useGetPortfolioFeedback = ({ feedbackId }: UseGetPortfolioFeedbackParams) => {
  const endPoint = '/api/v1/feedback';
  const queryFn = () =>
    axiosInstance.get(endPoint, { params: { feedbackId } }).then((res) => res.data);

  return useSuspenseQuery<Response<UseGetPortfolioFeedbackResponse>>({
    queryKey: [endPoint, feedbackId],
    queryFn,
  });
};

export const useGetPortfolioFeedbackForStatus = ({
  feedbackId,
}: Partial<UseGetPortfolioFeedbackParams>) => {
  const endPoint = '/api/v1/feedback';
  const queryFn = () =>
    axiosInstance.get(endPoint, { params: { feedbackId } }).then((res) => res.data);

  return useQuery<Response<UseGetPortfolioFeedbackResponse>>({
    queryKey: [endPoint, feedbackId],
    queryFn,
    enabled: !!feedbackId,
    retry: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
};
