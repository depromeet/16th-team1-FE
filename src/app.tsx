import { Global } from '@emotion/react';

import TotalEvalutionPage from './features/total-evaluation/total-evaluation-page';
import { globalStyles } from './styles/global-styles';

function App() {
  return (
    <div>
      <Global styles={globalStyles} />
      <TotalEvalutionPage />
    </div>
  );
}

export default App;
