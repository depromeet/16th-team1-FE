import { usePostPortfolioMutation } from '../../services/mutations';
import { useGetRemainingCountQuery } from '../../services/queries';
import FileUpload from '../file-upload/file-upload';

export default function PortfolioUpload() {
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
              onSuccess: (data) => {
                // TODO: 업로드 성공 시 액션
                console.log('success', data);
              },
            },
          );
        } catch (error) {
          // TODO: 업로드 실패 시 액션
          console.log('error', error);
        }
      }}
    />
  );
}
