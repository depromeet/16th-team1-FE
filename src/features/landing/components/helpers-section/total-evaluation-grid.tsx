import { css } from '@emotion/react';

import { theme } from '@/assets/styles/theme';
import Icon from '@/common/components/icon/icon';
import useDeviceType from '@/common/hooks/use-device-type';

import * as styles from './total-evaluation-grid.styles';

export default function TotalEvaluationGrid() {
  const { isMobile } = useDeviceType();

  return (
    <div css={styles.container}>
      <div css={styles.firstLine}>
        <div css={styles.item}>
          <Icon name="pin" width={24} color={theme.colors.SORA[200]} />
          <h3
            css={[
              styles.title,
              (theme) => css`
                color: ${theme.colors.SORA[200]};
              `,
            ]}
          >
            디프님의
            <br /> 포트폴리오 등급은
          </h3>
          <div css={styles.gradeExample}></div>
        </div>
        <div css={styles.item}>
          <Icon name="document-mono" width={24} color="#D7B1FF" />
          <h3
            css={[
              styles.title,
              css`
                color: #d5b2ff;
              `,
            ]}
          >
            포트폴리오
            <br /> 세부 평가 항목의 점수는
          </h3>
          <div css={styles.chartExample}></div>
        </div>
      </div>
      <div css={styles.secondLine}>
        <div css={styles.item}>
          <Icon name="thumb-up-mono" color="#BEFFAE" width={isMobile ? 20 : 28} />
          <h3 css={styles.title}>
            <strong
              css={css`
                color: #beffae;
              `}
            >
              4가지의 강점
            </strong>
            이 돋보여요
          </h3>
          <ul css={styles.list('#4B7F3E')}>
            <li>데이터 기반의 디자인 사고</li>
            <li>비즈니스 임팩트를 창출하는 UX 전략</li>
            <li>스토리텔링이 강한 포트폴리오</li>
            <li>다양한 협업 경험</li>
          </ul>
        </div>
        <div css={styles.item}>
          <Icon name="exclamation-circle-mono" color="#FF7568" width={isMobile ? 20 : 28} />
          <h3 css={styles.title}>
            <strong
              css={css`
                color: #ff7568;
              `}
            >
              3가지 약점
            </strong>
            은 보완하면 좋겠어요
          </h3>
          <ul css={styles.list('#7F3E3E')}>
            <li>UIUX 과정을 시각적으로 추가하기</li>
            <li>사용자 리서치 방법론 보완하기</li>
            <li>프로젝트별 핵심 KPI를 강조하기</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
