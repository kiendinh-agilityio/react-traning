import { PurityIcon } from '@/components/common/Icons';

interface LogoProps {
  href: string;
  type?: 'primary' | 'secondary';
}

const Logo = ({ href, type = 'primary' }: LogoProps) => {
  return (
    <a href={href}>
      <PurityIcon variant={type} />
    </a>
  );
};

export default Logo;
