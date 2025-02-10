import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '.';

describe('Header Component', () => {
  const mockNavigate = jest.fn();

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
  }));

  it('renders correctly and matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Header currentPage="Dashboard" />
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the current page title and matches snapshot', () => {
    const { getByText, asFragment } = render(
      <MemoryRouter>
        <Header currentPage="Dashboard" />
      </MemoryRouter>,
    );
    expect(getByText('Dashboard')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
