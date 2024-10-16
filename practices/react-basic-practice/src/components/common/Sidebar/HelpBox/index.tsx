// Import components
import { QuestionIcon } from '@/components/common/Icons';

// Import common components button
import { Button } from '@/components/common/';

const HelpBox = () => (
  <div className="bg-primary w-[218px] py-4 px-4 border border-primary rounded-[15px] m-auto mt-16 text-white">
    <div className="flex items-center justify-center w-[35px] h-[35px] bg-white rounded-xl mb-5">
      <QuestionIcon />
    </div>
    <p className="font-helveticaBold font-bold tracking-wide">Need help?</p>
    <p className="font-xs leading-base mb-[9px]">Please check our docs</p>
    <Button variant="normal" label="DOCUMENTATION" />
  </div>
);

export default HelpBox;
