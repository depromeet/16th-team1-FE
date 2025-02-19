import { EvaluationCriteria } from '../types/evaluation-types';

export const ImprovementConstant = {
  originalText: '기존문장',
  revisedText: '수정',
} as const;

/** 전체 평가 항목에 해당하는 라벨 */
export const CRITERIA_LABEL: Record<EvaluationCriteria, string> = {
  jobFit: '직무 적합도',
  logicalThinking: '논리적 사고',
  sentenceReadability: '문장 가독성',
  layoutReadability: '레이아웃 가독성',
};

/** 평가 항목에 해당하는 라벨 */
export const EVALUATION_LABEL: Record<string, string> = {
  strengths: '강점 분석',
  solutions: '개선할 점 및 해결방안',
  positives: '이런 점이 좋아요',
  negatives: '이런 점이 아쉬워요',
};
