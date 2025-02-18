import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeMode } from '@/types';
import Home from '.';

// Mock Zustand store
jest.mock('@/stores', () => ({
  useThemeStore: jest.fn(() => ({
    theme: ThemeMode.Light,
    setTheme: jest.fn(),
  })),
}));

// Create a test QueryClient
const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

describe('Home Component', () => {
  it('renders without crashing', () => {
    const queryClient = createTestQueryClient();
    const { container, asFragment } = render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </MemoryRouter>,
    );
    expect(container).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
