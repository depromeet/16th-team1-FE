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
