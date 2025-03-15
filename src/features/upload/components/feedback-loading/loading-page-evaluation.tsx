import { useState, useMemo, useCallback } from 'react';

import Icon from '@/common/components/icon/icon';
import useDeviceType from '@/common/hooks/use-device-type';

import { EVALUATION_OPTIONS } from '../../constants/loading-constant';
import useHorizontalScroll from '../../hooks/useHorizontalScroll';

import * as styles from './loading-page-evaluation.styles';

export default function LoadingPageEvaluation() {
  const [selectedOption, setSelectedOption] = useState(EVALUATION_OPTIONS[0].key);
  const { isMobile, isTablet } = useDeviceType();
  const { ref, isDragging, onDragStart, onThrottleDragMove, onDragEnd } = useHorizontalScroll();

  const currentData = useMemo(
    () => EVALUATION_OPTIONS.find((data) => data.key === selectedOption),
    [selectedOption],
  );

  const handleMouseOver = useCallback((itemKey: string) => {
    setSelectedOption(itemKey);
  }, []);

  return (
    <div css={styles.contentWrapper}>
      <aside
        css={styles.optionWrapper}
        ref={ref}
        onMouseDown={onDragStart}
        onMouseMove={isDragging ? onThrottleDragMove : undefined}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
      >
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

      {currentData && (
        <main key={currentData.key} css={styles.mainContent}>
          <img src={currentData.image} alt={currentData.title} css={styles.image} />
          <div css={styles.contentBox}>
            <h2 css={styles.sectionTitle}>
              <Icon name="checkIcon" width={isMobile ? 20 : isTablet ? 28 : 24} />
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
    </div>
  );
}
