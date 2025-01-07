import { render } from '@testing-library/react';

// Component Logo
import Logo from '.';

describe('Logo Component', () => {
  it('renders with the correct href', () => {
    const { asFragment } = render(<Logo href="/test" color="primary" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the primary icon by default', () => {
    const { asFragment } = render(<Logo href="/" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the secondary icon when type is secondary', () => {
    const { asFragment } = render(<Logo href="/" color="secondary" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
