import { ReactNode } from 'react';

import * as styles from './section.title.styles';

/** 각 평가 항목별 제목 */
interface SectionTitleProps {
  title: string;
  icon?: ReactNode;
}

export default function SectionTitle({ title, icon }: SectionTitleProps) {
  return (
    <h2 css={styles.sectionTitle}>
      {title}
      {icon && icon}
    </h2>
  );
}
