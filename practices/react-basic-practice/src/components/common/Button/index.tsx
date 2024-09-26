interface ButtonProps {
  variant?: 'primary' | 'secondary';
  isDisabled?: boolean;
  onClick?: () => void;
  label: string;
}

const Button = ({ variant = 'primary', isDisabled, onClick, label }: ButtonProps) => {
  // Mapping variants to Tailwind class
  const variantClasses = {
    primary: 'bg-primary text-white',
    secondary: 'bg-transparent text-primary',
  };

  const className = `${variantClasses[variant]} w-40 px-[22px] py-2.5 border border-primary font-helveticaBold font-bold rounded-xl`;

  return (
    <button className={className} onClick={onClick} disabled={isDisabled}>
      {label}
    </button>
  );
};

export default Button;
