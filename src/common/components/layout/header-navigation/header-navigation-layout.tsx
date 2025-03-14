import { ReactNode } from 'react';

import { PageLabelKey } from '@/common/constants/path';

import * as styles from './header-navigation-layout.styles';

interface HeaderNavigationProps {
  left?: ReactNode;
  middle?: ReactNode;
  right?: ReactNode;
  pageLabel: PageLabelKey;
}

function HeaderNavigation({ left, middle, right, pageLabel }: HeaderNavigationProps) {
  return (
    <>
      <div css={styles.container(pageLabel)}>
        <div css={styles.leftSection}>{left}</div>
        <div css={styles.middleSection}>{middle}</div>
        <div css={styles.rightSection}>{right}</div>
      </div>
      {pageLabel === 'TotalEvaluation' && <div css={styles.placeHolder} />}
    </>
  );
}

export default HeaderNavigation;
