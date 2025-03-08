import { Outlet } from 'react-router';

import { PageUrlType } from '@/common/constants/path';
import { generateHeaderContents } from '@/common/utils/generateHederContents';

import HeaderNavigationLayout from '../header-navigation/header-navigation-layout';

import * as styles from './common-layout.styles';

interface CommonLayoutProps {
  isHeader: boolean;
  usage: PageUrlType;
}

function CommonLayout({ isHeader, usage }: CommonLayoutProps) {
  const { left, middle, right } = generateHeaderContents(usage);

  return (
    <div css={styles.container(usage)}>
      {isHeader && <HeaderNavigationLayout left={left} middle={middle} right={right} />}
      <Outlet />
    </div>
  );
}

export default CommonLayout;
