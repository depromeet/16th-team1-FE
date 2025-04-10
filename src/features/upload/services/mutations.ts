import { useMutation } from '@tanstack/react-query';
import { AxiosProgressEvent } from 'axios';

import { postPortfolio } from './post-portfolio';
import { PortfolioRequest } from '../types/portfolio-types';

export const usePostPortfolioMutation = () => {
  return useMutation({
    mutationKey: ['postPortfolio'],

    mutationFn: async ({
      file,
      onUploadProgress,
    }: PortfolioRequest & {
      onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
    }) => {
      const data = await postPortfolio({ file, onUploadProgress });

      return data;
    },
  });
};
