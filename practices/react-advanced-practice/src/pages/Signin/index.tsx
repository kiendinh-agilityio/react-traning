// Import radix ui
import { Box, Flex } from '@radix-ui/themes';

// Import common components
import { Logo, Button, Text } from '@/components/common';

// Import components
import { Navbar, AuthForm, ErrorBoundary } from '@/components';

// Import types
import { ButtonVariant } from '@/types';

// Import layouts
import { Footer } from '@/layouts';

// Import types
import { TextSize } from '@/types';

// import images
import { BgSignin } from '@/assets/images';

// Import services
import { authenticateUser } from '@/services';

const Signin = () => {
  const handleDownload = () => {
    // TODO: Add button click handling logic here when buttons are enabled
  };

  // Handle signin submit
  const handleSigninSubmit = async (data: { email: string; password: string }) =>
    await authenticateUser(data);

  return (
    <Flex direction="column" className="min-h-screen mx-auto max-w-[987px] pt-6 pb-10">
      <Box className="flex-1 mb-64">
        <Box className="flex items-center justify-between py-4 px-6 border-[1.5px] rounded-[15px] border-light-opacity bg-light-gradient shadow-[0px_4px_10px_rgba(0,0,0,0.05)] backdrop-blur-[21px] mb-48">
          <Logo href="/signin" />
          <Navbar />
          <Button variant={ButtonVariant.Download} onClick={handleDownload}>
            Free Download
          </Button>
        </Box>
        <Box>
          <Text size={TextSize.Huge} className="text-primary font-bold mb-[9px]">
            Welcome Back
          </Text>
          <Text className="text-base font-bold mb-9">
            Enter your email and password to sign in
          </Text>
          <ErrorBoundary
            fallback={
              <Text className="text-center">SigninForm from sign in went wrong!!</Text>
            }
          >
            <AuthForm
              type="signin"
              onSubmit={handleSigninSubmit}
              bottomText="Don't have an account?"
              bottomLink="/signup"
              bottomLinkText="Sign up"
            />
          </ErrorBoundary>
        </Box>
        <img
          width="730px"
          src={BgSignin}
          alt="Background"
          className="absolute top-0 right-0 -z-10"
        />
      </Box>
      <Footer />
    </Flex>
  );
};

export default Signin;
