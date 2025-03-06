import Icon from '@/common/components/icon/icon';
import Modal from '@/common/components/modal/base-modal';

import { feedbackData } from '../../common/data';

import * as styles from './recent-feedback-modal.styles';

export default function RecentFeedbackModal() {
  return (
    <Modal.Root>
      <Modal.Content css={styles.modalContentWrapper} aria-describedby={undefined}>
        <div css={styles.modalHeader}>
          <Modal.Title css={styles.title}>최근 피드백</Modal.Title>
          <Modal.Close asChild>
            <Icon name="close" customStyle={styles.closeIcon} />
          </Modal.Close>
        </div>
        <div css={styles.modalDescription}>
          {feedbackData.map((data) => (
            <div key={data.id} css={styles.dataWrapper(data.isChosen)}>
              <span css={styles.date}>{data.date}</span>
              <div css={styles.descriptionWrapper}>
                <Icon name="feedback" />
                <span css={styles.description}>{data.description}</span>
              </div>
            </div>
          ))}
        </div>
      </Modal.Content>
    </Modal.Root>
  );
}
