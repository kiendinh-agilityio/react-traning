import { Link } from '@/components/common';

interface SocialItemProps {
  href: string;
  icon: React.ReactNode;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

const SocialItem = ({ href, icon, target = '_blank' }: SocialItemProps) => (
  <li className="list-none">
    <Link
      href={href}
      icon={icon}
      target={target}
      className={`flex items-center justify-center bg-light w-[32px] h-[32px] border border-primary rounded-full`}
    />
  </li>
);

export default SocialItem;
