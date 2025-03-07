import { questionData, stepData } from '@/features/landing/common/data';
import QuestionCard from '@/features/landing/components/helpers-section/question-card';
import StepCard from '@/features/landing/components/helpers-section/step-card';

import * as styles from './helpers-section.styles';

export default function HelpersSection() {
  return (
    <>
      <section css={styles.sectionWrapper}>
        <p css={styles.sectionTitle}>
          포트폴리오 제작하면서
          <br />
          이런 경험 없으셨나요?
        </p>
        <div css={styles.contentWrapper()}>
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

      <section css={styles.sectionWrapper}>
        <p css={styles.sectionTitle}>
          한 번의 PDF 업로드로
          <br />
          맞춤형 피드백을 받아보세요
        </p>
        <div css={styles.contentWrapper('column')}>
          {stepData.map(({ step, text, image, aspectRatio, width }) => (
            <StepCard
              key={step}
              step={step}
              text={text}
              image={image}
              aspectRatio={aspectRatio}
              width={width}
            />
          ))}
        </div>
      </section>
    </>
  );
}
