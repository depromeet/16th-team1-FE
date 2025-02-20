import ImprovementText from '@/features/total-evaluation/components/improvement-section/improvement-text';
import { IMPROVEMENT_CONSTANT } from '@/features/total-evaluation/constants/evaluation-constant';

import * as styles from './improvement-section.styles';

interface ImprovementData {
  originalText: string;
  revisedText: string;
}

interface ImprovementSectionProps {
  improvementData: ImprovementData;
}

export default function ImprovementSection({ improvementData }: ImprovementSectionProps) {
  return (
    <div css={styles.improvementTextWrapper}>
      <ImprovementText
        label={IMPROVEMENT_CONSTANT.originalText}
        improvementText={improvementData.originalText}
      />
      <ImprovementText
        label={IMPROVEMENT_CONSTANT.revisedText}
        improvementText={improvementData.revisedText}
      />
    </div>
  );
}
