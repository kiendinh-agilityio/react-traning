// Import types
import { ParagraphVariant, TextSize } from '@/types';

interface ParagraphProps {
  text: string;
  variant?: ParagraphVariant;
  size?: TextSize;
}

const Paragraph = ({
  text,
  variant = ParagraphVariant.Regular,
  size = TextSize.Base,
}: ParagraphProps) => <p className={`${size} ${variant}`}>{text}</p>;

export default Paragraph;
