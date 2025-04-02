import Spacing from '@/common/components/spacing/spacing';

import LoadingPageEvaluation from './loading-page-evaluation';
import LoadingProjectEvaluation from './loading-project-evaluation';
import LoadingTitle from './loading-title';
import LoadingTopSection from './loading-top-section';
import LoadingTotalEvaluation from './loading-total-evaluation';
import { LOADING_TITLE } from '../../constants/loading-constant';

import * as styles from './feedback-loading.styles';

export default function FeedbackLoading() {
  return (
    <div css={styles.feedbackLoading}>
      <Spacing size={30} />
      <LoadingTopSection />
      <Spacing size={20} />
      <LoadingTitle text={LOADING_TITLE.total.title} color={LOADING_TITLE.total.color} />
      <LoadingTotalEvaluation />
      <Spacing size={20} />
      <LoadingTitle text={LOADING_TITLE.project.title} color={LOADING_TITLE.project.color} />
      <LoadingProjectEvaluation />
      <Spacing size={20} />
      <LoadingTitle text={LOADING_TITLE.page.title} color={LOADING_TITLE.page.color} />
      <LoadingPageEvaluation />
      <Spacing size={38.7} />
    </div>
  );
}
