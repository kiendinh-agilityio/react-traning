import { TextSize } from '@/types';

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
  size?: TextSize;
}

const Heading = ({ children, level = 2, size = TextSize.Large }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={`${size} font-bold text-primary`}>{children}</Tag>;
};

export default Heading;
