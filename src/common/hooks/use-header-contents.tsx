import { ReactNode } from 'react';

import useDeviceType from './use-device-type';
import HeaderLogo from '../components/layout/header-buttons/header-logo';
import LandingAuthButtons from '../components/layout/header-buttons/landing/landing-auth-buttons';
import LandingScrollSectionButtons from '../components/layout/header-buttons/landing/landing-scroll-section-buttons';
import ProfileMenu from '../components/layout/header-buttons/profile-menu';
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
  const { isMobile } = useDeviceType();

  const content: ContentType = {
    Landing: {
      left: <HeaderLogo />,
      middle: <LandingScrollSectionButtons />,
      right: <LandingAuthButtons />,
    },
    Login: {
      left: isMobile ? <HeaderLogo /> : null,
      middle: null,
      right: isMobile ? <LandingAuthButtons /> : null,
    },
    Upload: {
      left: <HeaderLogo />,
      middle: null,
      right: <ProfileMenu />,
    },
    Loading: {
      left: <HeaderLogo />,
      middle: null,
      right: <ProfileMenu />,
    },
    TotalEvaluation: {
      left: isMobile ? null : <TotalEvalutationSidebarButtons />,
      middle: isMobile ? null : <TotalEvalutationUserInfo />,
      right: isMobile ? null : <ProfileMenu />,
    },
  };

  return content[pageLabel];
};
