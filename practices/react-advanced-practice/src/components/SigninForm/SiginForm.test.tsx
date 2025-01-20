import { render } from '@testing-library/react';
import SigninForm from '.';

describe('SigninForm Component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<SigninForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});
