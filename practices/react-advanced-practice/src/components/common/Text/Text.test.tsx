import { render } from '@testing-library/react';

// Component
import Text from '.';

describe('Text Component', () => {
  it('should match with snapshot', () => {
    const { container } = render(<Text className="font-regular">This is a text</Text>);

    expect(container).toMatchSnapshot();
  });
});
