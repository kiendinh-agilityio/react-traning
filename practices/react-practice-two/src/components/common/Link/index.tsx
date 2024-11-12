interface LinkProps {
  href: string;
  text?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  icon?: React.ReactNode;
  className?: string;
}

const Link = ({ text, href, className = '', target = '_self', icon }: LinkProps) => (
  <a
    href={href}
    className={`font-regular text-sm leading-[54px] ${className && className}`}
    target={target}
  >
    {text && text}
    {icon && icon}
  </a>
);

export default Link;
