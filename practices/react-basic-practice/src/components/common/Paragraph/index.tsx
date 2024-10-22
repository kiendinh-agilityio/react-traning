interface ParagraphProps {
  text: string;
  variant?: 'regular' | 'bold';
  size: 'xs' | 'sm' | 'lg' | 'xl';
  className?: string;
}

const Paragraph = ({ text, variant = 'regular', className = '', size }: ParagraphProps) => {
  return <p className={`text-${size} ${variant} ${className}`}>{text}</p>;
};

export default Paragraph;
