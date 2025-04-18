import { useNavigate } from 'react-router';

import { convertDateStringToObject } from '@common/utils/date';
import { css } from '@emotion/react';

import Icon from '@/common/components/icon/icon';
import useDeviceType from '@/common/hooks/use-device-type';
import { useMobileGuardModalStore } from '@/store/mobile-guard-modal';

import * as styles from './recent-feedback-list-item.styles';

interface RecentFeedbackListItemProps {
  feedbackId: string;
  date: string;
  fileName: string;
}

export default function RecentFeedbackListItem({
  feedbackId,
  date,
  fileName,
}: RecentFeedbackListItemProps) {
  const navigate = useNavigate();
  const { isMobile } = useDeviceType();
  const { openMobileGuardModal } = useMobileGuardModalStore();

  const parsedDate = convertDateStringToObject(date);

  const handleClickTotalEvaluation = () => {
    if (isMobile) {
      openMobileGuardModal();
      return;
    }
    navigate(`/total-evaluation/${feedbackId}`);
  };

  return (
    <li onClick={handleClickTotalEvaluation} css={styles.container}>
      <div
        css={styles.date}
      >{`${parsedDate.year.toString().slice(2)}. ${parsedDate.month}. ${parsedDate.day}`}</div>
      <div css={styles.fileName}>
        <Icon
          name="file"
          width={20}
          customStyle={css`
            flex-shrink: 0;
          `}
        />
        <span>{fileName}</span>
      </div>
    </li>
  );
}
