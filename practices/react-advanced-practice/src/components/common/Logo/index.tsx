import { PurityPrimaryIcon, PuritySecondaryIcon } from '@/components/common/Icons';

interface LogoProps {
  href: string;
  type?: 'primary' | 'secondary';
}

const Logo = ({ href, type = 'primary' }: LogoProps) => {
  const Icons = type === 'primary' ? PurityPrimaryIcon : PuritySecondaryIcon;

  return (
    <a href={href}>
      <Icons />
    </a>
  );
};

export default Logo;
