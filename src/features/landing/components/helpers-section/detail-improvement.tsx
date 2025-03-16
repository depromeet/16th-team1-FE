import { useState, useMemo, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

import { theme } from '@/assets/styles/theme';
import Icon from '@/common/components/icon/icon';
import FadeInDiv from '@/common/components/interaction/fade-in-div';
import useDeviceType from '@/common/hooks/use-device-type';

import { detailImprovementData } from '../../common/data';

import * as styles from './detail-improvement.styles';

export default function DetailImprovement() {
  const { ref: detailImprovementRef, inView: detailImprovementInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { isMobile } = useDeviceType();

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
    <FadeInDiv
      ref={detailImprovementRef}
      inView={detailImprovementInView}
      delay={0.5}
      additionalStyles={styles.detailImprovementWrapper}
    >
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
              <div css={styles.improvementTitleWrapper}>
                <Icon name="checkIcon" color={theme.colors.GRAY[200]} width={isMobile ? 20 : 28} />
                <span>{currentImprovementData.cardTitle ?? currentImprovementData.title}</span>
              </div>
              <div css={styles.improvementSection}>
                <div css={styles.improvementDetailTextWrapper}>
                  <span css={styles.improvementCategory(theme.colors.RED[400])}>기존 문장</span>
                  <p css={styles.detailText}>{currentImprovementData.originalText}</p>
                </div>
                <div css={styles.improvementDetailTextWrapper}>
                  <span css={styles.improvementCategory(theme.colors.GREEN[400])}>수정 문장</span>
                  <p css={styles.detailText}>{currentImprovementData.revisedText}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </FadeInDiv>
  );
}
