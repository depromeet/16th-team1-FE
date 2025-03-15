import useDeviceType from '@/common/hooks/use-device-type';

import Icon from '../../icon/icon';

import * as styles from './header-logo.styles';

function HeaderLogo() {
  const deviceState = useDeviceType();

  const IconComponent = deviceState.isDesktop ? (
    <Icon name="logo-full-header-desktop" />
  ) : (
    <Icon name="logo-full-header-mobile" />
  );

  return <div css={styles.desktop(deviceState.isDesktop)}>{IconComponent}</div>;
}

export default HeaderLogo;
