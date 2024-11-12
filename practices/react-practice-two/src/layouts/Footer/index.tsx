// import FooterLinkGroup
import FooterLinkGroup from './FooterLinkGroup';

// import components
import { SocialList, Paragraph } from '@/components/common';

// import image
import { FooterImage } from '@/assets/images';

// import constants
import { ABOUT_LIST, RESOURCES_LIST, LEGALS_LIST } from '@/constants';

// import utils
import { currentYear } from '@/utils';

// import types
import { TextSize } from '@/types';

const Footer = () => (
  <footer className="container bg-primary pt-[99px] px-[196px] pb-[30px] relative flex flex-col justify-end">
    <img src={FooterImage} alt="Footer Banner" className="absolute left-0 bottom-16" />
    <div className="flex flex-col items-end">
      <div className="flex justify-between gap-[113px]">
        <FooterLinkGroup title="About" items={ABOUT_LIST} />
        <FooterLinkGroup title="Resources" items={RESOURCES_LIST} />
        <FooterLinkGroup title="Legals" items={LEGALS_LIST} />
      </div>
      <SocialList />
    </div>
    <Paragraph
      size={TextSize.Small}
      text={`© Copyright ${currentYear}. All rights reserved.`}
      className="text-light leading-[24px] text-center mt-[71px]"
    />
  </footer>
);

export default Footer;
