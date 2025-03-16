import { forwardRef } from 'react';

import * as styles from './question-card.styles';

interface QuestionCardProps {
  question: string;
  idx: number;
  description: string;
  author: string;
  inView: boolean;
}

const QuestionCard = forwardRef<HTMLDivElement, QuestionCardProps>(
  ({ question, idx, description, author, inView }, ref) => {
    return (
      <div ref={ref} css={styles.questionCard(inView, idx * 0.2)}>
        <div css={styles.textWrapper}>
          <p css={styles.question}>{question}</p>
          <p css={styles.description}>{description}</p>
        </div>
        <span css={styles.author}>{author}</span>
      </div>
    );
  },
);

QuestionCard.displayName = 'QuestionCard';

export default QuestionCard;
