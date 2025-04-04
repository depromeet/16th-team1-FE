import { useMutation } from '@tanstack/react-query';

import { useAuthStore } from '@/store/user-auth';

import { postPortfolio } from './post-portfolio';
import { PortfolioRequest } from '../types/portfolio-types';

export const LAUNCHING_DAY_TMP_ACCESS_ERROR_MESSAGE =
  '런칭데이 기간에는 트래픽 조절을 위해 허용된 계정만 이용 가능해요.';

const LAUNCHING_DAY_TMP_ACCESS_USER = [
  'limgabi22@gmail.com',
  'ummdev03@gmail.com',
  'lss3623@hanyang.ac.kr',
  'qq8721443@gmail.com',
  'sunrise9612@gmail.com',
  'su10jin11@khu.ac.kr',
  'ab13696802@gmail.com',
  'hanbyeol1230@gmail.com',
  'suker800@gmail.com',
  'suker80@catholic.ac.kr',
  'dahye8927@gmail.com',
];

export const usePostPortfolioMutation = () => {
  const { email } = useAuthStore().userInfo ?? {};

  return useMutation({
    mutationKey: ['postPortfolio'],
    onMutate: () => {
      if (!LAUNCHING_DAY_TMP_ACCESS_USER.includes(email!))
        throw new Error(LAUNCHING_DAY_TMP_ACCESS_ERROR_MESSAGE);
    },
    mutationFn: async ({ file }: PortfolioRequest) => {
      const data = await postPortfolio({ file });
      return data;
    },
  });
};
