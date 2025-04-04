import { Outlet } from 'react-router';

import { css } from '@emotion/react';

import Footer from '@/common/components/layout/footer/footer';
import { PageLabelKey } from '@/common/constants/path';

import HeaderNavigation from './header-navigation/header-navigation-layout';

import * as styles from './common-layout.styles';

interface CommonLayoutProps {
  isHeader: boolean;
  pageLabel: PageLabelKey;
}

function CommonLayout({ isHeader, pageLabel }: CommonLayoutProps) {
  return (
    <div css={styles.container(pageLabel)}>
      {isHeader && <HeaderNavigation pageLabel={pageLabel} />}
      <div css={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default CommonLayout;
