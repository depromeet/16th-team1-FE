import { useState, useMemo, useCallback } from 'react';

import ImprovementSection from '@/features/total-evaluation/components/improvement-section/improvement-section';
import ImprovementTitle from '@/features/total-evaluation/components/improvement-title/improvement-title';

import { detailImprovementData } from '../../common/data';

import * as styles from './detail-improvement.styles';

export default function DetailImprovement() {
  const [currentImprovementKey, setCurrentImprovementKey] = useState(
    detailImprovementData[0].title,
  );

  const currentImprovementData = useMemo(
    () => detailImprovementData.find((data) => data.title === currentImprovementKey),
    [currentImprovementKey],
  );

  const handleMouseOver = useCallback((itemTitle: string) => {
    setCurrentImprovementKey(itemTitle);
  }, []);

  return (
    <div css={styles.detailImprovementWrapper}>
      <ul css={styles.improvementItemWrapper}>
        {detailImprovementData.map(({ title }) => (
          <li
            key={title}
            css={styles.improvementItemTitle}
            onMouseOver={() => handleMouseOver(title)}
            data-is-current={title === currentImprovementKey}
          >
            {title}
          </li>
        ))}
      </ul>
      <div css={styles.improvementContentWrapper}>
        {currentImprovementData && (
          <>
            <img
              css={styles.image}
              src={currentImprovementData.image}
              width={624}
              alt={`${currentImprovementData.title} image`}
            />
            <div css={styles.improvementTextWrapper}>
              <ImprovementTitle
                improvementTitle={currentImprovementData.cardTitle ?? currentImprovementData.title}
              />
              <ImprovementSection
                improvementData={{
                  originalText: currentImprovementData.originalText,
                  revisedText: currentImprovementData.revisedText,
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
