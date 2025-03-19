import { SerializedStyles } from '@emotion/react';

import * as styles from './skeleton.styles';

//TODO: 디자인시스템 등록 시 반영
interface SkeletonProps {
  isLoading?: boolean;
  additionalStyles?: SerializedStyles;
}

export default function Skeleton({ isLoading = true, additionalStyles }: SkeletonProps) {
  return <div css={[styles.skeleton(isLoading), additionalStyles]} />;
}
