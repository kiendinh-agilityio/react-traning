import { Link as LinkBase, LinkProps } from '@radix-ui/themes';

type LinkBaseProps = {
  children: React.ReactNode;
  target?: '_blank' | '_self' | '_parent' | '_top';
} & LinkProps;

const Link = ({ children, href, target = '_self', className }: LinkBaseProps) => (
  <LinkBase href={href} target={target} className={`cursor-pointer ${className}`}>
    {children}
  </LinkBase>
);

export default Link;
