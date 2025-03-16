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
  const { isMobile } = useDeviceType();
  return (
    <div css={styles.container(pageLabel)}>
      {isHeader && (
        <>
          {isMobile && <div css={styles.mobileTopPlaceholder} />}
          <HeaderNavigation pageLabel={pageLabel} />
        </>
      )}
      <Outlet />
    </div>
  );
}

export default CommonLayout;
