import FAQ from './components/frequently-asked-questions/frequently-asked-questions';

import * as styles from './landing-page.styles';

export default function LandingPage() {
  return (
    <div css={styles.landingPage}>
      <FAQ />
    </div>
  );
}
