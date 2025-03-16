import useDeviceType from '@/common/hooks/use-device-type';

import Icon from '../../icon/icon';

import * as styles from './header-logo.styles';

function HeaderLogo() {
  const { isMobile } = useDeviceType();

  const IconComponent = isMobile ? (
    <Icon name="logo-full-header-mobile" />
  ) : (
    <Icon name="logo-full-header-desktop" />
  );

  return <div css={styles.container(isMobile)}>{IconComponent}</div>;
}

export default HeaderLogo;
