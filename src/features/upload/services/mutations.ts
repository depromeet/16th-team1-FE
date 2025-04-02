import { useMutation } from '@tanstack/react-query';

import { postPortfolio } from './post-portfolio';
import { PortfolioRequest } from '../types/portfolio-types';

export const usePostPortfolioMutation = () => {
  return useMutation({
    mutationKey: ['postPortfolio'],
    mutationFn: async ({ file }: PortfolioRequest) => {
      const data = await postPortfolio({ file });

      return data;
    },
  });
};
