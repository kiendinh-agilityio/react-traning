import { PurityIcon } from '@/components/common/Icons';

// import constants
import { COLORS_LOGO } from '@/constants';

interface LogoProps {
  href: string;
  ariaLabel?: string;
  color?: 'primary' | 'secondary';
}

const Logo = ({ href, color = 'primary', ariaLabel = 'Logo' }: LogoProps) => {
  const fillColor = color === 'primary' ? COLORS_LOGO.PRIMARY : COLORS_LOGO.SECONDARY;

  return (
    <a href={href} aria-label={ariaLabel}>
      <PurityIcon fillColor={fillColor} />
    </a>
  );
};

export default Logo;
