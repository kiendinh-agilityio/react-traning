import { render } from '@testing-library/react';
import Select from '.';

// Import constants
import { ROLES } from '@/constants';

// Mock ArrowSelectIcon component
jest.mock('@/components/common/Icons', () => ({
  ArrowSelectIcon: () => <span>▼</span>,
}));

describe('Select Component - Render', () => {
  it('renders correctly with label and options', () => {
    const { asFragment } = render(
      <Select
        label="Select an option"
        name="select-option"
        optionsList={ROLES}
        value="1"
        onChange={() => {}}
      />,
    );

    // Snapshot test to ensure proper rendering
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders without label', () => {
    const { asFragment } = render(
      <Select name="select-option" optionsList={ROLES} value="1" onChange={() => {}} />,
    );

    // Snapshot test to ensure proper rendering without label
    expect(asFragment()).toMatchSnapshot();
  });
});
