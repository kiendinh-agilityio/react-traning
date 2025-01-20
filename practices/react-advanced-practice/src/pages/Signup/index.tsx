// Import radix ui
import { Box, Container } from '@radix-ui/themes';

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
        <img src={BgSignup} alt="Background" className="absolute top-0 -z-10" />
        <Box className="flex flex-col min-h-screen mx-auto max-w-[939px]">
          <Box className="flex-1 mb-64">
            <Box className="flex items-center justify-between py-4 px-6">
              <Logo href="/" color="secondary" />
              <Navbar iconColor="#fff" textColor="text-light" />
              <Button
                variant={ButtonVariant.Light}
                onClick={handleButtonDownload}
                className="w-[150px] rounded-[34px]"
              >
                Free Download
              </Button>
            </Box>
            <Box className="flex flex-col items-center text-center mt-[55px]">
              <Text
                size={TextSize.Huge}
                className="text-light font-bold mb-[9px]"
                content="Welcome!"
              />
              <Text
                className="text-light font-regular mb-9 max-w-[333px]"
                content="Use these awesome forms to login or create new account in your project for free."
              />
            </Box>
            <Box
              width="452px"
              className="flex flex-col items-center mx-auto bg-light py-[45px] px-[51px] border border-light rounded-[15px] drop-shadow-md"
            >
              <Text
                size={TextSize.Large}
                className="text-dark font-bold"
                content="Register with"
              />
              <SocialRegister />
              <Text
                size={TextSize.Large}
                className="text-base font-bold mt-[20px] mb-[17px]"
                content="or"
              />
              <SignupForm />
            </Box>
          </Box>
          <Footer />
        </Box>
      </Container>
    </Box>
  );
};

export default Signup;
