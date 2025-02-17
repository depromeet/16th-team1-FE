import { criteriaLabelConfig } from '../config/evaluation-config';
import { EvaluationCriteria, EvaluationItemsType } from '../types/evaluation-types';

/**
 * 전체 평가 항목 데이터를 받아서 각 항목에 해당하는 label, text, score을 포함한 객체 배열로 변환하는 함수
 * @param evaluationItems - 각 평가 항목에 대한 데이터
 * @returns 평가 항목에 대한 라벨, 설명, 점수 정보를 포함한 객체 배열
 */
export const getEvaluationData = (evaluationItems: EvaluationItemsType) => {
  return Object.entries(evaluationItems).map(([key, value]) => ({
    criteria: key as EvaluationCriteria,
    label: criteriaLabelConfig[key as EvaluationCriteria],
    ...value,
  }));
};
