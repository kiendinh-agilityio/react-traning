// Import components
import { QuestionIcon } from '@/components/common/Icons';

// Import common components button
import { Button, Paragraph } from '@/components/common/';

const HelpBox = () => (
  <div className="bg-primary w-[218px] py-4 px-4 border border-primary rounded-[15px] m-auto mt-16 text-white">
    <div className="flex items-center justify-center w-[35px] h-[35px] bg-white rounded-xl mb-5">
      <QuestionIcon />
    </div>
    <Paragraph text="Need help?" />
    <Paragraph variant="regular" size="xs" text="Please check our docs" className="mb-[9px]" />
    <Button variant="link" label="DOCUMENTATION" />
  </div>
);

export default HelpBox;
