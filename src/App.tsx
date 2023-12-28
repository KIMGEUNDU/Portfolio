import router from '@/routes';
import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import theme from 'style/theme';
import { ThemeProvider } from 'styled-components';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 3,
    },
  },
});

function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Suspense fallback={'로딩중'}>
              <RouterProvider router={router} />
            </Suspense>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </ThemeProvider>
      </HelmetProvider>
      <Toaster />
    </>
  );
}

export default App;
