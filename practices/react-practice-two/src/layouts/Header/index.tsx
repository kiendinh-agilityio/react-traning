// import components
import { Logo, Navbar, Button } from '@/components/common';

// import types
import { ButtonVariant } from '@/types';

const Header = () => {
  const handleButtonClick = () => {
    // TODO: Add button click handling logic here when buttons are enabled
  };

  return (
    <header className="container flex justify-between items-center py-[27px] border-b border-[#eae8f3]">
      <Logo />
      <Navbar />
      <div className="flex flex-row gap-[15px]">
        <Button
          variant={ButtonVariant.Secondary}
          label="LOG IN"
          onClick={handleButtonClick}
          isDisabled={true}
        />
        <Button label="SIGN UP" onClick={handleButtonClick} isDisabled={true} />
      </div>
    </header>
  );
};

export default Header;
