import * as commonStyles from '@features/total-evaluation/total-evaluation-page.styles';

import { theme } from '@/assets/styles/theme';
import Icon from '@/common/components/icon/icon';
import Spacing from '@/common/components/spacing/spacing';

import {
  EVALUATION_LABEL,
  FEEDBACK_PER_PAGE_CONTENT_TYPE,
} from '../../constants/evaluation-constant';
import {
  FeedbackPerPageType,
  ProjectEvaluationType,
  ProjectProcessType,
} from '../../services/use-get-portfolio-feedback';
import EvaluationTitle from '../evaluation-title/evaluation-title';
import ImprovementSection from '../improvement-section/improvement-section';
import ImprovementTitle from '../improvement-title/improvement-title';
import NestedList from '../nested-list/nested-list';
import SummaryTitle from '../summary-title/summary-title';

import * as styles from './project-evaluation.styles';

interface ProjectEvaluationProps {
  projectEvaluation: ProjectEvaluationType;
}

const PROCESS_CATEGORIES = ['개요', '문제정의', '가설', '결과', '회고'];

const getProcessIcon = (process: ProjectProcessType) => {
  const icons = {
    GOOD: { name: 'check', color: theme.colors.GRAY[700] },
    SOSO: { name: 'triangle', color: '#EA8430' },
    BAD: { name: 'x', color: theme.colors.RED[600] },
  };
  return icons[process] || icons.SOSO;
};

export default function ProjectEvaluation({ projectEvaluation }: ProjectEvaluationProps) {
  const {
    projectName,
    positiveFeedback,
    negativeFeedback,
    imageUrl,
    processReview,
    process,
    feedbackPerPage,
  } = projectEvaluation;

  return (
    <div css={styles.projectEvaluationWrapper}>
      {/* 프로젝트 평가 */}
      <section css={styles.flexColumn}>
        <SummaryTitle title="프로젝트 평가" />
        <Spacing size={1.6} />
        <h3 css={styles.projectName}>{projectName}</h3>
        <Spacing size={2.4} />
        <img src={imageUrl} css={styles.projectImage} />
        <Spacing size={3.2} />
        <div css={styles.projectProcessItems}>
          {PROCESS_CATEGORIES.map((category, idx) => (
            <ProjectProcessItem key={category} category={category} process={process[idx]} />
          ))}
        </div>
        <Spacing size={2.9} />
        <div css={styles.processReviewWrapper} id="feedback-프로세스 평가">
          <span css={styles.processReviewTitle}>프로세스 평가</span>
          <p css={styles.processReviewContent}>{processReview}</p>
        </div>
        <hr css={commonStyles.hr} />
        <section css={styles.evaluationSection('3.2rem')}>
          <EvaluationTitle
            title={EVALUATION_LABEL['positives']}
            icon={<Icon name="smile" color={theme.colors.SORA[400]} />}
            color={theme.colors.SORA[400]}
          />
          <NestedList listItems={positiveFeedback} gap={3.2} />
        </section>
        <hr css={commonStyles.hr} />
        <section css={styles.evaluationSection('3.2rem')}>
          <EvaluationTitle
            title={EVALUATION_LABEL['negatives']}
            icon={<Icon name="sad" color="#E97950" />}
            color="#E97950"
          />
          <NestedList listItems={negativeFeedback} gap={3.2} />
        </section>
        <hr css={commonStyles.hr} />
      </section>

      {/* 장표별 평가 */}
      <section css={styles.feedbackPerPageWrapper}>
        <div css={styles.flexColumn}>
          <SummaryTitle title="장표별 상세 평가" />
          <Spacing size={1.6} />
          <h3
            css={styles.projectName}
          >{`페이지별로 수정이 필요한 부분 ${feedbackPerPage.length}가지를 찾았어요`}</h3>
        </div>

        <div css={styles.feedbackPerPageItems}>
          {feedbackPerPage.map((feedbackData) => (
            <FeedbackPerPageItem
              key={feedbackData.pageNumber}
              projectName={projectName}
              feedbackData={feedbackData}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

interface ProjectProcessItemProps {
  process: ProjectProcessType;
  category: string;
}

function ProjectProcessItem({ process, category }: ProjectProcessItemProps) {
  const { name, color } = getProcessIcon(process);
  return (
    <div css={styles.projectProcessItem} key={category}>
      <div css={styles.processIcon(color)}>
        <Icon name={name} />
      </div>
      <span css={styles.processCategory}>{category}</span>
    </div>
  );
}

interface FeedbackPerPageItemProps {
  projectName: string;
  feedbackData: FeedbackPerPageType;
}

function FeedbackPerPageItem({ projectName, feedbackData }: FeedbackPerPageItemProps) {
  const { pageNumber, imageUrl, contents } = feedbackData;

  return (
    <div css={styles.feedbackPerPageItem}>
      <div css={styles.feedbackPageImageContainer} id={`feedback-${pageNumber}P`}>
        <span css={styles.pageNumber}>{`${pageNumber}p`}</span>
        <img css={styles.feedbackPageImage} src={imageUrl} alt={`${projectName}-${pageNumber}`} />
      </div>
      <div css={styles.feedbackPerPageContentWrapper}>
        {contents.map((content) => (
          <div key={content.type} css={styles.feedbackPerPageContent}>
            <ImprovementTitle improvementTitle={FEEDBACK_PER_PAGE_CONTENT_TYPE[content.type]} />
            <ImprovementSection
              improvementData={{
                originalText: content.beforeEdit,
                revisedText: content.afterEdit,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
