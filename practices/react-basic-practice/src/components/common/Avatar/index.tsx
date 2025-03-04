interface AvatarProps {
  width?: string;
  height?: string;
  src: string;
  alt: string;
}

const Avatar = ({ width = '40px', height = '40px', src, alt }: AvatarProps) => (
  <img className={`rounded-base mr-3.5`} src={src} alt={alt} width={width} height={height} />
);

export default Avatar;
