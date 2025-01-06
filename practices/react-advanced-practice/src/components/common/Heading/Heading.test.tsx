import { render } from '@testing-library/react';

// Component Heading
import Heading from '.';

describe('Heading Component', () => {
  it('should match with snapshot', () => {
    const { container } = render(<Heading text="This is a heading" />);

    expect(container).toMatchSnapshot();
  });
});
