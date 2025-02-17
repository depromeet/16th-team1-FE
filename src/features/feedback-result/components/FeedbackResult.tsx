import { useState } from 'react';

import FeedbackSidebar from '../../sidebar/components/feedbacksidebar/FeedbackSidebar';
import TotalEvalutionPage from '../../total-evaluation';

import * as styles from './FeedbackResult.styles';

/** AI 피드백 결과 페이지 */
function FeedbackResultPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <>
      <div css={styles.container}>
        <FeedbackSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        <div css={styles.contents(isSidebarOpen)}>
          <TotalEvalutionPage />
        </div>
      </div>
    </>
  );
}

export default FeedbackResultPage;
