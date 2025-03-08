import { theme } from '@/assets/styles/theme';
import Icon from '@/common/components/icon/icon';
import { questionData, stepData } from '@/features/landing/common/data';
import QuestionCard from '@/features/landing/components/helpers-section/question-card';
import StepCard from '@/features/landing/components/helpers-section/step-card';

import * as styles from './helpers-section.styles';

export default function HelpersSection() {
  return (
    <>
      <section css={styles.sectionWrapper}>
        <h2 css={styles.sectionTitle}>
          포트폴리오 제작하면서
          <br />
          이런 경험 없으셨나요?
        </h2>
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
        <h2 css={styles.sectionTitle}>
          한 번의 PDF 업로드로
          <br />
          맞춤형 피드백을 받아보세요
        </h2>
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

      <section css={styles.sectionWrapper}>
        <div css={styles.titleWrapper}>
          <SectionBadge color={theme.colors.SORA[200]} text="종합 평가" />
          <h2 css={styles.sectionTitle}>
            포트폴리오를
            <br />
            정량적으로 평가해드려요
          </h2>
        </div>
      </section>

      <section css={styles.sectionWrapper}>
        <div css={styles.titleWrapper}>
          <SectionBadge color="#D7B1FF" text="프로젝트 평가" />
          <h2 css={styles.sectionTitle}>
            프로젝트 과정에서 놓친 부분은 없는지
            <br />
            단계별로 확인해요
          </h2>
        </div>
      </section>

      <section css={styles.sectionWrapper}>
        <div css={styles.titleWrapper}>
          <SectionBadge color="#C3C3D9" text="세부 개선점" />
          <h2 css={styles.sectionTitle}>
            문장 하나하나 꼼꼼하게
            <br />
            피드백 해드려요
          </h2>
        </div>
      </section>
    </>
  );
}

interface SectionBadgeProps {
  color: string;
  text: string;
}

function SectionBadge({ color, text }: SectionBadgeProps) {
  return (
    <div css={styles.sectionBadge(color)}>
      <Icon name="spark" width={16} color={color} /> {text}
    </div>
  );
}
