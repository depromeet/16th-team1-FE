import { axiosInstance } from '@/common/services/service-config';
import type { Response } from '@/common/types/response';

import { PortfolioRequest, PortfolioResponse } from '../types/portfolio-types';

export const postPortfolio = async ({ file }: PortfolioRequest) => {
  const { data } = await axiosInstance.post<Response<PortfolioResponse>>(
    '/api/v1/files/portfolio',
    {
      file,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return data;
};
