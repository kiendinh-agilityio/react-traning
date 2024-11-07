// import component
import { Paragraph } from '@/components/common';

// import types
import { ParagraphVariant } from '@/types';

interface GalleryItemProps {
  url: string;
  label: string;
  width?: string;
  height?: string;
}

const GalleryItem = ({ url, label, width = '633px', height = '485px' }: GalleryItemProps) => (
  <div className="relative">
    <Paragraph
      variant={ParagraphVariant.Bold}
      text={label}
      className="text-primary text-3xl leading-md absolute pt-[30px] px-[38px]"
    />
    <img src={url} alt={label} width={width} height={height} />
  </div>
);

export default GalleryItem;
