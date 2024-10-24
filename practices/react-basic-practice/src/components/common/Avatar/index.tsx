interface AvatarProps {
  width: string;
  height: string;
  src: string;
  alt: string;
}

const Avatar = ({ width, height, src, alt }: AvatarProps) => (
  <img className={`rounded-base mr-3.5`} src={src} alt={alt} width={width} height={height} />
);

export default Avatar;
