import { render } from '@testing-library/react';
import Footer from '.';

describe('Footer Layouts', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
