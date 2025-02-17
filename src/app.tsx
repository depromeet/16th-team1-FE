import { Global } from '@emotion/react';

import FeedbackResultPage from './features/feedback-result/components/FeedbackResult';
import { globalStyles } from './styles/global-styles';

function App() {
  return (
    <div>
      <Global styles={globalStyles} />
      <FeedbackResultPage />
    </div>
  );
}

export default App;
