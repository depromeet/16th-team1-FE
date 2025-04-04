import { ReactNode } from 'react';

import AuthProfileMenu from '../components/layout/header-buttons/auth-profile-menu';
import HeaderLogo from '../components/layout/header-buttons/header-logo';
import LandingAuthButtons from '../components/layout/header-buttons/landing/landing-auth-buttons';
import LandingScrollSectionButtons from '../components/layout/header-buttons/landing/landing-scroll-section-buttons';
import TotalEvalutationSidebarButtons from '../components/layout/header-buttons/total-evaluation/total-evaluation-sidebar-buttons';
import TotalEvalutationUserInfo from '../components/layout/header-buttons/total-evaluation/total-evaluation-user-info';
import { PageLabelKey } from '../constants/path';

type ContentType = {
  [key in PageLabelKey]: {
    left: ReactNode;
    middle: ReactNode;
    right: ReactNode;
  };
};

export const useHeaderContents = (pageLabel: PageLabelKey) => {
  const content: ContentType = {
    Landing: {
      left: <HeaderLogo />,
      middle: <LandingScrollSectionButtons />,
      right: <LandingAuthButtons />,
    },
    Login: {
      left: null,
      middle: null,
      right: null,
    },
    Upload: {
      left: <HeaderLogo />,
      middle: null,
      right: <AuthProfileMenu />,
    },
    Loading: {
      left: <HeaderLogo />,
      middle: null,
      right: <AuthProfileMenu />,
    },
    TotalEvaluation: {
      left: <TotalEvalutationSidebarButtons />,
      middle: <TotalEvalutationUserInfo />,
      right: <AuthProfileMenu />,
    },
  };

  return content[pageLabel];
};
