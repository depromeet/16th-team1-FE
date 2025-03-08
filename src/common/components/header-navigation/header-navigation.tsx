import React, { ReactNode } from 'react';

import Icon from '../icon/icon';

import * as styles from './header-navigation.styles';

interface HeaderNavigationProps {
  isLanding: boolean;
  rightContent: ReactNode;
  middleContent?: ReactNode;
}

function HeaderNavigation({ isLanding, middleContent, rightContent }: HeaderNavigationProps) {
  return (
    <div css={styles.container(isLanding)}>
      <Icon name="logo-header" />
      {middleContent}
      {rightContent}
    </div>
  );
}

export default HeaderNavigation;
