import { useState } from 'react';

import { colors } from '@/assets/styles/colors';
import Icon from '@/common/components/icon/icon';
import Modal from '@/common/components/modal/base-modal';
import useShadowScroll from '@/common/hooks/use-shadow-scroll';
import { useModalStore } from '@/store/modal';

import { useGetFeedbackHistory } from '../../../feedback-history/services/use-get-feedback-history';
import { parseFeedbackData } from '../../util/parse-feedback-data';

import * as styles from './recent-feedback-modal.styles';

export default function RecentFeedbackModal() {
  const { isOpen, closeModal } = useModalStore();
  const { data, isLoading } = useGetFeedbackHistory();
  const parseData = parseFeedbackData(data?.result ?? []);
  const [mainRef, setMainRef] = useState<HTMLElement | null>(null);
  const [bottomRef, setBottomRef] = useState<HTMLDivElement | null>(null);

  const { bottom } = useShadowScroll(mainRef, bottomRef);

  if (isLoading) {
    return <div>로딩</div>;
  }

  return (
    <Modal open={isOpen} onOpenChange={closeModal}>
      <Modal.Root
        width="55.8rem"
        height="47.1rem"
        padding="2.4rem 1.6rem 2.8rem 1.6rem"
        gap="2.4rem"
        backgroundColor={colors.GRAY[990]}
      >
        <header css={styles.modalHeader}>
          <Modal.Title css={styles.title}>최근 피드백</Modal.Title>
          <Modal.Close asChild>
            <Icon name="close" color={colors.GRAY[400]} customStyle={styles.closeIconWrapper} />
          </Modal.Close>
        </header>
        <main css={styles.modalDescription} ref={setMainRef}>
          {Object.entries(parseData).map(([year, feedbackItems]) => (
            <div key={year} css={styles.dataWrapper}>
              <h3 css={styles.yearWrapper}>{year}</h3>
              <div css={styles.feedbackGap}>
                {feedbackItems.map((feedback) => (
                  <article key={feedback.feedbackId} css={styles.totalDescriptionWrapper}>
                    <span css={styles.date}>{feedback.date}</span>
                    <div css={styles.descriptionWrapper}>
                      <Icon name="feedback" />
                      <span css={styles.description}>{feedback.title}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
          {/* 최하단 감지 요소 */}
          <div ref={setBottomRef} css={styles.bottomWrapper} />
          <div css={styles.shadow(bottom)} />
        </main>
      </Modal.Root>
    </Modal>
  );
}
