// Import components
import { QuestionIcon } from '@/components/common/Icons';

// Import common components button
import { Button, Paragraph, IconWrapper } from '@/components/common/';

// Import types
import { Variant, TextSize } from '@/types';

const HelpBox = () => (
  <div className="bg-primary w-[218px] py-4 px-4 border border-primary rounded-[15px] m-auto mt-16 text-white">
    <IconWrapper icon={<QuestionIcon />} />
    <Paragraph value="Need help?" className="mt-5" />
    <Paragraph
      variant={Variant.Regular}
      size={TextSize.ExtraSmall}
      value="Please check our docs"
      className="mb-[9px]"
    />
    <Button variant={Variant.Link} label="DOCUMENTATION" onClick={() => {}} />
  </div>
);

export default HelpBox;
