import { ReactNode, useState } from 'react';

import { SelectedPageContext } from './selected-page-context';

const SelectedPageProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPage, setSelectedPage] = useState<string | null>(null);

  return (
    <SelectedPageContext.Provider value={{ selectedPage, setSelectedPage }}>
      {children}
    </SelectedPageContext.Provider>
  );
};

export default SelectedPageProvider;
