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
