import { useState } from 'react';

import { setLocalStorage } from '@/common/utils/storage';
import { useGetStartFeedback } from '@/features/feedback/services/use-get-start-feedback';
import { useFeedbackStore } from '@/store/feedback';

import {
  LAUNCHING_DAY_TMP_ACCESS_ERROR_MESSAGE,
  usePostPortfolioMutation,
} from '../../services/mutations';
import { useGetRemainingCountQuery } from '../../services/queries';
import FileUpload from '../file-upload/file-upload';

const IS_TMP_LAUNCHING_DAY_HANDLE_ERROR = (error: unknown) => {
  return error instanceof Error && error.message === LAUNCHING_DAY_TMP_ACCESS_ERROR_MESSAGE;
};

export default function PortfolioUpload() {
  const { mutateAsync: postPortfolio, isPending: isPostPortfolioPending } =
    usePostPortfolioMutation();
  const { data: remainingCount } = useGetRemainingCountQuery();
  const { mutateAsync: startFeedback, isPending: isStartFeedbackPending } = useGetStartFeedback();
  const { changeState } = useFeedbackStore();

  const [progress, setProgress] = useState<number>();

  const isLoading = isPostPortfolioPending || isStartFeedbackPending;

  return (
    <FileUpload
      isLoading={isLoading}
      progress={progress}
      remainCount={remainingCount?.result.remainCount}
      onSubmit={async ({ file }) => {
        try {
          const formData = new FormData();
          formData.append('file', file);

          await postPortfolio(
            {
              file,
              onUploadProgress: ({ loaded, total }) => {
                if (!total) return;
                const percentage = Math.round((loaded / total) * 100); // 업로드 진행률
                setProgress(percentage);
              },
            },
            {
              onSuccess: async (data) => {
                const { id } = data.result;

                const { feedbackId } = await startFeedback(id);

                changeState('PENDING', feedbackId);
                setLocalStorage('feedbackId', feedbackId);
              },
              onError: (error) => {
                if (IS_TMP_LAUNCHING_DAY_HANDLE_ERROR(error)) {
                  throw error;
                }
                changeState('ERROR');
              },
            },
          );
        } catch (error) {
          if (IS_TMP_LAUNCHING_DAY_HANDLE_ERROR(error)) {
            alert(LAUNCHING_DAY_TMP_ACCESS_ERROR_MESSAGE);
          } else if (error instanceof Error) {
            // TODO: 업로드 실패 시 액션
            changeState('ERROR');
          }
        }
      }}
    />
  );
}
