import { useState, useMemo, useCallback } from 'react';

import { theme } from '@/assets/styles/theme';
import Icon from '@/common/components/icon/icon';
import FadeInWrapper from '@/common/components/interaction/fade-in-wrapper';
import useDeviceType from '@/common/hooks/use-device-type';
import useShadowScroll from '@/common/hooks/use-shadow-scroll';

import { detailImprovementData } from '../../common/data';
import { TMP_AWS_IMAGE_BASE_URL } from '../../landing-page';
import { extractImageFilename } from '../../utils/extract-image-file-name';

import * as styles from './detail-improvement.styles';

export default function DetailImprovement() {
  const { isMobile } = useDeviceType();

  const [mainRef, setMainRef] = useState<HTMLElement | null>(null);
  const [leftRef, setLeftRef] = useState<HTMLDivElement | null>(null);
  const [rightRef, setRightRef] = useState<HTMLDivElement | null>(null);

  const { left, right } = useShadowScroll({ mainRef, refs: { left: leftRef, right: rightRef } });

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
    <FadeInWrapper
      additionalStyles={styles.detailImprovementWrapper}
      transitionOptions={{
        delay: 0.5,
      }}
      intersectionOptions={{
        threshold: 0.3,
        triggerOnce: true,
      }}
    >
      {isMobile && <div css={styles.shadowLeft(left)} />}
      {isMobile && <div css={styles.shadowRight(right)} />}
      <ul ref={setMainRef} css={styles.improvementItemWrapper}>
        {isMobile && <div ref={setLeftRef} css={styles.leftSensor} />}
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
        {isMobile && <div ref={setRightRef} css={styles.rightSensor} />}
      </ul>
      <div css={styles.improvementContentWrapper}>
        {currentImprovementData && (
          <>
            {/* <img
            TODO: S3참조 제거
              css={styles.image}
              src={currentImprovementData.image}
              width={624}
              alt={`${currentImprovementData.title} image`}
            /> */}

            <img
              css={styles.image}
              src={`${TMP_AWS_IMAGE_BASE_URL}/${extractImageFilename(currentImprovementData.image)}`}
              width={624}
              alt={`${currentImprovementData.title} image`}
            />

            <div css={styles.improvementTextWrapper}>
              <div css={styles.improvementTitleWrapper}>
                <Icon name="checkbox" color={theme.colors.GRAY[200]} width={isMobile ? 20 : 28} />
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
    </FadeInWrapper>
  );
}
