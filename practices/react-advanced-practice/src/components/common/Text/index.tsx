// Import radix ui
import { Text as TextBase, TextProps } from '@radix-ui/themes';

// Import types
import { TextSize } from '@/types';

type TextBaseProps = {
  content: string;
  size?: TextSize;
} & TextProps;

const Text = ({
  content,
  size = TextSize.Small,
  as = 'p',
  weight = 'regular',
  className = '',
}: TextBaseProps) => (
  <TextBase as={as} weight={weight} className={`${size} ${className}`}>
    {content}
  </TextBase>
);

export default Text;
