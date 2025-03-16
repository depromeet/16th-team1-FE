import { forwardRef } from 'react';

import FadeInDiv from '@/common/components/interaction/fade-in-div';

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
      <FadeInDiv
        ref={ref}
        inView={inView}
        delay={idx * 0.2}
        additionalStyles={styles.questionCard()}
      >
        <div css={styles.textWrapper}>
          <p css={styles.question}>{question}</p>
          <p css={styles.description}>{description}</p>
        </div>
        <span css={styles.author}>{author}</span>
      </FadeInDiv>
    );
  },
);

QuestionCard.displayName = 'QuestionCard';

export default QuestionCard;
