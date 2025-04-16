import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useAuthCycle } from '@/common/hooks/use-auth-cycle';
import useDeviceType from '@/common/hooks/use-device-type';
import { getImageUrl } from '@/common/utils/get-image-url';

import FAQ from './components/frequently-asked-questions/frequently-asked-questions';
import HelpersSection from './components/helpers-section/helpers-section';
import RoutingBottomSection from './components/routing-section/routing-bottom-section';
import RoutingStartSection from './components/routing-section/routing-start-section';

import * as styles from './landing-page.styles';

export default function LandingPage() {
  const { isMobile } = useDeviceType();
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  const { executeAuthCycle, createAuthCycle } = useAuthCycle();

  useEffect(() => {
    // 빌더 패턴을 통해 옵션 구성
    const options = createAuthCycle()
      .withoutRollback() // 롤백 비활성화
      .withSilentFailure() // 실패해도 패스 (추후 로그인 페이지에서 다시 로그인 진행)
      .build();

    // 인증 싸이클 실행
    executeAuthCycle(options);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    const observer = new ResizeObserver((entries) => {
      entries.forEach(() => {
        handleResize();
      });
    });

    observer.observe(document.body);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="landing-container" css={styles.landingPage}>
      <div css={styles.flexColumn(isMobile ? 4.8 : 10)} id="start-section">
        <RoutingStartSection />
        <img
          ref={ref}
          src={getImageUrl('total-evaluation')}
          css={styles.image(inView)}
          alt="total evalution image"
          onLoad={() => ScrollTrigger.refresh()}
        />
      </div>
      <div css={styles.flexColumn(isMobile ? 16 : 22)}>
        <HelpersSection />
        <div id="help-section" css={styles.sectionWrapper}>
          <FAQ />
        </div>
        <RoutingBottomSection />
      </div>
    </div>
  );
}
