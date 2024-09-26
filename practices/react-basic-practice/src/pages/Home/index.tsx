// Import icon
import { SearchIcon } from '@/components/common/Icons';

// Import components
import { Logo, Heading, Input, Button } from '@/components/common';

// Import constants
import { BUTTON_STYLE } from '@/constants';

const Home = () => {
  return (
    <>
      <Logo />
      <Heading text="Authors Table" />
      <Input name="authorName" type="search" placeholder="Type here..." leftIcon={<SearchIcon />} />
      <Button
        textColor={BUTTON_STYLE.TEXT_COLOR.PRIMARY}
        backgroundColor={BUTTON_STYLE.BACKGROUND_COLOR.SECONDARY}
        label="Add New Author"
      />
    </>
  );
};

export default Home;
