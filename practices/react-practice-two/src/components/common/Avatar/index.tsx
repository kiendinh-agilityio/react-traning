interface AvatarProps {
  url: string;
  alt: string;
  width?: string;
  height?: string;
}

const Avatar = ({ url, alt, width = '48px', height = '48px' }: AvatarProps) => (
  <img className={`rounded-full`} src={url} alt={alt} width={width} height={height} />
);

export default Avatar;
