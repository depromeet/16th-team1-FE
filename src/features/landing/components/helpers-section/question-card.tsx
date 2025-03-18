import FadeInWrapper from '@/common/components/interaction/fade-in-wrapper';

import * as styles from './question-card.styles';

interface QuestionCardProps {
  question: string;
  idx: number;
  description: string;
  author: string;
}

export default function QuestionCard({ question, idx, description, author }: QuestionCardProps) {
  return (
    <FadeInWrapper
      additionalStyles={styles.questionCard()}
      intersectionOptions={{
        threshold: 0.3,
        triggerOnce: true,
      }}
      transitionOptions={{
        delay: idx * 0.2,
      }}
    >
      <div css={styles.textWrapper}>
        <p css={styles.question}>{question}</p>
        <p css={styles.description}>{description}</p>
      </div>
      <span css={styles.author}>{author}</span>
    </FadeInWrapper>
  );
}
