import { memo } from 'react';

// import radix ui
import { Avatar as AvatarBase, AvatarProps } from '@radix-ui/themes';

type AvatarBaseProps = {
  ariaLabel?: string;
  alt?: string;
} & AvatarProps;

const Avatar = memo(
  ({
    ariaLabel = 'Avatar',
    alt = 'Avatar',
    src = '',
    className = '',
    fallback,
  }: AvatarBaseProps) => {
    return (
      <AvatarBase
        aria-label={ariaLabel}
        alt={alt}
        src={src}
        fallback={fallback}
        className={`rounded-base w-[40px] h-[40px] ${className}`}
      />
    );
  },
);

export default Avatar;
