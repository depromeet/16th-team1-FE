import * as styles from './question-card.styles';

interface QuestionCardProps {
  question: string;
  description: string;
  author: string;
}

export default function QuestionCard({ question, description, author }: QuestionCardProps) {
  return (
    <div css={styles.questionCard}>
      {/* description이 길어져도 카드 크기를 유지하기 위해 author 제외하고 wrapping */}
      <div css={styles.textWrapper}>
        <p css={styles.question}>{question}</p>
        <p css={styles.description}>{description}</p>
      </div>
      <span css={styles.author}>{author}</span>
    </div>
  );
}
