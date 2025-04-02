import { axiosInstance } from '@/common/services/service-config';

import type { Response } from '@common/types/response';

export const getRemainingCount = async () => {
  const { data } =
    await axiosInstance.get<Response<{ remainCount: number }>>('/api/v1/feedback/remain');

  return data;
};
