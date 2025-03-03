import * as commonStyles from '@features/total-evaluation/total-evaluation-page.styles';

import { theme } from '@/assets/styles/theme';
import Icon from '@/common/components/icon/icon';
import Spacing from '@/common/components/spacing/spacing';

import { overallEvaluationData } from '../../common/data';
import { EVALUATION_LABEL } from '../../constants/evaluation-constant';
import EvaluationChart from '../evaluation-chart/evaluation-chart';
import EvaluationSummary from '../evaluation-summary/evaluation-summary';
import EvaluationTable from '../evaluation-table/evaluation-table';
import EvaluationTitle from '../evaluation-title/evaluation-title';
import NestedList, { NestedListItem } from '../nested-list/nested-list';

import * as styles from './overall-evaluation.styles';

export default function OverallEvaluation() {
  const { overallEvaluation, strengths, improvements } = overallEvaluationData;

  const { summary, overallEvaluationGrade, ...evaluationItems } = overallEvaluation;

  return (
    <div css={styles.overallEvaluationWrapper}>
      <section css={styles.summaryWrapper}>
        <h2 css={styles.summaryTitle}>
          포트폴리오 전체 평가 <Icon name="pin" width={21} color={theme.colors.GRAY[300]} />
        </h2>

        <div css={styles.flexColumn}>
          <EvaluationSummary evaluationSummary={summary} />
          <Spacing size={4.8} />
          <EvaluationChart
            overallEvaluationGrade={overallEvaluationGrade}
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
        <EvaluationSection
          titleKey="improvements"
          iconName="fix"
          color="#D6AA59"
          listItems={improvements}
        />
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
