interface ParagraphProps {
  text: string;
  variant?: 'regular' | 'bold';
  size?: 'xs' | 'sm' | 'lg' | 'xl';
  className?: string;
}

const Paragraph = ({ text, variant = 'bold', className = '', size = 'sm' }: ParagraphProps) => (
  <p className={`text-${size} ${variant} ${className}`}>{text}</p>
);

export default Paragraph;
