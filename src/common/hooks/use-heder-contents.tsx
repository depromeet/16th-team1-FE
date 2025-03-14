import { ReactNode } from 'react';

import Icon from '../components/icon/icon';
import AuthProfile from '../components/layout/header-buttons/auth-profile';
import HeaderLogo from '../components/layout/header-buttons/header-logo';
import LandingAuthButtons from '../components/layout/header-buttons/landing/landing-auth-buttons';
import LandingScrollSectionButtons from '../components/layout/header-buttons/landing/landing-scroll-section-buttons';
import TotalEvalutationSidebarAuth from '../components/layout/header-buttons/total-evaluation/total-evaluation-sidebar-auth';
import TotalEvalutationSidebarButtons from '../components/layout/header-buttons/total-evaluation/total-evaluation-sidebar-buttons';
import { PageLabelKey } from '../constants/path';

// 템플릿 리터럴
type ContentType = {
  [key in PageLabelKey]: {
    left: ReactNode;
    middle: ReactNode;
    right: ReactNode;
  };
};

export const useHederContents = (pageLabel: PageLabelKey) => {
  const content: ContentType = {
    Landing: {
      left: <HeaderLogo />,
      middle: <LandingScrollSectionButtons />,
      right: <LandingAuthButtons />,
    },
    Upload: {
      left: <HeaderLogo />,
      middle: null,
      right: <AuthProfile />,
    },
    TotalEvaluation: {
      left: <TotalEvalutationSidebarButtons />,
      middle: <Icon name="fix" />,
      right: <TotalEvalutationSidebarAuth />,
    },
    Login: {
      left: null,
      middle: null,
      right: null,
    },
  };

  return content[pageLabel];
};
