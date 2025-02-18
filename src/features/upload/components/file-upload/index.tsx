import { InputHTMLAttributes, useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';

import { Button } from '../../../../common/components/button/Button';

interface FileUploadProps extends InputHTMLAttributes<HTMLInputElement> {
  maxFiles?: number;
  minSize?: number;
  maxSize?: number;
  onFilesChange?: (files: File[]) => unknown;
}

export default function FileUpload({
  maxFiles,
  onFilesChange,
  minSize,
  maxSize,
  ...props
}: FileUploadProps) {
  const [error, setError] = useState('');
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const onDrop = (files: File[]) => {
    const isOverSizeLimit = maxSize && files.some((file) => file.size > maxSize);
    const isUnderSizeLimit = minSize && files.some((file) => file.size < minSize);
    const isOverFileCountLimit = maxFiles && files.length > maxFiles;
    const hasError = isOverSizeLimit || isUnderSizeLimit || isOverFileCountLimit;

    if (isOverSizeLimit) {
      setError(`${maxSize / 1024 ** 2}MB 이하의 파일을 업로드해주세요`);
    }
    if (isUnderSizeLimit) {
      setError(`${minSize / 1024 ** 2}MB 이하의 파일을 업로드해주세요`);
    }
    if (isOverFileCountLimit) {
      setError(`${maxFiles}개 이하의 파일을 업로드해주세요`);
    }
    if (!hasError) {
      setFiles(files);
      onFilesChange?.(files);
    }
  };

  const { getInputProps, getRootProps, isDragActive, open } = useDropzone({
    onDrop,
    noClick: true,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps({ ...props })} />

      <Button onClick={open}>파일 업로드</Button>

      {isDragActive ? (
        <p>파일을 놓아주세요</p>
      ) : (
        files.length === 0 && <p>또는 드래그 해서 업로드</p>
      )}

      <div>
        {files.map((file) => (
          <div key={file.path}>{file.name}</div>
        ))}
      </div>

      {error && <div>{error}</div>}
    </div>
  );
}
FileUpload.displayName = 'FileUpload';
