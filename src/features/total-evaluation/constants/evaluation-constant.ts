import { EvaluationCriteria } from '@/features/total-evaluation/types/evaluation-types';

import { FeedbackContentType } from '../services/use-get-portfolio-feedback';

export const IMPROVEMENT_CONSTANT = {
  beforeEdit: '기존 문장',
  afterEdit: '수정 문장',
} as const;

export const LOGICAL_LEAP_CONSTANT = {
  beforeEdit: '논리적 오류',
  afterEdit: '개선 방향',
} as const;

/** 전체 평가 항목에 해당하는 라벨 */
export const CRITERIA_LABEL: Record<EvaluationCriteria, string> = {
  jobFit: '직무 적합도',
  logicalThinking: '논리적 사고',
  writingClarity: '문장 가독성',
  layoutReadability: '레이아웃 가독성',
};

/** 평가 항목에 해당하는 라벨 */
export const EVALUATION_LABEL: Record<string, string> = {
  strengths: '강점 분석',
  improvements: '개선할 점 및 해결방안',
  positives: '이런 부분이 좋아요',
  negatives: '이런 부분이 아쉬워요',
};

/** 장표별 상세 평가 항목에 해당하는 라벨 */
export const FEEDBACK_PER_PAGE_CONTENT_TYPE: Record<FeedbackContentType, string> = {
  TRANSLATION_OR_AWKWARD: '번역체/어색한 표현',
  LENGTH_OR_READABILITY: '문장이 길거나 가독성이 떨어지는 표현 수정',
  READABILITY_IMPROVEMENT: '가독성 개선',
  LOGICAL_LEAP: '논리적 비약',
  REDUNDANCY_OR_CLARITY: '불필요한 반복 및 의미 명확화',
};
