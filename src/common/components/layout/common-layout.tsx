import { Outlet } from 'react-router';

import { PageLabelKey } from '@/common/constants/path';
import { useHederContents } from '@/common/hooks/use-heder-contents';

import HeaderNavigationLayout from './header-navigation/header-navigation-layout';

import * as styles from './common-layout.styles';

interface CommonLayoutProps {
  isHeader: boolean;
  pageLabel: PageLabelKey;
}

function CommonLayout({ isHeader, pageLabel }: CommonLayoutProps) {
  const { left, middle, right } = useHederContents(pageLabel);

  return (
    <div css={styles.container(pageLabel)}>
      {isHeader && <HeaderNavigationLayout left={left} middle={middle} right={right} />}
      <Outlet />
    </div>
  );
}

export default CommonLayout;
