import ImprovementText from '@/features/total-evaluation/components/improvement-section/improvement-text';
import { IMPROVEMENT_CONSTANT } from '@/features/total-evaluation/constants/evaluation-constant';

import * as styles from './improvement-section.styles';

interface ImprovementData {
  beforeEdit: string;
  afterEdit: string;
}

interface ImprovementSectionProps {
  improvementData: ImprovementData;
}

export default function ImprovementSection({ improvementData }: ImprovementSectionProps) {
  return (
    <div css={styles.improvementTextWrapper}>
      <ImprovementText
        label={IMPROVEMENT_CONSTANT.beforeEdit}
        improvementText={improvementData.beforeEdit}
      />
      <ImprovementText
        label={IMPROVEMENT_CONSTANT.afterEdit}
        improvementText={improvementData.afterEdit}
      />
    </div>
  );
}
