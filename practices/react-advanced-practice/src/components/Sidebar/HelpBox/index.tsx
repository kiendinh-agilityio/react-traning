// Import radix ui
import { Box } from '@radix-ui/themes';

// Import components
import { QuestionIcon } from '@/components/common/Icons';

// Import common components button
import { Button, Text, IconWrapper } from '@/components/common/';

// Import types
import { ButtonVariant, TextSize } from '@/types';

const HelpBox = () => {
  const handleLinkDocument = () => {
    // TODO: Add button click handling logic here when buttons are enabled
  };

  return (
    <Box className="bg-primary w-[218px] py-4 px-4 border border-primary rounded-[15px] m-auto mt-16 text-white">
      <IconWrapper icon={<QuestionIcon />} />
      <Text weight="bold" content="Need help?" className="font-bold mt-5" />
      <Text
        size={TextSize.ExtraSmall}
        content="Please check our docs"
        className="mb-[9px]"
      />
      <Button variant={ButtonVariant.Link} onClick={handleLinkDocument}>
        DOCUMENTATION
      </Button>
    </Box>
  );
};

export default HelpBox;
