import Icon from '../components/icon/icon';
import AuthProfile from '../components/layout/header-buttons/auth-profile';
import HeaderLogo from '../components/layout/header-buttons/header-logo';
import LandingMiddleButtons from '../components/layout/header-buttons/landing/landing-middle-buttons';
import LandingRightButtons from '../components/layout/header-buttons/landing/landing-right-buttons';
import TotalEvalutationLeftButtons from '../components/layout/header-buttons/total-evaluation/total-evaluation-left-buttons';
import { PageLabelKey } from '../constants/path';

export const useHederContents = (pageLabel: PageLabelKey) => {
  if (pageLabel === 'Landing') {
    return {
      left: <HeaderLogo />,
      middle: <LandingMiddleButtons />,
      right: <LandingRightButtons />,
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
      left: <TotalEvalutationLeftButtons />,
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
