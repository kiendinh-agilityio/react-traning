import { Heading as HeadingBase, HeadingProps } from '@radix-ui/themes';
import { memo } from 'react';

// import types
import { TextSize } from '@/types';

type HeadingBaseProps = {
  text: string;
  size?: TextSize;
} & HeadingProps;

const Heading = memo(
  ({
    text,
    as = 'h1',
    weight = 'bold',
    size = TextSize.Large,
    className = '',
  }: HeadingBaseProps) => (
    <HeadingBase
      as={as}
      weight={weight}
      className={`text-${size} font-bold text-dark ${className}`}
    >
      {text}
    </HeadingBase>
  ),
);

export default Heading;
