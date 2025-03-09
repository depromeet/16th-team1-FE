import * as commonStyles from '@features/total-evaluation/total-evaluation-page.styles';

import { theme } from '@/assets/styles/theme';
import Icon from '@/common/components/icon/icon';
import Spacing from '@/common/components/spacing/spacing';

import { EVALUATION_LABEL } from '../../constants/evaluation-constant';
import { OverallEvaluationType } from '../../services/use-get-portfolio-feedback';
import EvaluationChart from '../evaluation-chart/evaluation-chart';
import EvaluationSummary from '../evaluation-summary/evaluation-summary';
import EvaluationTable from '../evaluation-table/evaluation-table';
import EvaluationTitle from '../evaluation-title/evaluation-title';
import NestedList, { NestedListItem } from '../nested-list/nested-list';
import SummaryTitle from '../summary-title/summary-title';

import * as styles from './overall-evaluation.styles';

export type GradeType = 'A' | 'B' | 'C' | 'D';

interface OverallEvaluationProps {
  overallEvaluation: OverallEvaluationType;
}

export default function OverallEvaluation({ overallEvaluation }: OverallEvaluationProps) {
  const { summary, strengths, improvements, ...evaluationItems } = overallEvaluation;

  const GRADE_THRESHOLDS: { threshold: number; grade: GradeType }[] = [
    { threshold: 65, grade: 'D' },
    { threshold: 75, grade: 'C' },
    { threshold: 85, grade: 'B' },
  ];

  const getOverallGrade = () => {
    const scores = Object.values(evaluationItems).map((item) => item.score);
    const evaluationItemCount = scores.length;

    const totalSum = scores.reduce((acc, curr) => acc + curr, 0);
    const average = Math.round(totalSum / evaluationItemCount);

    for (const { threshold, grade } of GRADE_THRESHOLDS) {
      if (average < threshold) return grade;
    }

    return 'A';
  };

  return (
    <div css={styles.overallEvaluationWrapper}>
      <section css={styles.summaryWrapper}>
        <SummaryTitle title="포트폴리오 종합 평가" />

        <div css={styles.flexColumn}>
          <EvaluationSummary evaluationSummary={summary} />
          <Spacing size={4.8} />
          <EvaluationChart
            overallEvaluationGrade={getOverallGrade()}
            evaluationItems={evaluationItems}
          />
          <Spacing size={6} />
          <EvaluationTable evaluationItems={evaluationItems} />
        </div>
      </section>

      <div css={styles.analysisWrapper}>
        <EvaluationSection
          titleKey="strengths"
          iconName="strength"
          color={theme.colors.SORA[400]}
          listItems={strengths}
        />
        <hr css={commonStyles.hr} />
        <EvaluationSection
          titleKey="improvements"
          iconName="fix"
          color="#D6AA59"
          listItems={improvements}
        />
        <hr css={commonStyles.hr} />
      </div>
    </div>
  );
}

interface EvaluationSectionProps {
  titleKey: string;
  iconName: string;
  color: string;
  listItems: NestedListItem[];
}

function EvaluationSection({ titleKey, iconName, color, listItems }: EvaluationSectionProps) {
  return (
    <section css={commonStyles.evaluationSection('2.4rem')}>
      <EvaluationTitle
        title={EVALUATION_LABEL[titleKey]}
        icon={<Icon name={iconName} color={color} />}
        color={color}
      />
      <NestedList listItems={listItems} />
    </section>
  );
}
