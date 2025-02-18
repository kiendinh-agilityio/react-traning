import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

jest.mock('@/pages/Signin', () => () => <div>Signin Page</div>);
jest.mock('@/pages/Signup', () => () => <div>Signup Page</div>);
jest.mock('@/pages/Home', () => () => <div>Home Page</div>);

const queryClient = new QueryClient();

describe('App', () => {
  it('renders the App component', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );

    expect(screen.getByText(/Signin Page|Signup Page|Home Page/)).toBeInTheDocument();
  });
});
