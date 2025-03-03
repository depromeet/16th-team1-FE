import { ButtonHTMLAttributes, ReactNode } from 'react';

import { BaseButton } from '@/common/components/button/base-button';

import * as styles from './file-upload-button.styles';

interface FileUploadButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function FileUploadButton({ children, ...props }: FileUploadButtonProps) {
  return (
    <BaseButton {...props} css={styles.container}>
      {children}
    </BaseButton>
  );
}
