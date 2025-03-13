import { useState } from 'react';

import Icon from '@/common/components/icon/icon';
import useBreakpoint from '@/common/hooks/use-break-point';

import { EVALUATION_OPTIONS } from '../../constants/loading-constant';
import useHorizontalScroll from '../../hooks/useHorizontalScroll';

import * as styles from './loading-page-evaluation.styles';

export default function LoadingPageEvaluation() {
  const [selectedOption, setSelectedOption] = useState(EVALUATION_OPTIONS[0].key);
  const breakpoint = useBreakpoint();
  const iconSize = breakpoint === 'mobile' ? 20 : breakpoint === 'tablet' ? 28 : 24;
  const { ref, isDragging, onDragStart, onThrottleDragMove, onDragEnd } = useHorizontalScroll();

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
            onClick={() => setSelectedOption(option.key)}
          >
            {option.title}
          </div>
        ))}
      </aside>

      {EVALUATION_OPTIONS.map(
        (option) =>
          option.key === selectedOption && (
            <main key={option.key} css={styles.mainContent}>
              <img src={option.image} alt={option.title} css={styles.image} />
              <div css={styles.contentBox}>
                <h2 css={styles.sectionTitle}>
                  <Icon name="checkIcon" width={iconSize} />
                  {option.title}
                </h2>
                <div css={styles.descriptionWrapper}>
                  <div css={styles.textWrapper}>
                    <span css={styles.originalText}>기존 문장</span>
                    <p css={styles.text} dangerouslySetInnerHTML={{ __html: option.original }} />
                  </div>
                  <div css={styles.textWrapper}>
                    <span css={styles.revisedText}>수정 문장</span>
                    <p css={styles.text} dangerouslySetInnerHTML={{ __html: option.revised }} />
                  </div>
                </div>
              </div>
            </main>
          ),
      )}
    </div>
  );
}
