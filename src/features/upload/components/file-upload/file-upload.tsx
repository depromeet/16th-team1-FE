import { useDropzone } from 'react-dropzone';
import { Controller, FieldValues, SubmitErrorHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import Icon from '@/common/components/icon/icon';

import FileUploadButton from './file-upload-button';

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

            <FileUploadButton type="button" onClick={open}>
              PDF 업로드하기
            </FileUploadButton>
          </div>
        )}
      />
      {errors.file && <div css={styles.errorText}>{errors.file.message?.toString()}</div>}
    </form>
  );
}

function PlugSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.318 10.8H13.318V3.79998C13.318 3.48172 13.1916 3.17649 12.9665 2.95145C12.7415 2.7264 12.4363 2.59998 12.118 2.59998C11.7998 2.59998 11.4945 2.7264 11.2695 2.95145C11.0444 3.17649 10.918 3.48172 10.918 3.79998V10.8H3.91802C3.59976 10.8 3.29453 10.9264 3.06949 11.1514C2.84445 11.3765 2.71802 11.6817 2.71802 12C2.71802 12.3182 2.84445 12.6235 3.06949 12.8485C3.29453 13.0735 3.59976 13.2 3.91802 13.2H10.918V20.2C10.918 20.5182 11.0444 20.8235 11.2695 21.0485C11.4945 21.2735 11.7998 21.4 12.118 21.4C12.4363 21.4 12.7415 21.2735 12.9665 21.0485C13.1916 20.8235 13.318 20.5182 13.318 20.2V13.2H20.318C20.6363 13.2 20.9415 13.0735 21.1665 12.8485C21.3916 12.6235 21.518 12.3182 21.518 12C21.518 11.6817 21.3916 11.3765 21.1665 11.1514C20.9415 10.9264 20.6363 10.8 20.318 10.8Z"
        fill="#8B95A1"
      />
    </svg>
  );
}
