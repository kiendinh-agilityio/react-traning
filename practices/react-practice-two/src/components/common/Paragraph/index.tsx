// Import types
import { ParagraphVariant, TextSize } from '@/types';

interface ParagraphProps {
  text: string;
  variant?: ParagraphVariant;
  size?: TextSize;
  className?: string;
}

const Paragraph = ({
  text,
  variant = ParagraphVariant.Regular,
  size = TextSize.Base,
  className = '',
}: ParagraphProps) => <p className={`${size} ${className && className} ${variant}`}>{text}</p>;

export default Paragraph;
