import { TextSize } from '@/types';

interface HeadingProps {
  text: string;
  level?: 1 | 2 | 3;
  size?: TextSize;
  spanContent?: string;
}

const Heading = ({ level = 2, size = TextSize.Large, text, spanContent }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const headingClassName = `text-${size} font-bold text-primary`;

  return (
    <>
      {level === 1 ? (
        <h1 className={headingClassName}>
          {spanContent && <span className="font-light">{spanContent}</span>} <br />
          {text}
        </h1>
      ) : (
        <Tag className={headingClassName}>{text}</Tag>
      )}
    </>
  );
};

export default Heading;
