import { Outlet } from 'react-router';

import { PageLabelKey } from '@/common/constants/path';
import useDeviceType from '@/common/hooks/use-device-type';

import HeaderNavigation from './header-navigation/header-navigation-layout';

import * as styles from './common-layout.styles';

interface CommonLayoutProps {
  isHeader: boolean;
  pageLabel: PageLabelKey;
}

function CommonLayout({ isHeader, pageLabel }: CommonLayoutProps) {
  const deviceState = useDeviceType();
  return (
    <div css={styles.container(pageLabel, deviceState.isDesktop)}>
      {isHeader && <HeaderNavigation pageLabel={pageLabel} />}
      <Outlet />
    </div>
  );
}

export default CommonLayout;
