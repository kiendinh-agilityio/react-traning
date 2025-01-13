import { render } from '@testing-library/react';
import Status from '.';

describe('Status Component', () => {
  const renderComponent = (value: string) => render(<Status value={value} />);

  it('renders correctly with "Active" value', () => {
    const { container, getByText } = renderComponent('Active');
    expect(getByText('Active')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('border-active bg-active');
    expect(container).toMatchSnapshot();
  });

  it('renders correctly with "Inactive" value', () => {
    const { container, getByText } = renderComponent('Inactive');
    expect(getByText('Inactive')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('border-inactive bg-inactive');
    expect(container).toMatchSnapshot();
  });
});
