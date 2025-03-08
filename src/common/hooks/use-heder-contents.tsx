import Icon from '../components/icon/icon';
import LandingPageHeaderButtons from '../components/layout/header-buttons/landing-page-header-buttons';
import TotalEvalutationHeaderButtons from '../components/layout/header-buttons/total-evaluation-header-buttons';
import { PAGE_URL, PageUrlType } from '../constants/path';

export const useHederContents = (pageUrl: PageUrlType) => {
  if (pageUrl === PAGE_URL.TotalEvaluation) {
    return {
      left: <TotalEvalutationHeaderButtons />,
      middle: <Icon name="fix" />,
      right: <Icon name="fix" />,
    };
  }
  if (pageUrl === PAGE_URL.Landing) {
    return {
      left: <Icon name="logo-full-header-navigation" />,
      middle: <LandingPageHeaderButtons />,
      right: <Icon name="fix" />,
    };
  }
  if (pageUrl === PAGE_URL.Upload) {
    return {
      left: <Icon name="logo-full-header-navigation" />,
      middle: <Icon name="fix" />,
      right: <Icon name="fix" />,
    };
  }
  if (pageUrl === PAGE_URL.Login) {
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
