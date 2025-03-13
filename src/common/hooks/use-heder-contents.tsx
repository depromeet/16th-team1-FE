import Icon from '../components/icon/icon';
import LandginLeftButton from '../components/layout/header-buttons/landing/landing-left-button';
import LandingMiddleButtons from '../components/layout/header-buttons/landing/landing-middle-buttons';
import LandingRightButtons from '../components/layout/header-buttons/landing/landing-right-buttons';
import TotalEvalutationLeftButtons from '../components/layout/header-buttons/total-evaluation/total-evaluation-left-buttons';
import { PageLabelKey } from '../constants/path';

export const useHederContents = (pageLabel: PageLabelKey) => {
  if (pageLabel === 'Landing') {
    return {
      left: <LandginLeftButton />,
      middle: <LandingMiddleButtons />,
      right: <LandingRightButtons />,
    };
  }
  if (pageLabel === 'TotalEvaluation') {
    return {
      left: <TotalEvalutationLeftButtons />,
      middle: <Icon name="fix" />,
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
