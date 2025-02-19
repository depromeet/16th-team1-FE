import ImprovementText from './improvement-text';
import ImprovementTitle from './improvement-title';
import { ImprovementConstant } from '../../constants/evaluation-constant';

import * as styles from './improvement-section.styles';

interface ImprovementData {
  improvementTitle: string;
  originalText: string;
  revisedText: string;
}

interface ImprovementSectionProps {
  improvementData: ImprovementData;
}

export default function ImprovementSection({ improvementData }: ImprovementSectionProps) {
  return (
    <div css={styles.improvementSectionWrapper}>
      <ImprovementTitle improvementTitle={improvementData.improvementTitle} />
      <div css={styles.improvementTextWrapper}>
        <ImprovementText
          label={ImprovementConstant.originalText}
          improvementText={improvementData.originalText}
        />
        <ImprovementText
          label={ImprovementConstant.revisedText}
          improvementText={improvementData.revisedText}
        />
      </div>
    </div>
  );
}
