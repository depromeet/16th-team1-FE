import { useNavigate } from 'react-router';

import useDeviceType from '@/common/hooks/use-device-type';

import Icon from '../../icon/icon';

import * as styles from './header-logo.styles';

function HeaderLogo() {
  const navigate = useNavigate();
  const { isMobile } = useDeviceType();

  const IconComponent = isMobile ? (
    <Icon name="logo-full-header-mobile" onClick={() => navigate('/')} />
  ) : (
    <Icon name="logo-full-header-desktop" onClick={() => navigate('/')} />
  );

  return <div css={styles.container(isMobile)}>{IconComponent}</div>;
}

export default HeaderLogo;
