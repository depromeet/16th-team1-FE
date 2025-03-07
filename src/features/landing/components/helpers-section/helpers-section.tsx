import { questionData } from '@/features/landing/common/data';
import QuestionCard from '@/features/landing/components/helpers-section/question-card';

import * as styles from './helpers-section.styles';

export default function HelpersSection() {
  return (
    <section css={styles.sectionWrapper}>
      <p css={styles.sectionTitle}>
        포트폴리오 제작하면서
        <br />
        이런 경험 없으셨나요?
      </p>
      <div css={styles.questionCardsWrapper}>
        {questionData.map(({ question, description, author }) => (
          <QuestionCard
            key={question}
            question={question}
            description={description}
            author={author}
          />
        ))}
      </div>
    </section>
  );
}
