import { useNavigate } from 'react-router';

import { convertDateStringToObject } from '@common/utils/date';
import { css } from '@emotion/react';

import Icon from '@/common/components/icon/icon';

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

  const parsedDate = convertDateStringToObject(date);

  return (
    <li onClick={() => navigate(`/total-evaluation/${feedbackId}`)} css={styles.container}>
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
