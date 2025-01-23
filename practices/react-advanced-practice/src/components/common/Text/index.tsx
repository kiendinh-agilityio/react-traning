// Import radix ui
import { Text as TextBase, TextProps } from '@radix-ui/themes';

// Import types
import { TextSize } from '@/types';

type TextBaseProps = {
  children: React.ReactNode;
  size?: TextSize;
} & TextProps;

const Text = ({
  children,
  size = TextSize.Small,
  as = 'p',
  weight = 'regular',
  className = '',
}: TextBaseProps) => (
  <TextBase as={as} weight={weight} className={`${size} ${className}`}>
    {children}
  </TextBase>
);

export default Text;
