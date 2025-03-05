import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '.';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Header Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

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

  it('calls navigate with /signin when logout button is clicked', () => {
    const { getByLabelText, asFragment } = render(
      <MemoryRouter>
        <Header currentPage="Dashboard" />
      </MemoryRouter>,
    );

    const logoutButton = getByLabelText('Button logout');
    fireEvent.click(logoutButton);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/signin');
    expect(asFragment()).toMatchSnapshot();
  });
});
