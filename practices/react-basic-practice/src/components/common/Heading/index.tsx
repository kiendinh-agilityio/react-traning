// Import types
import { TextSize } from '@/types';

interface HeadingProps {
  value: string;
  level?: 1 | 2 | 3;
  size?: TextSize;
  className?: string;
}

const Heading = ({
  value,
  level = 1,
  className = '',
  size = TextSize.ExtraLarge,
}: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`text-${size} flex justify-center font-helveticaBold font-bold ${className}`}>
      {value}
    </Tag>
  );
};

export default Heading;
