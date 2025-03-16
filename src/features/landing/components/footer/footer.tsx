import Icon from '@/common/components/icon/icon';
import useDeviceType from '@/common/hooks/use-device-type';

import * as styles from './footer.styles';

export default function Footer() {
  const { isMobile } = useDeviceType();

  return (
    <div css={styles.footer}>
      <Icon name="logo-full-login" width={isMobile ? 53 : 88} />
      © 2025 All Rights Reserved
      <Icon name="behance-logo" width={isMobile ? 20 : 27} />
    </div>
  );
}
