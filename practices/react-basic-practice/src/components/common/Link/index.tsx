interface LinkProps {
  href: string;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  text: string;
}

const Link = ({ href, className = '', target = '_self', text }: LinkProps) => (
  <a href={href} className={className} target={target}>
    {text}
  </a>
);

export default Link;
