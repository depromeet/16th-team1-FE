/** 평가 항목의 종류를 나타내는 타입 */
export type EvaluationCriteria =
  | 'jobFit' // 직무 적합도
  | 'logicalThinking' // 논리적 사고
  | 'sentenceReadability' // 문장 가독성
  | 'layoutReadability'; // 레이아웃 가독성

/** 각 평가 항목에 대한 세부 데이터를 나타내는 타입 */
export type EvaluationItemsType = Record<
  EvaluationCriteria,
  {
    text: string; // 해당 평가 항목에 대한 설명
    score: number; // 해당 평가 항목에 대한 점수
  }
>;
