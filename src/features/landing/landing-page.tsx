import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import totalEvaluation from '@/assets/images/total-evaluation.png';
import { useAuthBuilder } from '@/common/hooks/use-auth-builder';
import useDeviceType from '@/common/hooks/use-device-type';

import FAQ from './components/frequently-asked-questions/frequently-asked-questions';
import HelpersSection from './components/helpers-section/helpers-section';
import RoutingBottomSection from './components/routing-section/routing-bottom-section';
import RoutingStartSection from './components/routing-section/routing-start-section';

import * as styles from './landing-page.styles';

export default function LandingPage() {
  const landingPageAuthBuilder = useAuthBuilder('Landing');
  const { isMobile } = useDeviceType();
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    landingPageAuthBuilder();
  }, [landingPageAuthBuilder]);

  return (
    <div id="landing-container" css={styles.landingPage}>
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
