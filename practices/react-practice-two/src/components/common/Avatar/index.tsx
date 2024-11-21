// import types
import { AvatarSize } from '@/types';

interface AvatarProps {
  url: string;
  alt: string;
  size?: AvatarSize;
}

const Avatar = ({ url, alt, size = AvatarSize.md }: AvatarProps) => (
  <img className={`${size} rounded-full`} src={url} alt={alt} />
);

export default Avatar;
