import { render } from '@testing-library/react';
import Sidebar from '.';

describe('Sidebar Component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Sidebar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
