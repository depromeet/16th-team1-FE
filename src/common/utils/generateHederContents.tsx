import NavigationButtons from '@/features/landing/components/navigation-buttons/navigation-buttons';

import Icon from '../components/icon/icon';
import { PageUrlType } from '../constants/path';

export const generateHeaderContents = (pageUrl: PageUrlType) => {
  const left = pageUrl !== 'total-evaluation' && <Icon name="logo-header" />;
  const middle = pageUrl === '/' && <NavigationButtons />;
  const right = pageUrl === '/' ? <Icon name="fix" /> : <Icon name="fix" />;

  return { left, middle, right };
};
