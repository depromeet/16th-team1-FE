import { useState } from 'react';

import FeedbackSidebar from '../../sidebar/components/feedback-sidebar/feedback-sidebar';
import TotalEvalutionPage from '../../total-evaluation';

import * as styles from './feedback-result.styles';

/** AI 피드백 결과 페이지 */
function FeedbackResultPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div css={styles.container}>
      <FeedbackSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <div css={styles.contents(isSidebarOpen)}>
        <TotalEvalutionPage />
      </div>
    </div>
  );
}

export default FeedbackResultPage;
