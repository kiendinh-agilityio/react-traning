// Import types
import { LabelSize, LabelColor } from '@/types';

interface LabelProps {
  text: string;
  size?: LabelSize;
  color?: string;
  className?: string;
}

const Label = ({
  text,
  size = LabelSize.Base,
  color = LabelColor.Primary,
  className = '',
}: LabelProps) => <p className={`${size} ${color} font-bold ${className && className}`}>{text}</p>;

export default Label;
