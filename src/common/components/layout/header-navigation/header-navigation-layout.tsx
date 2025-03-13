import { ReactNode } from 'react';

import { PageLabelKey } from '@/common/constants/path';

import * as styles from './header-navigation-layout.styles';

interface HeaderNavigationLayoutProps {
  left?: ReactNode;
  middle?: ReactNode;
  right?: ReactNode;
  pageLabel: PageLabelKey;
}

function HeaderNavigationLayout({ left, middle, right, pageLabel }: HeaderNavigationLayoutProps) {
  return (
    <div css={styles.container(pageLabel)}>
      <div css={styles.leftSection}>{left}</div>
      <div css={styles.middleSection}>{middle}</div>
      <div css={styles.rightSection}>{right}</div>
    </div>
  );
}

export default HeaderNavigationLayout;
