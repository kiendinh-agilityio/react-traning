import { render, screen, fireEvent } from '@testing-library/react';
import SidebarItem from '.';
import { IconWrapper } from '@/components/common/';
import { DashboardIcon } from '@/components/common/Icons';

// Mock IconWrapper component
jest.mock('@/components/common/', () => ({
  IconWrapper: jest.fn(({ icon }) => <div data-testid="icon-wrapper">{icon}</div>),
}));

describe('SidebarItem', () => {
  const defaultProps = {
    icon: <DashboardIcon />,
    label: 'Home',
    active: false,
    href: '/home',
  };

  it('renders correctly and matches snapshot', () => {
    const { asFragment } = render(<SidebarItem {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with correct label and link', () => {
    render(<SidebarItem {...defaultProps} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/home');
  });

  it('renders active class when active is true', () => {
    render(<SidebarItem {...defaultProps} active={true} />);
    expect(screen.getByRole('listitem')).toHaveClass('bg-white text-dark');
  });

  it('applies hover styles on mouse enter', () => {
    render(<SidebarItem {...defaultProps} />);
    const listItem = screen.getByRole('listitem');

    fireEvent.mouseEnter(listItem);
    expect(listItem).toHaveClass('bg-white text-dark');

    fireEvent.mouseLeave(listItem);
    expect(listItem).not.toHaveClass('bg-white text-dark');
  });

  it('passes correct props to IconWrapper', () => {
    render(<SidebarItem {...defaultProps} active={true} />);
    expect(IconWrapper).toHaveBeenCalledWith(
      expect.objectContaining({ active: true }),
      expect.any(Object),
    );
  });
});
