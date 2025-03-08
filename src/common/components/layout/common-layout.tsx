import { Outlet } from 'react-router';

import { PageUrlType } from '@/common/constants/path';
import { generateHeaderContents } from '@/common/utils/generateHederContents';

import HeaderNavigationLayout from '../header-navigation/header-navigation-layout';

import * as styles from './common-layout.styles';

interface CommonLayoutProps {
  isHeader: boolean;
  pageUrl: PageUrlType;
}

function CommonLayout({ isHeader, pageUrl }: CommonLayoutProps) {
  const { left, middle, right } = generateHeaderContents(pageUrl);

  return (
    <div css={styles.container(pageUrl)}>
      {isHeader && <HeaderNavigationLayout left={left} middle={middle} right={right} />}
      <Outlet />
    </div>
  );
}

export default CommonLayout;
