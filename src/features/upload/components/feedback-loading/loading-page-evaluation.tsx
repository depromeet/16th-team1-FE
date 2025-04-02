import { useState, useMemo, useCallback } from 'react';

import Icon from '@/common/components/icon/icon';
import FadeInWrapper from '@/common/components/interaction/fade-in-wrapper';
import useDeviceType from '@/common/hooks/use-device-type';
import useShadowScroll from '@/common/hooks/use-shadow-scroll';

import { EVALUATION_OPTIONS } from '../../constants/loading-constant';

import * as styles from './loading-page-evaluation.styles';

export default function LoadingPageEvaluation() {
  const [selectedOption, setSelectedOption] = useState(EVALUATION_OPTIONS[0].key);
  const { isMobile, isTablet } = useDeviceType();

  const [mainRef, setMainRef] = useState<HTMLElement | null>(null);
  const [leftRef, setLeftRef] = useState<HTMLDivElement | null>(null);
  const [rightRef, setRightRef] = useState<HTMLDivElement | null>(null);

  const { left, right } = useShadowScroll({ mainRef, refs: { left: leftRef, right: rightRef } });

  const currentData = useMemo(
    () => EVALUATION_OPTIONS.find((data) => data.key === selectedOption),
    [selectedOption],
  );

  const handleMouseOver = useCallback((itemKey: string) => {
    setSelectedOption(itemKey);
  }, []);

  return (
    <FadeInWrapper
      additionalStyles={styles.contentWrapper}
      intersectionOptions={{
        threshold: 0.3,
        triggerOnce: true,
      }}
    >
      {isMobile && <div css={styles.shadowLeft(left)} />}
      {isMobile && <div css={styles.shadowRight(right)} />}
      <div ref={setMainRef} css={styles.scrollWrapper}>
        {isMobile && <div ref={setLeftRef} css={styles.leftSensor} />}
        <aside css={styles.optionWrapper}>
          {EVALUATION_OPTIONS.map((option) => (
            <div
              key={option.key}
              css={styles.optionButton(selectedOption === option.key)}
              onMouseOver={() => handleMouseOver(option.key)}
            >
              {option.title}
            </div>
          ))}
        </aside>
        {isMobile && <div ref={setRightRef} css={styles.rightSensor} />}
      </div>

      {currentData && (
        <main key={currentData.key} css={styles.mainContent}>
          <img src={currentData.image} alt={currentData.title} css={styles.image} />
          <div css={styles.contentBox}>
            <h2 css={styles.sectionTitle}>
              <Icon name="checkbox" width={isMobile ? 20 : isTablet ? 28 : 24} />
              {currentData.title}
            </h2>
            <div css={styles.descriptionWrapper}>
              <div css={styles.textWrapper}>
                <span css={styles.originalText}>기존 문장</span>
                <p css={styles.text} dangerouslySetInnerHTML={{ __html: currentData.original }} />
              </div>
              <div css={styles.textWrapper}>
                <span css={styles.revisedText}>수정 문장</span>
                <p css={styles.text} dangerouslySetInnerHTML={{ __html: currentData.revised }} />
              </div>
            </div>
          </div>
        </main>
      )}
    </FadeInWrapper>
  );
}
