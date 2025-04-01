/**
 * value가 falsy 값일 경우 '-'을 반환 (단, 0은 제외)
 */
export const getValueOrHyphen = (value: number | string | undefined | null) => {
  if (value === null || value === undefined || value === '') return '-';
  return value;
};
