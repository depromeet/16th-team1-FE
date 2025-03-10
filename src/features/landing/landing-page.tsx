import FAQ from './components/frequently-asked-questions/frequently-asked-questions';
import HelpersSection from './components/helpers-section/helpers-section';
import RoutingBottomSection from './components/routing-section/routing-bottom-section';
import RoutingStartSection from './components/routing-section/routing-start-section';

import * as styles from './landing-page.styles';

export default function LandingPage() {
  return (
    <div id="landing-container" css={styles.landingPage}>
      <div css={styles.flexColumn(10)} id="start-section">
        <RoutingStartSection />
        <img src="./images/total-evaluation.png" css={styles.image} alt="total evalution image" />
      </div>
      <div css={styles.flexColumn(22)}>
        <HelpersSection />
        <div id="help-section">
          <FAQ />
        </div>
        <RoutingBottomSection />
      </div>
    </div>
  );
}
