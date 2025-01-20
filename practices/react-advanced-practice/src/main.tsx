import './utils/wdyr.ts'; // This must be the first import

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import '@radix-ui/themes/styles.css';
import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
