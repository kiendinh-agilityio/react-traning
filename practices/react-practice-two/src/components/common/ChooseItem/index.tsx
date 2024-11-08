interface ChooseItemProps {
  imageUrl: string;
  label: string;
  onClick: (imageUrl: string) => void;
  width?: string;
  height?: string;
}

const ChooseItem = ({
  imageUrl,
  label,
  onClick,
  width = '264px',
  height = '264px',
}: ChooseItemProps) => {
  const handleClick = () => onClick(imageUrl);

  return (
    <div onClick={handleClick} className="cursor-pointer relative">
      <img
        width={width}
        height={height}
        src={imageUrl}
        alt={label}
        className="rounded-base shadow-gallery-item"
      />
      <p className="absolute right-0 bottom-0 font-bold text-1lg text-light text-opacity-60 pr-2 pb-1">
        {label}
      </p>
    </div>
  );
};

export default ChooseItem;
