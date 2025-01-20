import { render } from '@testing-library/react';
import LoadingSpinner from '.';

describe('LoadingSpinner component', () => {
  it('matches the snapshot', () => {
    const { container } = render(<LoadingSpinner />);

    expect(container).toMatchSnapshot();
  });
});
