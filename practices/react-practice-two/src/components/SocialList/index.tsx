import SocialItem from './SocialItem';

// import common icons
import { FacebookIcon, TwitterIcon, InstagramIcon } from '@/components/common/Icons';

export const SocialList = () => (
  <ul className="flex gap-4 mt-[22px]">
    <SocialItem href="https://facebook.com" icon={<FacebookIcon />} />
    <SocialItem href="https://twitter.com" icon={<TwitterIcon />} />
    <SocialItem href="https://instagram.com" icon={<InstagramIcon />} />
  </ul>
);

export default SocialList;
