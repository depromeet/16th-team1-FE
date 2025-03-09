import FAQ from './components/frequently-asked-questions/frequently-asked-questions';
import HelpersSection from './components/helpers-section/helpers-section';
import RoutingBottomSection from './components/routing-section/routing-bottom-section';
import RoutingStartSection from './components/routing-section/routing-start-section';
import totalEvaluationImage from '../../../public/images/total-evaluation.png';

import * as styles from './landing-page.styles';

export default function LandingPage() {
  return (
    <div css={styles.landingPage}>
      <div css={styles.flexColumn(10)} id="start-section">
        <RoutingStartSection />
        <img src={totalEvaluationImage} css={styles.image} alt="total evalution image" />
      </div>
      <div css={styles.flexColumn(22)}>
        <div id="features-section">
          <HelpersSection />
        </div>
        <div id="help-section">
          <FAQ />
        </div>
        <RoutingBottomSection />
      </div>
    </div>
  );
}
