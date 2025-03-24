import type { Response } from '@/common/types/response';

import { usePostPortfolioMutation } from '../../services/mutations';
import { useGetRemainingCountQuery } from '../../services/queries';
import { PortfolioResponse } from '../../types/portfolio-types';
import FileUpload from '../file-upload/file-upload';

interface PortfolioUploadProps {
  onSuccess?: (data: Response<PortfolioResponse>) => unknown;
  onError?: (error: Error) => unknown;
}

export default function PortfolioUpload({ onSuccess, onError }: PortfolioUploadProps) {
  const { mutateAsync: postPortfolio } = usePostPortfolioMutation();
  const { data: remainingCount } = useGetRemainingCountQuery();

  return (
    <FileUpload
      remainCount={remainingCount?.result.remainCount}
      onSubmit={async ({ file }) => {
        try {
          const formData = new FormData();
          formData.append('file', file);

          await postPortfolio(
            {
              file,
            },
            {
              onSuccess,
              onError,
            },
          );
        } catch (error) {
          // TODO: 업로드 실패 시 액션
          if (error instanceof Error) {
            onError?.(error);
          }
        }
      }}
    />
  );
}
