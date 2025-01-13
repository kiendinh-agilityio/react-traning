import { render } from '@testing-library/react';

// Components
import Avatar from '.';

describe('Avatar component', () => {
  it('should render with A fallback', () => {
    const { container } = render(<Avatar fallback={'A'} />);
    expect(container).toMatchSnapshot();
  });
});
