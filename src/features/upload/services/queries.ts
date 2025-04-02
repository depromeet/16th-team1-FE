import { useQuery } from '@tanstack/react-query';

import { getRemainingCount } from './get-remaining-count';

export const useGetRemainingCountQuery = () => {
  return useQuery({
    queryKey: ['getRemainingCount'],
    queryFn: async () => {
      const data = await getRemainingCount();

      return data;
    },
  });
};
