import PortfolioUpload from './components/portfolio-upload/portfolio-upload';

import * as styles from './upload-page.styles';

export default function UploadPage() {
  return (
    <div css={styles.container}>
      <h1 css={styles.title}>
        PDF 업로드만 하면,
        <br />
        포트폴리오 분석을 해드려요
      </h1>
      <PortfolioUpload />
    </div>
  );
}
