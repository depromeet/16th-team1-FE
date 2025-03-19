import { useQuery } from '@tanstack/react-query';

import { axiosInstance } from '@/common/services/service-config';

export interface FeedbackItemType {
  feedbackId: string;
  date: string;
  title: string;
}

interface UseGetFeedbackHistoryResponse {
  result: FeedbackItemType[];
}

export const useGetFeedbackHistory = (userId: string) => {
  const endPoint = '/api/v1/feedback/recent/feedback';

  return useQuery<UseGetFeedbackHistoryResponse>({
    queryKey: [endPoint, userId],
    queryFn: () =>
      axiosInstance
        .get(endPoint, {
          params: { userId },
        })
        .then((res) => res.data),
    enabled: !!userId,
  });
};
