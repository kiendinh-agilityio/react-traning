interface AvatarProps {
  width?: string;
  height?: string;
  url: string;
  alt: string;
}

const Avatar = ({ width = '48px', height = '48px', url, alt }: AvatarProps) => (
  <img className={`rounded-full`} src={url} alt={alt} width={width} height={height} />
);

export default Avatar;
