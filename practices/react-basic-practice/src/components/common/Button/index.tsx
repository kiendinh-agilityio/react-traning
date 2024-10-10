interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  isDisabled?: boolean;
  onClick?: () => void;
  label: string;
}

const Button = ({ variant = 'primary', isDisabled, onClick, label }: ButtonProps) => {
  // Conditional class name based on variant and disabled state
  const className = `
    ${isDisabled ? 'primary opacity-50 cursor-not-allowed' : variant} 
    w-40 px-[22px] py-2.5 border border-primary 
    font-helveticaBold font-bold rounded-xl
  `;

  return (
    <button className={className} onClick={onClick} disabled={isDisabled}>
      {label}
    </button>
  );
};

export default Button;
