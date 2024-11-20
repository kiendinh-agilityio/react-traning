import { useState } from 'react';

// import common components
import { Logo, Button, Modal } from '@/components/common';

// import components
import { Navbar, LoginForm } from '@/components';

// import types
import { ButtonVariant } from '@/types';

const Header = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleButtonLogIn = () => setLoginModalOpen(true);

  const handleModalClose = () => setLoginModalOpen(false);

  const handleButtonSignUp = () => {
    // TODO: Add button click handling logic here when buttons are enabled
  };

  return (
    <header className="flex justify-between items-center px-[50px] py-[27px] border-b border-[#eae8f3]">
      <Logo />
      <Navbar />
      <div className="flex flex-row gap-[15px] text-xs ">
        <Button variant={ButtonVariant.Secondary} onClick={handleButtonLogIn}>
          LOG IN
        </Button>
        <Button onClick={handleButtonSignUp}>SIGN UP</Button>
      </div>
      <Modal isOpen={isLoginModalOpen} onClose={handleModalClose}>
        <LoginForm />
      </Modal>
    </header>
  );
};

export default Header;
