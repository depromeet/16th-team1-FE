import { theme } from '@/assets/styles/theme';
import Icon from '@/common/components/icon/icon';
import FadeInWrapper from '@/common/components/interaction/fade-in-wrapper';
import useDeviceType from '@/common/hooks/use-device-type';
import { questionData, stepData } from '@/features/landing/common/data';
import QuestionCard from '@/features/landing/components/helpers-section/question-card';
import StepCard from '@/features/landing/components/helpers-section/step-card';

import DetailImprovement from './detail-improvement';
import ProjectsWrapper from './projects-wrapper';
import TotalEvaluationGrid from './total-evaluation-grid';

import * as styles from './helpers-section.styles';

export default function HelpersSection() {
  const { isDesktop } = useDeviceType();

  return (
    <>
      <section css={styles.sectionWrapper} id="features-section">
        <FadeInWrapper
          additionalStyles={styles.titleWrapper}
          intersectionOptions={{
            threshold: 0.3,
            triggerOnce: true,
          }}
        >
          <h2 css={styles.sectionTitle}>
            포트폴리오 제작하면서
            <br />
            이런 경험 없으셨나요?
          </h2>
        </FadeInWrapper>
        <div css={styles.contentWrapper(isDesktop ? 'row' : 'column')}>
          {questionData.map(({ question, description, author }, idx) => (
            <QuestionCard
              key={question}
              idx={idx}
              question={question}
              description={description}
              author={author}
            />
          ))}
        </div>
      </section>

      <section css={styles.sectionWrapper}>
        <FadeInWrapper
          as={'h2'}
          additionalStyles={styles.sectionTitle()}
          intersectionOptions={{
            threshold: 0.3,
            triggerOnce: true,
          }}
        >
          한 번의 PDF 업로드로
          <br />
          맞춤형 피드백을 받아보세요
        </FadeInWrapper>

        <div css={styles.contentWrapper('column')}>
          {stepData.map(({ step, text, image, aspectRatio, width }, idx) => (
            <StepCard
              key={step}
              idx={idx}
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
        <FadeInWrapper
          additionalStyles={styles.titleWrapper}
          intersectionOptions={{
            threshold: 0.3,
            triggerOnce: true,
          }}
        >
          <SectionBadge color={theme.colors.SORA[200]} text="종합 평가" />
          <h2 css={styles.sectionTitle}>
            포트폴리오를
            <br />
            정량적으로 평가해드려요
          </h2>
        </FadeInWrapper>
        <div css={styles.contentWrapper('column')}>
          <TotalEvaluationGrid />
        </div>
      </section>

      <div id="project-section-wrapper" css={styles.sectionContainer}>
        <section id="project-section" css={styles.sectionWrapper}>
          <FadeInWrapper
            additionalStyles={styles.titleWrapper}
            intersectionOptions={{
              threshold: 0.3,
              triggerOnce: true,
            }}
          >
            <SectionBadge color="#D7B1FF" text="프로젝트 평가" />
            <h2 css={styles.sectionTitle}>
              프로젝트 과정에서 놓친 부분은 없는지
              <br />
              단계별로 확인해요
            </h2>
          </FadeInWrapper>
          <ProjectsWrapper />
        </section>
      </div>

      <section css={styles.sectionWrapper}>
        <FadeInWrapper
          additionalStyles={styles.titleWrapper}
          intersectionOptions={{
            threshold: 0.3,
            triggerOnce: true,
          }}
        >
          <SectionBadge color="#C3C3D9" text="세부 개선점" />
          <h2 css={styles.sectionTitle}>
            문장 하나하나 꼼꼼하게
            <br />
            피드백 해드려요
          </h2>
        </FadeInWrapper>
        <DetailImprovement />
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
      <Icon name="spark" width={28} color={color} /> {text}
    </div>
  );
}
