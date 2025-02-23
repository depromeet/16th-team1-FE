import PortfolioUpload from './components/portfolio-upload/portfolio-upload';

import * as styles from './upload-page.styles';

export default function UploadPage() {
  return (
    <div css={styles.container}>
      <div css={styles.logo}>Logo</div>
      <h1 css={styles.title}>포트폴리오를 업그레이드 해볼까요?</h1>
      <PortfolioUpload />
    </div>
  );
}
