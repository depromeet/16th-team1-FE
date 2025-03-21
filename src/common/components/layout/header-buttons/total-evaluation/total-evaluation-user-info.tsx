import FallbackBoundary from '@/common/components/fallback-boundary/fallback-boundary';
import { useGetPortfolioFeedbackData } from '@/features/total-evaluation/hooks/use-get-portfolio-feedback-data';

import * as styles from './total-evaluation-user-info.styles';

//TODO: 포트폴리오 피드백 조회 시 createdAt, portfolioName 추가
function TotalEvalutationUserInfo() {
  return (
    <FallbackBoundary>
      <TotalEvalutationUserInfoContent />
    </FallbackBoundary>
  );
}

export default TotalEvalutationUserInfo;

const TotalEvalutationUserInfoContent = () => {
  const { createdAt, fileId } = useGetPortfolioFeedbackData();

  return (
    <div css={styles.container}>
      <p css={styles.date}>{createdAt ?? '-'}</p>
      <p css={styles.pdf}>{fileId}</p>
    </div>
  );
};
