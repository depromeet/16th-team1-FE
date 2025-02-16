import { EvaluationCriteria } from '../types/evaluationTypes';

/** 전체 평가 항목에 해당하는 라벨 */
export const criteriaLabelConfig: Record<EvaluationCriteria, string> = {
  jobFit: '직무 적합도',
  logicalThinking: '논리적 사고',
  sentenceReadability: '문장 가독성',
  layoutReadability: '레이아웃 가독성',
};
