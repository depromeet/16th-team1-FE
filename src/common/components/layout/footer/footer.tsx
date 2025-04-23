import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import Icon from '@/common/components/icon/icon';
import { PAGE_URL } from '@/common/constants/path';
import useDeviceType from '@/common/hooks/use-device-type';
import { useSidebarContext } from '@/features/total-evaluation/components/context/sidebar/use-sidebar-context';

import * as styles from './footer.styles';

export default function Footer() {
  const { pathname } = useLocation();
  const { isMobile } = useDeviceType();
  const { isSidebarOpen } = useSidebarContext();

  const isShortFooter = pathname.includes(PAGE_URL.TotalEvaluation) && isSidebarOpen;

  const [footerColor, setFooterColor] = useState('transparent');

  /** footer 바로 위 형제 요소 배경색 추출 */
  useEffect(() => {
    const childElement = document.querySelector('footer');
    const previousSibling = childElement?.previousElementSibling;

    if (previousSibling) {
      const parentBgColor = window.getComputedStyle(previousSibling).backgroundColor;
      setFooterColor(parentBgColor);
    }
  }, []);

  return (
    <footer css={styles.footer(isShortFooter, footerColor)}>
      <Icon name="logo-full-login" width={isMobile ? 53 : 88} />
      <span css={styles.text(isShortFooter)}>© 2025 All Rights Reserved</span>
      <a
        href="https://www.behance.net/gallery/223971927/Critix-AI-Portfolio-feedback-service-for-Designer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="behance-logo" width={isMobile ? 20 : 27} />
      </a>
    </footer>
  );
}
