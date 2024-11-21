interface LinkProps {
  href: string;
  children: React.ReactNode;
  target?: '_blank' | '_self' | '_parent' | '_top';
  className?: string;
}

const Link = ({ children, href, className = '', target = '_self' }: LinkProps) => (
  <a
    href={href}
    className={`font-regular text-sm leading-[54px] ${className && className}`}
    target={target}
  >
    {children}
  </a>
);

export default Link;
