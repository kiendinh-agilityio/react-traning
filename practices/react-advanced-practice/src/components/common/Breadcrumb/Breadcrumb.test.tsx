import { render } from '@testing-library/react';
import Breadcrumb from '.';

describe('Breadcrumb component', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Breadcrumb currentPage="Tables" label="Pages" />);

    expect(container).toMatchSnapshot();
  });
});
