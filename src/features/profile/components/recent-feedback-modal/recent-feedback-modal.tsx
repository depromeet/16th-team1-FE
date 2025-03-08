import { useState } from 'react';

import { colors } from '@/assets/styles/colors';
import Icon from '@/common/components/icon/icon';
import Modal from '@/common/components/modal/base-modal';

import { feedbackData } from '../../common/data';
import { parseFeedbackData } from '../../util/parse-feedback-data';

import * as styles from './recent-feedback-modal.styles';

export default function RecentFeedbackModal() {
  const parseData = parseFeedbackData(feedbackData);

  const [showShadow, setShowShadow] = useState(true);

  const handleScroll = (e: React.UIEvent) => {
    const isAtBottom =
      e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.clientHeight;
    setShowShadow(!isAtBottom);
  };

  return (
    <Modal.Root width="55.8rem" height="47.1rem" backgroundColor={colors.GRAY[990]}>
      <header css={styles.modalHeader}>
        <Modal.Title css={styles.title}>최근 피드백</Modal.Title>
        <Modal.Close asChild>
          <Icon name="close" />
        </Modal.Close>
      </header>
      <main css={styles.modalDescription} onScroll={handleScroll}>
        {Object.entries(parseData).map(([yearMonth, feedbackItems]) => (
          <div key={yearMonth} css={styles.dataWrapper}>
            <h3 css={styles.yearAndMonth}>{yearMonth}</h3>
            <div css={styles.feedbackGap}>
              {feedbackItems.map((feedback) => (
                <article key={feedback.feedbackId} css={styles.totalDescriptionWrapper}>
                  <span css={styles.date}>{feedback.date}일</span>
                  <div css={styles.descriptionWrapper}>
                    <Icon name="feedback" />
                    <span css={styles.description}>{feedback.title}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
        <div css={styles.shadow(showShadow)} />
      </main>
    </Modal.Root>
  );
}
