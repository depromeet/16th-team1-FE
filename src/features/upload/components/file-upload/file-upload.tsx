import { useDropzone } from 'react-dropzone';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '../../../../common/components/button/Button';

const MAX_FILE_SIZE = 1024 * 1024 * 5;

const schema = z.object({
  file: z
    .instanceof(File, { message: '파일을 업로드해주세요' })
    .refine((file) => file?.size <= MAX_FILE_SIZE, `5MB까지 업로드 가능합니다.`)
    .refine((file) => file?.type?.includes('pdf'), 'PDF 파일을 업로드해주세요.'),
});

export default function FileUpload({ ...props }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // TODO: PDF 업로드 API 호출
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, (error) => console.log('error', error))}>
      <Controller
        name="file"
        control={control}
        render={({ field }) => <Dropzone {...props} onChange={field.onChange} />}
      />
      {errors.file && <div>{errors.file.message?.toString()}</div>}
      <button type="submit">제출</button>
    </form>
  );
}
FileUpload.displayName = 'FileUpload';

function Dropzone({ onChange }: { onChange?: (...event: unknown[]) => void }) {
  const { acceptedFiles, getInputProps, getRootProps, isDragActive, open } = useDropzone({
    noClick: true,
    maxSize: MAX_FILE_SIZE,
    onDrop: (files) => {
      onChange?.(files[0]);
    },
  });

  return (
    <div {...getRootProps()}>
      <input
        {...getInputProps({
          accept: 'application/pdf',
        })}
      />

      <Button type="button" onClick={open}>
        파일 업로드
      </Button>

      {isDragActive ? (
        <p>파일을 놓아주세요</p>
      ) : (
        acceptedFiles.length === 0 && <p>또는 드래그 해서 업로드</p>
      )}

      {acceptedFiles?.[0]?.name}
    </div>
  );
}
