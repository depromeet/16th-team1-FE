import { useInView } from 'react-intersection-observer';

import { theme } from '@/assets/styles/theme';
import Icon from '@/common/components/icon/icon';
import useDeviceType from '@/common/hooks/use-device-type';
import { questionData, stepData } from '@/features/landing/common/data';
import QuestionCard from '@/features/landing/components/helpers-section/question-card';
import StepCard from '@/features/landing/components/helpers-section/step-card';

import DetailImprovement from './detail-improvement';
import ProjectsWrapper from './projects-wrapper';
import TotalEvaluationGrid from './total-evaluation-grid';

import * as styles from './helpers-section.styles';

//TODO: TotalEvaluationGrid, ProjectsWrapper 인터렉션 적용
export default function HelpersSection() {
  const { isDesktop } = useDeviceType();

  // 제목 ref 및 inView 상태
  const { ref: cardTitleRef, inView: cardTitleInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: stepTitleRef, inView: stepTitleInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: totalEvaluationTitleRef, inView: totalEvaluationTitleInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: projectTitleRef, inView: projectTitleInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: detailImprovementTitleRef, inView: detailImprovementTitleInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // 질문 카드의 ref 및 inView 상태
  const { ref: firstCardRef, inView: firstCardInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    delay: cardTitleInView ? 0.2 : 9999,
  });

  const { ref: secondCardRef, inView: secondCardInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    delay: firstCardInView ? 0.2 : 9999,
  });

  const { ref: thirdCardRef, inView: thirdCardInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    delay: secondCardInView ? 0.2 : 9999,
  });

  const cardRefs = [firstCardRef, secondCardRef, thirdCardRef];
  const cardInViews = [firstCardInView, secondCardInView, thirdCardInView];

  // 단계 카드의 ref 및 inView 상태
  const { ref: firstStepRef, inView: firstStepInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    delay: stepTitleInView ? 0.2 : 9999,
  });

  const { ref: secondStepRef, inView: secondStepInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    delay: firstStepInView ? 0.2 : 9999,
  });

  const stepRefs = [firstStepRef, secondStepRef];
  const stepInViews = [firstStepInView, secondStepInView];

  return (
    <>
      <section css={styles.sectionWrapper} id="features-section">
        <div ref={cardTitleRef} css={styles.titleWrapper(cardTitleInView)}>
          <h2 css={styles.sectionTitle}>
            포트폴리오 제작하면서
            <br />
            이런 경험 없으셨나요?
          </h2>
        </div>
        <div css={styles.contentWrapper(isDesktop ? 'row' : 'column')}>
          {questionData.map(({ question, description, author }, idx) => (
            <QuestionCard
              key={question}
              idx={idx}
              ref={cardRefs[idx]}
              inView={cardInViews[idx]}
              question={question}
              description={description}
              author={author}
            />
          ))}
        </div>
      </section>

      <section css={styles.sectionWrapper}>
        <div ref={stepTitleRef} css={styles.titleWrapper(stepTitleInView)}>
          <h2 css={styles.sectionTitle}>
            한 번의 PDF 업로드로
            <br />
            맞춤형 피드백을 받아보세요
          </h2>
        </div>
        <div css={styles.contentWrapper('column')}>
          {stepData.map(({ step, text, image, aspectRatio, width }, idx) => (
            <StepCard
              key={step}
              idx={idx}
              ref={stepRefs[idx]}
              inView={stepInViews[idx]}
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
        <div ref={totalEvaluationTitleRef} css={styles.titleWrapper(totalEvaluationTitleInView)}>
          <SectionBadge color={theme.colors.SORA[200]} text="종합 평가" />
          <h2 css={styles.sectionTitle}>
            포트폴리오를
            <br />
            정량적으로 평가해드려요
          </h2>
        </div>
        <div css={styles.contentWrapper('column')}>
          <TotalEvaluationGrid />
        </div>
      </section>

      <section css={styles.sectionWrapper}>
        <div ref={projectTitleRef} css={styles.titleWrapper(projectTitleInView)}>
          <SectionBadge color="#D7B1FF" text="프로젝트 평가" />
          <h2 css={styles.sectionTitle}>
            프로젝트 과정에서 놓친 부분은 없는지
            <br />
            단계별로 확인해요
          </h2>
        </div>
        <ProjectsWrapper />
      </section>

      <section css={styles.sectionWrapper}>
        <div
          ref={detailImprovementTitleRef}
          css={styles.titleWrapper(detailImprovementTitleInView)}
        >
          <SectionBadge color="#C3C3D9" text="세부 개선점" />
          <h2 css={styles.sectionTitle}>
            문장 하나하나 꼼꼼하게
            <br />
            피드백 해드려요
          </h2>
        </div>
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
      <Icon name="spark" width={16} color={color} /> {text}
    </div>
  );
}
