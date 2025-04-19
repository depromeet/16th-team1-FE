import { useDropzone } from 'react-dropzone';
import { Controller, FieldValues, SubmitErrorHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import Icon from '@/common/components/icon/icon';
import { getValueOrHyphen } from '@/common/utils/get-value-or-hyphen';

import BarChart from '../bar-chart/bar-chart';

import * as styles from './file-upload.styles';

const MAX_FILE_SIZE = 1024 * 1024 * 50;

const schema = z.object({
  file: z
    .instanceof(File, { message: '파일을 업로드해주세요' })
    .refine((file) => file?.size <= MAX_FILE_SIZE, `50MB까지 업로드 가능합니다.`)
    .refine((file) => file?.type?.includes('pdf'), 'PDF 파일을 업로드해주세요.'),
});

interface FileUploadProps {
  onSubmit: (data: FieldValues) => unknown;
  remainCount?: number;
  isLoading?: boolean;
  progress?: number;
}

// 파일 업로드용 컴포넌트
export default function FileUpload({
  onSubmit,
  remainCount,
  isLoading,
  progress,
}: FileUploadProps) {
  const isDisabled = remainCount === 0;

  const { handleSubmit, control, setValue } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const { getInputProps, getRootProps } = useDropzone({
    disabled: isDisabled,
    onDrop: (files) => {
      setValue('file', files[0]);

      handleSubmit(onSubmit, onSubmitError)();
    },
  });

  const onSubmitError: SubmitErrorHandler<FieldValues> = (errors) => {
    console.log('errors', errors);
  };

  return (
    <form css={styles.form(isDisabled)}>
      <Controller
        name="file"
        control={control}
        render={({ field }) => (
          <div {...getRootProps({ css: styles.container })}>
            <input
              {...getInputProps({
                accept: 'application/pdf',
                onChange: (e) => {
                  e.stopPropagation();

                  const { files } = e.target;

                  field.onChange(files?.[0]);

                  handleSubmit(onSubmit, onSubmitError)();
                },
              })}
            />
            <Icon name="folder" width={123} customStyle={styles.folder(isDisabled)} />

            <div css={styles.description}>
              {isDisabled ? (
                <p>이번 달에 사용 가능한 피드백을 모두 받았어요</p>
              ) : isLoading ? (
                'PDF 업로드 중...'
              ) : (
                <p>이번 달 남은 피드백 횟수 {getValueOrHyphen(remainCount)}회</p>
              )}
            </div>
            {progress && progress > 0 && (
              <div css={styles.progress}>
                <BarChart value={progress || 0} />
              </div>
            )}
          </div>
        )}
      />
    </form>
  );
}
