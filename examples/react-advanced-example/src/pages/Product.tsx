import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { TableStudent } from '@/components';

const queryClient = new QueryClient();

const ProductPage = () => (
  <div
    style={{
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
    }}
  >
    <h1
      style={{
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '16px',
        textAlign: 'center',
      }}
    >
      Student List
    </h1>
    <QueryClientProvider client={queryClient}>
      <TableStudent />
    </QueryClientProvider>
  </div>
);

export default ProductPage;
