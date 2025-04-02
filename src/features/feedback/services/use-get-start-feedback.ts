import { useMutation, useQueryClient } from '@tanstack/react-query';

import { axiosInstance } from '@/common/services/service-config';
import { Response } from '@/common/types/response';

export const useGetStartFeedback = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['getStartFeedback'],
    mutationFn: async (fileId: string) => {
      const { data } = await axiosInstance.get<Response<{ feedbackId: string }>>(
        '/api/v1/feedback/start',
        {
          params: { fileId },
        },
      );

      return data.result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getRemainingCount'] });
    },
  });
};
