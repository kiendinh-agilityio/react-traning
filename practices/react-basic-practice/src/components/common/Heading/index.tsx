interface HeadingProps {
  text: string;
  level?: 1 | 2 | 3;
  size: 'sm' | 'lg' | 'xl';
  className?: string;
}

const Heading = ({ text, level = 1, className = '', size }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`text-${size} flex justify-center font-helveticaBold font-bold ${className}`}>
      {text}
    </Tag>
  );
};

export default Heading;
