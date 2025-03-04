import { useDropzone } from 'react-dropzone';
import { Controller, FieldValues, SubmitErrorHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/common/components/button/Button';
import Icon from '@/common/components/icon/icon';

import * as styles from './file-upload.styles';

const MAX_FILE_SIZE = 1024 * 1024 * 5;

const schema = z.object({
  file: z
    .instanceof(File, { message: '파일을 업로드해주세요' })
    .refine((file) => file?.size <= MAX_FILE_SIZE, `5MB까지 업로드 가능합니다.`)
    .refine((file) => file?.type?.includes('pdf'), 'PDF 파일을 업로드해주세요.'),
});

interface FileUploadProps {
  onSubmit: (data: FieldValues) => unknown;
}

// 파일 업로드용 컴포넌트
export default function FileUpload({ onSubmit }: FileUploadProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const { acceptedFiles, getInputProps, getRootProps, isDragActive, open } = useDropzone({
    noClick: true,
    onDrop: (files) => {
      setValue('file', files[0]);

      handleSubmit(onSubmit, onSubmitError)();
    },
  });

  const onSubmitError: SubmitErrorHandler<FieldValues> = (errors) => {
    console.log('errors', errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
      <Controller
        name="file"
        control={control}
        render={({ field }) => (
          <div {...getRootProps({ css: styles.container })}>
            <input
              {...getInputProps({
                accept: 'application/pdf',
                onChange: (e) => {
                  const { files } = e.target;

                  field.onChange(files?.[0]);

                  handleSubmit(onSubmit, onSubmitError)();
                },
              })}
            />
            <Icon name="add-document" width={50} />

            <div css={styles.description}>
              {isDragActive ? (
                <p>파일 업로드하기</p>
              ) : (
                acceptedFiles.length === 0 && (
                  <p>
                    <strong>PDF를 업로드해주세요.</strong>
                    <wbr /> 최대 50mb까지 가능해요.
                  </p>
                )
              )}

              {!isDragActive && <div>{acceptedFiles?.[0]?.name}</div>}
            </div>

            <Button size="xxLarge" variant="primary" usage="text" onClick={open}>
              PDF 업로드하기
            </Button>
            {errors.file && <p css={styles.errorText}>{errors.file.message?.toString()}</p>}
          </div>
        )}
      />
    </form>
  );
}
