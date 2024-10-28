// Import types
import { Variant, TextSize } from '@/types';

interface ParagraphProps {
  value: string;
  variant?: Variant;
  size?: TextSize;
  className?: string;
}

const Paragraph = ({
  value,
  variant = Variant.Bold,
  className = '',
  size = TextSize.Small,
}: ParagraphProps) => <p className={`text-${size} ${variant} ${className}`}>{value}</p>;

export default Paragraph;
