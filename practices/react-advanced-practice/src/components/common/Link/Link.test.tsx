import { render } from '@testing-library/react';

// Component Link
import Link from '.';

describe('Link Component', () => {
  it('should match with snapshot', () => {
    const { container } = render(<Link href="#" children="Blog" />);

    expect(container).toMatchSnapshot();
  });
});
