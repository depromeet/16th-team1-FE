import { useLocation } from 'react-router';

import Icon from '@/common/components/icon/icon';
import { PAGE_URL } from '@/common/constants/path';
import useDeviceType from '@/common/hooks/use-device-type';

import * as styles from './footer.styles';

export default function Footer() {
  const { pathname } = useLocation();
  const { isMobile } = useDeviceType();

  const isShortFooter = pathname.includes(PAGE_URL.TotalEvaluation);

  return (
    <div css={styles.footer(isShortFooter)}>
      <Icon name="logo-full-login" width={isMobile ? 53 : 88} />
      © 2025 All Rights Reserved
      <Icon name="behance-logo" width={isMobile ? 20 : 27} />
    </div>
  );
}
