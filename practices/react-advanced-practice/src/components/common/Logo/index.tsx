import { PurityIcon } from '@/components/common/Icons';

// import constants
import { COLORS_LOGO } from '@/constants';

interface LogoProps {
  href: string;
  color?: 'primary' | 'secondary';
}

const Logo = ({ href, color = 'primary' }: LogoProps) => {
  const fillColor = color === 'primary' ? COLORS_LOGO.PRIMARY : COLORS_LOGO.SECONDARY;

  return (
    <a href={href}>
      <PurityIcon fillColor={fillColor} />
    </a>
  );
};

export default Logo;
