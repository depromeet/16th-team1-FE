import { AxiosProgressEvent } from 'axios';

import { axiosInstance } from '@/common/services/service-config';
import type { Response } from '@/common/types/response';

import { PortfolioRequest, PortfolioResponse } from '../types/portfolio-types';

export const postPortfolio = async ({
  file,
  onUploadProgress,
  onDownloadProgress,
}: PortfolioRequest & {
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
  onDownloadProgress?: (progressEvent: AxiosProgressEvent) => void;
}) => {
  const { data } = await axiosInstance.post<Response<PortfolioResponse>>(
    '/api/v1/files/portfolio',
    {
      file,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress,
      onDownloadProgress,
    },
  );

  return data;
};
