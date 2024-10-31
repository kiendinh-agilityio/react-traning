import { TextSize } from '@/types';

interface HeadingProps {
  text: string;
  level?: 1 | 2 | 3;
  size?: TextSize;
  spanContent?: string;
}

const Heading = ({ level = 2, size = TextSize.Large, text, spanContent }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`text-${size} font-bold text-primary`}>
      {spanContent && <span className="font-light">{spanContent}</span>} {text}
    </Tag>
  );
};

export default Heading;
