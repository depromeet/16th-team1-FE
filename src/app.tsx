import { RouterProvider } from 'react-router';

import { Global } from '@emotion/react';

import { router } from './route';
import { globalStyles } from './styles/global-styles';

function App() {
  return (
    <div>
      <Global styles={globalStyles} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
