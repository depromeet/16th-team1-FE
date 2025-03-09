import Icon from '../components/icon/icon';
import LandingMiddleButtons from '../components/layout/header-buttons/landing-middle-buttons';
import TotalEvalutationLeftButtons from '../components/layout/header-buttons/total-evaluation-left-buttons';
import { PageLabelKey } from '../constants/path';

export const useHederContents = (pageLabel: PageLabelKey) => {
  if (pageLabel === 'TotalEvaluation') {
    return {
      left: <TotalEvalutationLeftButtons />,
      middle: <Icon name="fix" />,
      right: <Icon name="fix" />,
    };
  }
  if (pageLabel === 'Landing') {
    return {
      left: <Icon name="logo-full-header-navigation" />,
      middle: <LandingMiddleButtons />,
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
