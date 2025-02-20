import { RouterProvider } from 'react-router';

import { globalStyles } from '@assets/styles/global-styles';
import { Global } from '@emotion/react';

import { router } from './route';

function App() {
  return (
    <div>
      <Global styles={globalStyles} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
