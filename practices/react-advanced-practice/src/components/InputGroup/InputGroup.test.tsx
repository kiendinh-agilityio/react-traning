import { render } from '@testing-library/react';
import InputGroup from '.';

describe('InputGroup Component', () => {
  const mockOnChange = jest.fn();
  const mockOnBlur = jest.fn();

  it('renders correctly and matches snapshot', () => {
    const { asFragment } = render(
      <InputGroup
        label="Email Address"
        name="email"
        type="email"
        value=""
        placeholder="Enter your email"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />,
    );

    // Match the snapshot
    expect(asFragment()).toMatchSnapshot();
  });
});
