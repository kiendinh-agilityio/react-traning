import SocialItem from './SocialItem';

// import common icons
import { FacebookIcon, AppleIcon, GoogleIcon } from '@/components/common/Icons';

export const SocialRegister = () => (
  <ul className="flex gap-4 mt-[22px]">
    <SocialItem href="https://facebook.com" icon={<FacebookIcon />} />
    <SocialItem href="https://www.apple.com/vn/" icon={<AppleIcon />} />
    <SocialItem href="https://www.google.com/" icon={<GoogleIcon />} />
  </ul>
);

export default SocialRegister;
