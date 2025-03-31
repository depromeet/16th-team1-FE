import { useSuspenseQuery } from '@tanstack/react-query';

import { axiosInstance } from '@/common/services/service-config';

export interface FeedbackItemType {
  feedbackId: string;
  date: string;
  title: string;
}

interface UseGetFeedbackHistoryResponse {
  result: FeedbackItemType[];
}

export const useGetFeedbackHistory = () => {
  const endPoint = '/api/v1/feedback/recent/feedback';

  return useSuspenseQuery<UseGetFeedbackHistoryResponse>({
    queryKey: [endPoint],
    queryFn: () => axiosInstance.get(endPoint).then((res) => res.data),
  });
};
