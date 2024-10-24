// Import components
import { QuestionIcon } from '@/components/common/Icons';

// Import common components button
import { Button, Paragraph, IconWrapper } from '@/components/common/';

const HelpBox = () => (
  <div className="bg-primary w-[218px] py-4 px-4 border border-primary rounded-[15px] m-auto mt-16 text-white">
    <IconWrapper icon={<QuestionIcon />} />
    <Paragraph text="Need help?" className="mt-5" />
    <Paragraph variant="regular" size="xs" text="Please check our docs" className="mb-[9px]" />
    <Button variant="link" label="DOCUMENTATION" />
  </div>
);

export default HelpBox;
