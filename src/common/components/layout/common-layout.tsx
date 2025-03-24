import { Outlet } from 'react-router';

import Footer from '@/common/components/layout/footer/footer';
import { PageLabelKey } from '@/common/constants/path';

import HeaderNavigation from './header-navigation/header-navigation-layout';
import FeedbackStateObserver from '../feedback-state-observer/feedback-state-observer';

import * as styles from './common-layout.styles';

interface CommonLayoutProps {
  isHeader: boolean;
  pageLabel: PageLabelKey;
}

function CommonLayout({ isHeader, pageLabel }: CommonLayoutProps) {
  return (
    <FeedbackStateObserver>
      <div css={styles.container(pageLabel)}>
        {isHeader && <HeaderNavigation pageLabel={pageLabel} />}
        <Outlet />
        <Footer />
      </div>
    </FeedbackStateObserver>
  );
}

export default CommonLayout;
