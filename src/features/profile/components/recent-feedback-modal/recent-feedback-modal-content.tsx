import { useState } from 'react';
import { useNavigate } from 'react-router';

import Icon from '@/common/components/icon/icon';
import useShadowScroll from '@/common/hooks/use-shadow-scroll';
import { useGetFeedbackHistory } from '@/features/feedback-history/services/use-get-feedback-history';
import { parseFeedbackData } from '@/features/profile/util/parse-feedback-data';

import * as styles from './recent-feedback-modal-content.styles';

export default function RecentFeedbackModalContent() {
  const { data } = useGetFeedbackHistory('650e6f9b14a5f12a6b5c3f92');
  const parseData = parseFeedbackData(data.result);
  const [mainRef, setMainRef] = useState<HTMLElement | null>(null);
  const [bottomRef, setBottomRef] = useState<HTMLDivElement | null>(null);
  const { bottom } = useShadowScroll({ mainRef, refs: { bottom: bottomRef } });
  const navigate = useNavigate();

  const handleNavigateToPortfolioDetail = (id: string) => {
    navigate(`/total-evaluation/${id}`);
  };

  return (
    <main css={styles.modalDescription} ref={setMainRef}>
      {Object.entries(parseData).map(([year, feedbackItems]) => (
        <div key={year} css={styles.dataWrapper}>
          <h3 css={styles.yearWrapper}>{year}</h3>
          <div css={styles.feedbackGap}>
            {feedbackItems.map((feedback) => (
              <article
                key={feedback.feedbackId}
                css={styles.totalDescriptionWrapper}
                onClick={() => handleNavigateToPortfolioDetail(feedback.feedbackId)}
              >
                <span css={styles.date}>{feedback.date}</span>
                <div css={styles.descriptionWrapper}>
                  <Icon name="file" />
                  <span css={styles.description}>{feedback.title}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
      <div ref={setBottomRef} css={styles.bottomWrapper} />
      <div css={styles.shadow(bottom)} />
    </main>
  );
}
