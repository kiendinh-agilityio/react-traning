import { render } from '@testing-library/react';
import SocialRegister from '.';

jest.mock('@/components/common/Icons', () => ({
  FacebookIcon: () => <svg data-testid="facebook-icon" />,
  AppleIcon: () => <svg data-testid="apple-icon" />,
  GoogleIcon: () => <svg data-testid="google-icon" />,
}));

describe('SocialRegister', () => {
  test('renders SocialRegister component', () => {
    const { container } = render(<SocialRegister />);

    // Snapshot test
    expect(container).toMatchSnapshot();
  });
});
