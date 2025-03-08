import { ReactNode } from 'react';

import * as styles from './header-navigation-layout.styles';

interface HeaderNavigationLayoutProps {
  left?: ReactNode;
  middle?: ReactNode;
  right?: ReactNode;
}

function HeaderNavigationLayout({ left, middle, right }: HeaderNavigationLayoutProps) {
  return (
    <div css={styles.container}>
      <div css={styles.leftSection}>{left}</div>
      <div css={styles.middleSection}>{middle}</div>
      <div css={styles.rightSection}>{right}</div>
    </div>
  );
}

export default HeaderNavigationLayout;
