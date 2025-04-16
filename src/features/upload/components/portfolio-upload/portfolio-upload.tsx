import { useState } from 'react';

import { getLocalStorage, setLocalStorage } from '@/common/utils/storage';
import { useGetStartFeedback } from '@/features/feedback/services/use-get-start-feedback';
import { useFeedbackStore } from '@/store/feedback';
import { useAuthStore } from '@/store/user-auth';

import { usePostPortfolioMutation } from '../../services/mutations';
import { useGetRemainingCountQuery } from '../../services/queries';
import FileUpload from '../file-upload/file-upload';

export default function PortfolioUpload() {
  const { userInfo } = useAuthStore();
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

          changeState('IDLE');

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

                const email = userInfo?.email || '';
                const prevFeedbacks = JSON.parse(getLocalStorage('feedbacks') || '{}');
                setLocalStorage(
                  'feedbacks',
                  JSON.stringify({
                    ...prevFeedbacks,
                    [email]: feedbackId,
                  }),
                );
              },
              onError: () => {
                changeState('ERROR');

                setProgress(undefined);
              },
            },
          );
        } catch (error) {
          if (error instanceof Error) {
            // TODO: 업로드 실패 시 액션
            changeState('ERROR');

            setProgress(undefined);
          }
        }
      }}
    />
  );
}
