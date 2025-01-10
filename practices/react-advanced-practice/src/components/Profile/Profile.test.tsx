import { render } from '@testing-library/react';
import Profile from '.';

describe('Profile Component', () => {
  const mockProps = {
    fullName: 'Esthera Jackson',
    email: 'esthera@simmmple.com',
    avatarUrl: 'https://phimtat.vn/wp-content/uploads/2023/11/avt-3d.jpg',
  };

  it('renders correctly with valid props', () => {
    const { container, getByText } = render(<Profile {...mockProps} />);

    expect(getByText('Esthera Jackson')).toBeInTheDocument();
    expect(getByText('esthera@simmmple.com')).toBeInTheDocument();

    // Snapshot test
    expect(container).toMatchSnapshot();
  });
});
