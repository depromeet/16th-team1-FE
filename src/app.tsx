import { Suspense } from 'react';
import { RouterProvider } from 'react-router';

import { globalStyles } from '@assets/styles/global-styles';
import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { theme } from './assets/styles/theme';
import SelectedPageProvider from './features/total-evaluation/components/context/selected-page/selected-page-provider';
import SidebarProvider from './features/total-evaluation/components/context/sidebar/sidebar-provider';
import { router } from './route';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={process.env.NODE_ENV === 'development'} />

      <ThemeProvider theme={theme}>
        <SidebarProvider>
          <SelectedPageProvider>
            <Global styles={globalStyles} />

            {/* route 단위로 lazy loading을 적용함으로써 임시 Suspense 적용 */}
            <Suspense fallback={<></>}>
              <RouterProvider router={router} />
            </Suspense>
          </SelectedPageProvider>
        </SidebarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
