import { SerializedStyles } from '@emotion/react';

import * as styles from './skeleton.styles';

//TODO: 디자인시스템 등록 시 반영
interface SkeletonProps {
  isLoading?: boolean;
  width?: string;
  height?: string;
  additionalStyles?: SerializedStyles;
}

export default function Skeleton({
  isLoading = true,
  width = '100%',
  height = '2.2rem',
  additionalStyles,
}: SkeletonProps) {
  return <div css={[styles.skeleton(isLoading, width, height), additionalStyles]} />;
}
