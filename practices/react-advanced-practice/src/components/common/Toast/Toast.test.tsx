import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Toast from '.';

jest.mock('@/components/common/Icons', () => ({
  CloseIcon: () => <div data-testid="close-icon">CloseIcon</div>,
  SuccessIcon: () => <div data-testid="success-icon">SuccessIcon</div>,
  FailedIcon: () => <div data-testid="failed-icon">FailedIcon</div>,
}));

describe('Toast Component', () => {
  it('renders correctly with type success', () => {
    const { container } = render(
      <Toast type="success" message="Success message" isOpen={true} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders correctly with type failed', () => {
    const { container } = render(
      <Toast type="failed" message="Failed message" isOpen={true} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('closes when close button is clicked', () => {
    const onCloseMock = jest.fn();

    const { getByTestId } = render(
      <Toast
        type="success"
        message="Click close test"
        isOpen={true}
        onClose={onCloseMock}
      />,
    );

    fireEvent.click(getByTestId('close-icon'));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
