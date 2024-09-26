import { ReactNode } from 'react';

interface ButtonProps {
  backgroundColor: string;
  textColor: string;
  isDisabled?: boolean;
  onClick?: () => void;
  label: ReactNode;
}

const Button = ({ textColor, backgroundColor, isDisabled, onClick, label }: ButtonProps) => {
  const className = `${textColor} ${backgroundColor} w-40 border border-primary px-[22px] py-2.5 font-helveticaBold font-bold rounded-xl`;

  return (
    <button className={className} onClick={onClick} disabled={isDisabled}>
      {label}
    </button>
  );
};

export default Button;
