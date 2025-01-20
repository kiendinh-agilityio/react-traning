import { render } from '@testing-library/react';
import Navbar from '.';

describe('Navbar Component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
