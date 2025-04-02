export const convertKrDate = (isoString: string) => {
  const date = new Date(isoString);
  const options = {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  } as const;

  // 2025. 03. 27.
  const koreanDate = date.toLocaleString('ko-KR', options).replace(/\.$/, '');

  return koreanDate;
};
