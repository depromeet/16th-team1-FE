import { useContext } from 'react';

import { SidebarContext } from './sidebar-context';

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (context === null) {
    throw new Error('useSidebarContext는 SidebarProvider내부에 선언돼야 합니다.');
  }
  return context;
};
