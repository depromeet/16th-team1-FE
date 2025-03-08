import Icon from '../components/icon/icon';
import LandingPageHeaderButtons from '../components/layout/header-buttons/landing-page-header-buttons';
import TotalEvalutationHeaderButtons from '../components/layout/header-buttons/total-evaluation-header-buttons';
import { PageLabelKey } from '../constants/path';

export const useHederContents = (pageLabel: PageLabelKey) => {
  if (pageLabel === 'TotalEvaluation') {
    return {
      left: <TotalEvalutationHeaderButtons />,
      middle: <Icon name="fix" />,
      right: <Icon name="fix" />,
    };
  }
  if (pageLabel === 'Landing') {
    return {
      left: <Icon name="logo-full-header-navigation" />,
      middle: <LandingPageHeaderButtons />,
      right: <Icon name="fix" />,
    };
  }
  if (pageLabel === 'Upload') {
    return {
      left: <Icon name="logo-full-header-navigation" />,
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
