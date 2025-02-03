import { render, fireEvent } from '@testing-library/react';
import SwitchTheme from '.';

// Don't mock the store, directly use the real implementation
describe('SwitchTheme', () => {
  it('matches the snapshot with Light theme', () => {
    // Render the SwitchTheme component with the initial state set to Light
    const { asFragment } = render(<SwitchTheme />);

    // Snapshot of the component with the Light theme
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches the snapshot after theme toggle', () => {
    // Render the SwitchTheme component with the initial state set to Light
    const { asFragment } = render(<SwitchTheme />);

    // Simulate a button click to toggle the theme
    fireEvent.click(document.querySelector('button') as HTMLElement);

    // Take a snapshot after the theme toggle (should now be Dark)
    expect(asFragment()).toMatchSnapshot();
  });
});
