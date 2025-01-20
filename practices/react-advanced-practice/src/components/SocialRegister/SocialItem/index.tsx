import { Link } from '@/components/common';

interface SocialItemProps {
  href: string;
  icon: React.ReactNode;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

const SocialItem = ({ href, icon, target = '_blank' }: SocialItemProps) => (
  <li className="list-none flex items-center justify-center bg-light w-[75px] h-[75px] border border-[#e2e8f0] rounded-[15px]">
    <Link href={href} target={target}>
      {icon}
    </Link>
  </li>
);

export default SocialItem;
