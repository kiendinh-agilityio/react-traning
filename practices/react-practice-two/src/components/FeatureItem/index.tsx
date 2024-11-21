// Import component
import { Paragraph } from '@/components/common';

// Import types
import { TextSize } from '@/types';

interface FeatureItemProps {
  value: string;
  description: string;
  unit?: string;
}

const FeatureItem = ({ value, unit, description }: FeatureItemProps) => (
  <div className="w-[178px] text-primary flex flex-col text-center gap-[17px] pt-[25px] pb-[34px] border border-[#f4f4f4] rounded-[1px] shadow-custom">
    <p className="font-bold text-2md">
      {value} {unit && <span className="text-2sm">{unit}</span>}
    </p>
    <Paragraph size={TextSize.ExtraSmall} text={description} />
  </div>
);

export default FeatureItem;
