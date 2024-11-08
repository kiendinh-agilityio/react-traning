// import components
import { Label } from '@/components/common';

// import types
import { LabelSize, LabelColor } from '@/types';

interface ChooseItemProps {
  image: string;
  label: string;
  onClick: (imageUrl: string) => void;
  width?: string;
  height?: string;
}

const ChooseItem = ({
  image,
  label,
  onClick,
  width = '264px',
  height = '264px',
}: ChooseItemProps) => {
  const handleChooseItem = () => onClick(image);

  return (
    <div onClick={handleChooseItem} className="cursor-pointer relative">
      <img
        width={width}
        height={height}
        src={image}
        alt={label}
        className="rounded-base shadow-gallery-item"
      />
      <Label
        size={LabelSize.Large}
        color={LabelColor.Secondary}
        text={label}
        className="absolute right-0 bottom-0 pr-2 pb-1"
      />
    </div>
  );
};

export default ChooseItem;
