interface BoxItemProps {
  children: React.ReactNode;
  className?: string;
}

const Box = ({ children, className = '' }: BoxItemProps) => (
  <div className={`flex-1 py-[11px] ${className}`}>{children}</div>
);

export default Box;
