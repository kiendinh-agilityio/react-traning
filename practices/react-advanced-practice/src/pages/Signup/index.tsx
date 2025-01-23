// Import radix ui
import { Box, Container, Flex } from '@radix-ui/themes';

// Import common components
import { Logo, Button, Text } from '@/components/common';

// Import components
import { Navbar, SignupForm, SocialRegister } from '@/components';

// Import types
import { ButtonVariant } from '@/types';

// Import layouts
import { Footer } from '@/layouts';

// Import types
import { TextSize } from '@/types';

// import images
import { BgSignup } from '@/assets/images';

const Signup = () => {
  const handleButtonDownload = () => {
    // TODO: Add button click handling logic here when buttons are enabled
  };

  return (
    <Box className="px-6 pt-6 pb-[52px]">
      <Container className="relative">
        <img src={BgSignup} alt="Background" className="absolute top-0 -z-10 w-full" />
        <Flex direction="column" className="min-h-screen mx-auto max-w-[939px]">
          <Box className="flex-1 mb-64">
            <Flex align="center" justify="between" className="py-4 px-6">
              <Logo href="/signup" color="secondary" />
              <Navbar iconColor="#fff" textColor="text-light" />
              <Button
                variant={ButtonVariant.Light}
                onClick={handleButtonDownload}
                className="w-[150px] rounded-[34px]"
              >
                Free Download
              </Button>
            </Flex>
            <Flex direction="column" align="center" className="text-center mt-[55px]">
              <Text size={TextSize.Huge} className="text-light font-bold mb-[9px]">
                Welcome!
              </Text>
              <Text className="text-light font-regular mb-9 max-w-[333px]">
                Use these awesome forms to login or create new account in your project for
                free.
              </Text>
            </Flex>
            <Flex
              direction="column"
              align="center"
              width="452px"
              className="mx-auto bg-light py-[45px] px-[51px] border border-light rounded-[15px] drop-shadow-md"
            >
              <Text size={TextSize.Large} className="text-dark font-bold">
                Register with
              </Text>
              <SocialRegister />
              <Text
                size={TextSize.Large}
                className="text-base font-bold mt-[20px] mb-[17px]"
              >
                or
              </Text>
              <SignupForm />
            </Flex>
          </Box>
          <Footer />
        </Flex>
      </Container>
    </Box>
  );
};

export default Signup;
