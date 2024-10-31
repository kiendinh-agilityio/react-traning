import { TextSize } from '@/types';

interface HeadingProps {
  text: string;
  level?: 1 | 2 | 3;
  size?: TextSize;
  spanContent?: string;
  className?: string;
}

const Heading = ({
  level = 2,
  size = TextSize.Large,
  text,
  spanContent,
  className,
}: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`text-${size} font-bold text-primary ${className}`}>
      {spanContent && <span className="font-light">{spanContent}</span>} {text}
    </Tag>
  );
};

export default Heading;
