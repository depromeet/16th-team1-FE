import { useContext } from 'react';

import { SelectedPageContext } from './selected-page-context';

export const useSelectedPageContext = () => {
  const context = useContext(SelectedPageContext);
  if (context === null) {
    throw new Error('useSelectedPageContext는 SelectedPageContext내부에 선언돼야 합니다.');
  }
  return context;
};
