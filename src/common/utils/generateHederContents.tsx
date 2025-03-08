import NavigationButtons from '@/features/landing/components/navigation-buttons/navigation-buttons';

import Icon from '../components/icon/icon';
import { PageUrlType } from '../constants/path';

export const generateHeaderContents = (usage: PageUrlType) => {
  const left = usage !== 'total-evaluation' && <Icon name="logo-header" />;
  const middle = usage === '/' && <NavigationButtons />;
  const right = usage === '/' ? <Icon name="fix" /> : <Icon name="fix" />;

  return { left, middle, right };
};
