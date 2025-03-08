import FAQ from './components/frequently-asked-questions/frequently-asked-questions';
import HelpersSection from './components/helpers-section/helpers-section';
import RoutingBottomSection from './components/routing-section/routing-bottom-section';
import RoutingStartSection from './components/routing-section/routing-start-section';

import * as styles from './landing-page.styles';

export default function LandingPage() {
  return (
    <div css={styles.landingPage}>
      <RoutingStartSection />
      <HelpersSection />
      <FAQ />
      <RoutingBottomSection />
    </div>
  );
}
