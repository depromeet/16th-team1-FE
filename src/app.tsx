import { RouterProvider } from 'react-router';

import { globalStyles } from '@assets/styles/global-styles';
import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { router } from './route';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Global styles={globalStyles} />
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
