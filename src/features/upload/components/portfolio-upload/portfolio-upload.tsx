import { setLocalStorage } from '@/common/utils/storage';
import { useGetStartFeedback } from '@/features/feedback/services/use-get-start-feedback';
import { useFeedbackStore } from '@/store/feedback';

import { usePostPortfolioMutation } from '../../services/mutations';
import { useGetRemainingCountQuery } from '../../services/queries';
import FileUpload from '../file-upload/file-upload';

export default function PortfolioUpload() {
  const { mutateAsync: postPortfolio } = usePostPortfolioMutation();
  const { data: remainingCount } = useGetRemainingCountQuery();
  const { mutateAsync: startFeedback } = useGetStartFeedback();
  const { changeState } = useFeedbackStore();

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
              onSuccess: async (data) => {
                const { id } = data.result;

                await startFeedback(id);

                changeState('PENDING', id);
                setLocalStorage('feedbackId', id);
              },
              onError: () => {
                changeState('ERROR');
              },
            },
          );
        } catch (error) {
          // TODO: 업로드 실패 시 액션
          if (error instanceof Error) {
            changeState('ERROR');
          }
        }
      }}
    />
  );
}
