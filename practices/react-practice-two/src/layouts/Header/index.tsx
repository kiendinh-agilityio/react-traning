// import common components
import { Logo, Button } from '@/components/common';

// import components
import { Navbar } from '@/components';

// import types
import { ButtonVariant } from '@/types';

const Header = () => {
  const handleButtonLogIn = () => {
    // TODO: Add button click handling logic here when buttons are enabled
  };

  const handleButtonSignUp = () => {
    // TODO: Add button click handling logic here when buttons are enabled
  };

  return (
    <header className="flex justify-between items-center px-[50px] py-[27px] border-b border-[#eae8f3]">
      <Logo />
      <Navbar />
      <div className="flex flex-row gap-[15px] text-xs ">
        <Button variant={ButtonVariant.Secondary} label="LOG IN" onClick={handleButtonLogIn} />
        <Button label="SIGN UP" onClick={handleButtonSignUp} />
      </div>
    </header>
  );
};

export default Header;
