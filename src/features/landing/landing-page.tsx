import { useInView } from 'react-intersection-observer';

import { css } from '@emotion/react';

import totalEvaluation from '@/assets/images/total-evaluation.png';
import useDeviceType from '@/common/hooks/use-device-type';
import { useLandginPageAuth } from '@/common/hooks/use-page-auth-service';
import { axiosInstance } from '@/common/services/service-config';

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

  useLandginPageAuth();

  return (
    <div id="landing-container" css={styles.landingPage}>
      {/* 테스트용 */}
      <button
        onClick={async () => {
          const response = await axiosInstance.get(`/api/v1/users/me`);
          console.log(response.data);
        }}
        css={css`
          font-size: 3rem;
        `}
      >
        내 정보 확인(테스트용)
      </button>
      <div css={styles.flexColumn(isMobile ? 4.8 : 10)} id="start-section">
        <RoutingStartSection />
        <img
          ref={ref}
          src={totalEvaluation}
          css={styles.image(inView)}
          alt="total evalution image"
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
