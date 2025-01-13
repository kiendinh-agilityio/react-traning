import { render } from '@testing-library/react';

// Component
import Text from '.';

describe('Text Component', () => {
  it('should match with snapshot', () => {
    const { container } = render(
      <Text content="This is a text" className="font-regular" />,
    );

    expect(container).toMatchSnapshot();
  });
});
