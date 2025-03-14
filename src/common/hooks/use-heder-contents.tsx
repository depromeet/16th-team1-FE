import Icon from '../components/icon/icon';
import AuthProfile from '../components/layout/header-buttons/auth-profile';
import HeaderLogo from '../components/layout/header-buttons/header-logo';
import LandingAuthButtons from '../components/layout/header-buttons/landing/landing-auth-buttons';
import LandingScrollSectionButtons from '../components/layout/header-buttons/landing/landing-scroll-section-buttons';
import TotalEvalutationSidebarButtons from '../components/layout/header-buttons/total-evaluation/total-evaluation-sidebar-buttons';
import { PageLabelKey } from '../constants/path';

export const useHederContents = (pageLabel: PageLabelKey) => {
  if (pageLabel === 'Landing') {
    return {
      left: <HeaderLogo />,
      middle: <LandingScrollSectionButtons />,
      right: <LandingAuthButtons />,
    };
  }
  if (pageLabel === 'Upload') {
    return {
      left: <HeaderLogo />,
      middle: <></>,
      right: <AuthProfile />,
    };
  }
  if (pageLabel === 'TotalEvaluation') {
    return {
      left: <TotalEvalutationSidebarButtons />,
      middle: <Icon name="fix" />,
      right: <Icon name="fix" />,
    };
  }

  if (pageLabel === 'Login') {
    return {
      left: <Icon name="logo-full-header-navigation" />,
      middle: <Icon name="fix" />,
      right: <Icon name="fix" />,
    };
  }

  return {
    left: null,
    middle: null,
    right: null,
  };
};
