import FallbackBoundary from '@/common/components/fallback-boundary/fallback-boundary';
import Skeleton from '@/common/components/skeleton/skeleton';
import { useGetPortfolioFeedbackData } from '@/features/total-evaluation/hooks/use-get-portfolio-feedback-data';

import * as styles from './total-evaluation-user-info.styles';

function TotalEvalutationUserInfo() {
  return (
    <FallbackBoundary
      suspense={{ fallbackUI: <Skeleton width="22rem" height="1.6rem" /> }}
      error={{ fallbackUI: <Skeleton width="22rem" height="1.6rem" /> }}
    >
      <TotalEvalutationUserInfoContent />
    </FallbackBoundary>
  );
}

export default TotalEvalutationUserInfo;

const TotalEvalutationUserInfoContent = () => {
  const { createdAt, title } = useGetPortfolioFeedbackData();

  return (
    <div css={styles.container}>
      <p css={styles.date}>{createdAt ?? '-'}</p>
      <p css={styles.pdf}>{title}</p>
    </div>
  );
};
