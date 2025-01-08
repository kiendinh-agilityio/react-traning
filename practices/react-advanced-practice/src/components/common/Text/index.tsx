import { memo } from 'react';

// Import radix ui
import { Text as TextBase, TextProps } from '@radix-ui/themes';

// Import types
import { TextSize } from '@/types';

type TextBaseProps = {
  content: string;
  size?: TextSize;
} & TextProps;

const Text = memo(
  ({
    content,
    size = TextSize.Small,
    as = 'p',
    weight = 'regular',
    className = '',
  }: TextBaseProps) => {
    return (
      <TextBase as={as} weight={weight} className={`${size} font-regular ${className}`}>
        {content}
      </TextBase>
    );
  },
);

export default Text;
