/**
 * 글로벌 모듈에서 선언하는 setTimeout ID
 * 모든 페이지에서 공통적으로 오직 해당 setTimeout ID만 참조
 */
let refreshTimerId: ReturnType<typeof setTimeout> | null = null;

export const getRefreshTimerId = () => refreshTimerId;
export const setRefreshTimerId = (id: ReturnType<typeof setTimeout> | null) => {
  refreshTimerId = id;
};
export const clearGlobalRefreshTimer = () => {
  if (refreshTimerId) {
    clearTimeout(refreshTimerId);
    refreshTimerId = null;
  }
};
