import { render } from '@testing-library/react';
import SignupForm from '.';

describe('SignupForm Component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<SignupForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});
