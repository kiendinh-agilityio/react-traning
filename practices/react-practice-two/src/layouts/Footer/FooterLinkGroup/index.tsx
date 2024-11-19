// Import common components
import { Link, Paragraph } from '@/components/common';

// Import types
import { ParagraphVariant, TextSize } from '@/types';

// import components
import { SocialList } from '@/components';

interface LinkItem {
  id: string;
  href: string;
  label: string;
}

interface FooterLinkGroupProps {
  title: string;
  items: LinkItem[];
  hasSocialLinks?: boolean;
}

const FooterLinkGroup = ({ title, items, hasSocialLinks = false }: FooterLinkGroupProps) => {
  const renderFooterLinkGroup = items.map((item) => (
    <li key={item.id}>
      <Link href={item.href} target="_blank" text={item.label} />
    </li>
  ));

  return (
    <div className="text-light">
      <Paragraph
        variant={ParagraphVariant.Bold}
        size={TextSize.Medium}
        text={title}
        className="leading-[25px]"
      />
      <ul className="mt-[35px]">{renderFooterLinkGroup}</ul>
      {hasSocialLinks && <SocialList />}
    </div>
  );
};

export default FooterLinkGroup;
