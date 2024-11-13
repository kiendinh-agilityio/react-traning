// import component
import { Label } from '@/components/common';

interface GalleryItemProps {
  url: string;
  label: string;
  width?: string;
  height?: string;
}

const GalleryItem = ({ url, label, width = '633px', height = '485px' }: GalleryItemProps) => (
  <div className="relative">
    <Label text={label} className="text-primary absolute pt-[30px] px-[38px]" />
    <img src={url} alt={label} width={width} height={height} />
  </div>
);

export default GalleryItem;
