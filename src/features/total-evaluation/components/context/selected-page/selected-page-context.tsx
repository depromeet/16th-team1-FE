import { createContext, Dispatch, SetStateAction } from 'react';

interface SelectedPageContextProps {
  selectedPage: string | null;
  setSelectedPage: Dispatch<SetStateAction<string | null>>;
}

export const SelectedPageContext = createContext<SelectedPageContextProps>({
  selectedPage: null,
  setSelectedPage: () => {},
});
