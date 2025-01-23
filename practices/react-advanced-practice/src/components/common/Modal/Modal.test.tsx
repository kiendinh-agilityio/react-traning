import { render } from '@testing-library/react';
import Modal from '.';

describe('Modal Component', () => {
  const mockOnClose = jest.fn();

  it('renders correctly and matches snapshot', () => {
    const { asFragment } = render(
      <Modal onClose={mockOnClose}>
        <div>Modal Content</div>
      </Modal>,
    );

    // Match the snapshot
    expect(asFragment()).toMatchSnapshot();
  });
});
