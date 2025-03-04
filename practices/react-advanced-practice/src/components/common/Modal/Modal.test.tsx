import { render, fireEvent } from '@testing-library/react';
import Modal from '.';

describe('Modal Component', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly and matches snapshot', () => {
    const { asFragment } = render(
      <Modal onClose={mockOnClose}>
        <div>Modal Content</div>
      </Modal>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('does not call onClose when clicking inside modal', () => {
    const { asFragment, container } = render(
      <Modal onClose={mockOnClose}>
        <div>Modal Content</div>
      </Modal>,
    );
    const modalContent = container.querySelector('.bg-white');
    if (modalContent) {
      fireEvent.click(modalContent);
    }
    expect(mockOnClose).not.toHaveBeenCalled();
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls onClose when clicking on overlay', () => {
    const { asFragment, container } = render(
      <Modal onClose={mockOnClose}>
        <div>Modal Content</div>
      </Modal>,
    );
    const overlay = container.querySelector('.bg-overlay');
    if (overlay) {
      fireEvent.click(overlay);
    }
    expect(mockOnClose).toHaveBeenCalledTimes(1);
    expect(asFragment()).toMatchSnapshot();
  });

  it('handles stopPropagation correctly', () => {
    const stopPropagationMock = jest.fn();
    const { asFragment, container } = render(
      <Modal onClose={mockOnClose}>
        <div className="modal-content" onClick={(e) => stopPropagationMock(e)}>
          Modal Content
        </div>
      </Modal>,
    );
    const modalContent = container.querySelector('.modal-content');
    if (modalContent) {
      fireEvent.click(modalContent);
    }
    expect(stopPropagationMock).toHaveBeenCalled();
    expect(asFragment()).toMatchSnapshot();
  });
});
