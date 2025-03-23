import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router';

type QueryMap = { [key: string]: string };

/**
 * 여러 쿼리스트링이 모두 일치하는지 여부를 반환하는 훅
 * @param queries 확인할 쿼리스트링 key-value 쌍을 담은 객체
 * @returns 모든 쿼리스트링이 일치하면 true, 아니면 false
 */
export const useQueryStrings = (queries: QueryMap): boolean => {
  const location = useLocation();
  const memoizedQueries = useMemo(() => queries, [JSON.stringify(queries), queries]);
  const [allMatch, setAllMatch] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    let match = true;
    for (const key in memoizedQueries) {
      if (queryParams.get(key) === memoizedQueries[key]) continue;
      match = false;
      break;
    }
    setAllMatch(match);
  }, [location.search, memoizedQueries]);

  return allMatch;
};
